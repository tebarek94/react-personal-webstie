import express from "express";
import router from "./routes/routes.js";
import dbCon from "./database/database.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000; // Default to port 5000 if not defined in env

// CORS setup to allow requests from localhost:3000 (React frontend)
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from React frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow the necessary methods
  allowedHeaders: ["Content-Type"], // Allow specific headers
};

app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use("", router);

// Connect to the database
dbCon.connect((err) => {
  if (err) {
    console.log("Database is not connected");
  } else {
    console.log("Database is connected successfully");

    // Start the server after the database is connected
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});
