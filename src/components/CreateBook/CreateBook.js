import React, { useState } from "react";
import "./CreateBook.css";

function CreateBook() {
  const [formData, SetFormData] = useState({
    image: "",
    title: "",
    author: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => data);
    document.location.reload();
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    SetFormData({ ...formData, [key]: value });
  }

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
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
            onChange={handleChange}
            className="form-control"
            name="price"
            placeholder="Type Here"
          />
        </div>
        <button type="submit" className="btn btn-dark btn-sm m-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
