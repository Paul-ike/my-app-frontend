import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Review.css";

function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/book/${id}`)
      .then((r) => r.json())
      .then((data) => setBook(data));
  }, []);

  function handleDeleteClick() {
    fetch(`http://localhost:9292/deletebook/${id}`, {
      method: "DELETE",
    });
    navigate("/");
    document.location.reload();
  }

  return (
    <div id="review">
      <div id="reviewCard" className="card p-5">
        <div id="viewBook" className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-5">
              <img
                id="imgReview"
                src={book.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div id="cardDetail" className="col-md-7">
              <div className="card-body">
                <h4 className="card-title">Title: {book.title}</h4>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: {book.price}</p>
                <div id="linkBtn">
                  <Link
                    to={`/updatebook/${book.id}`}
                    className="btn btn-outline-light btn-sm"
                  >
                    Update
                  </Link>
                  <button
                    onClick={handleDeleteClick}
                    className="btn btn-outline-light btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
