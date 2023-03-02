import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a id="brandName" className="navbar-brand" href="/">
          KITABU REVIEWS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div className="d-flex" role="search">
            <Link to="/" className="btn btn-dark btn-sm m-2">
              List Books
            </Link>
            <Link to="/createbook" className="btn btn-dark btn-sm m-2">
              Create Books
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
