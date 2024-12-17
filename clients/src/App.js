import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupLogin from "./component/SignupLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
