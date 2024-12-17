import express from "express";
import bcrypt from "bcryptjs";
import dbCon from "../database/database.js"; // Assuming you have a database connection file

const router = express.Router();

// POST /register route to handle user registration
router.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Validate password and confirmPassword
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  // Hash the password using bcryptjs
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the new user in the database (assuming you're using a `users` table)
  dbCon.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hashedPassword],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }

      // Respond with success message
      res.status(201).json({ message: "User registered successfully!" });
    }
  );
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const user = results[0];

      // Compare password with hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h", // Token expiration time
      });

      res.status(200).json({ message: "Login successful", token });
    }
  );
});

// Start the server

export default router;
