import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/book/${id}`)
      .then((r) => r.json())
      .then((data) => {
        const { image, title, author, price } = data;
        setImage(image);
        setTitle(title);
        setAuthor(author);
        setPrice(price);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/updatebook/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
        title,
        author,
        price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setTitle(data.title);
        setAuthor(data.author);
        setPrice(data.price);
        navigate("/");
        document.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <h3>Update Book</h3>
        <div className="mb-3">
          <label className="form-label">Book Image</label>
          <input
            className="form-control"
            name="image"
            value={image}
            placeholder="Enter image_url..."
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            className="form-control"
            name="title"
            value={title}
            placeholder="Type Here"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Author</label>
          <input
            className="form-control"
            name="author"
            value={author}
            placeholder="Type Here"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={price}
            placeholder="Type Here"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-light btn-sm m-4">
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;
