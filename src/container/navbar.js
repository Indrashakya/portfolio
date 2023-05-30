import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="App">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">Indra</div>

            <ul className="nav-links">
              <input type="checkbox" id="checkbox_toggle" />
              <label for="checkbox_toggle" className="hamburger">
                &#9776;
              </label>
              <div className="menu">
                <li>
                  <Link to="/" className="active">Home</Link>
                </li>
                <li>
                  <Link to="/aboutMe">About Me</Link>
                </li>

                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
