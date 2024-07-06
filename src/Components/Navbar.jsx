/* eslint-disable react/prop-types */
import NewsYork from "../assets/NewsYork.png";
const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "black" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="rounded-2"
              style={{ height: "80px" }}
              src={NewsYork}
              onClick={() => setCategory("general")}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav fs-5 fw-semibold ">
              <a
                className="nav-link"
                role="button"
                onClick={() => setCategory("general")}
              >
                General
              </a>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <a
                  role="button"
                  className="nav-link "
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("science")}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
