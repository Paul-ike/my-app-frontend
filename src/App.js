import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import NavBar from "./components/NavBar/NavBar.js";
import { useEffect, useState } from "react";
import CreateBook from "./components/CreateBook/CreateBook";
import Review from "./components/Review/Review";
import EditBook from "./components/EditBook/EditBook";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage books={books} />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/viewbook/:id" element={<Review />} />
        <Route path="/updatebook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
