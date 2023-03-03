import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBook.css";

function CreateBook() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    price: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const { image, title, author, price } = formData;
    if (!image || !title || !author || !price) {
      alert("Please fill out all fields.");
      return;
    }

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => data);
    navigate("/");
    document.location.reload();
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const isFormValid =
    formData.image && formData.title && formData.author && formData.price;

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <h3>Create Book</h3>
        <div className="mb-3">
          <label className="form-label">Book Image</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="image"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="title"
            placeholder="Type Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Author</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="author"
            placeholder="Type Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Price</label>
          <input
            type="number"
            onChange={handleChange}
            className="form-control"
            name="price"
            placeholder="Type Here"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-light btn-sm m-4"
          disabled={!isFormValid}
        >
          Create Book
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
