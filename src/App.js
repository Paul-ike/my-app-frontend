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
    fetch(
      "https://phase-3-sinatra-react-project-production-4692.up.railway.app/books"
    )
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  function handleAddBook(newBook) {
    setBooks([...books, newBook]);
  }

  function handleDeleteBook(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  // function handleUpdateBook(updatedBookObj) {
  //   const updatedBooks = books.map((book) => {
  //     if (book.id === updatedBookObj.id) {
  //       return updatedBookObj;
  //     } else {
  //       return book;
  //     }
  //   });
  //   setBooks(updatedBooks);
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage books={books} />} />
        <Route
          path="/createbook"
          element={<CreateBook onAddBook={handleAddBook} />}
        />
        <Route
          path="/viewbook/:id"
          element={<Review onBookDelete={handleDeleteBook} />}
        />
        <Route path="/updatebook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
