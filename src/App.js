import "./App.css";
import About from "./pages/about"
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/About" element={About} />
        <Route path="/ContactUs" element={ContactUs} />
      </Routes>
    </Router>
  )
}

export default App;