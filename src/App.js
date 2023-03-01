import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import NavBar from "./components/NavBar/NavBar.js";
import { useEffect, useState } from "react";
import CreateBook from "./components/CreateBook/CreateBook";
import Review from "./components/Review/Review";

function App() {
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((data) => SetBooks(data));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage books={books} />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
