import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ books }) {
  return (
    <div id="homepage">
      <div id="booksCard" className="card p-3">
        <div className="row">
          {books.map((book) => (
            <div
              id="bookCard"
              className="card col- m-2"
              // style={{ width: "18rem" }}
            >
              <img
                // style={{ width: "15rem" }}
                src={book.image}
                className="card-img-top img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Title: {book.title}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: {book.price}</p>
                <Link to="/review" className="btn btn-outline-light btn-sm">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
