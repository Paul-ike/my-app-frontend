import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a id="brandName" class="navbar-brand" href="/">
          KITABU REVIEWS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div class="d-flex" role="search">
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
