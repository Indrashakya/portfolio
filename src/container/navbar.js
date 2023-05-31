import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    menuClass: ""
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu
    });
  };

  const toggleOpen = () => setState({ ...state, isOpen: !state.isOpen });

  const show = state.menu ? "show" : "";
  const menuClass = `dropdown-menu${state.isOpen ? " show" : ""}`;

  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Indra
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={"collapse  ml-auto navbar-collapse justify-content-end " + show}>
        <div className="navbar-nav justify-content-end">
          <Link
          style={{margin:'0 0.75rem'}}
            className={state.homeLinkClass}
            to="/"
            onClick={() =>
              state.homeLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            Home 
          </Link>
          <Link
          style={{margin:'0 0.75rem'}}

            className={state.aboutLinkClass}
            to="/aboutMe"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            About
          </Link>
          <Link
          style={{margin:'0 0.75rem'}}

            className={state.aboutLinkClass}
            to="/skills"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            Skills
          </Link>
          <Link
          style={{margin:'0 0.75rem'}}

            className={state.aboutLinkClass}
            to="/projects"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            Projects
          </Link>
          <Link
          style={{margin:'0 0.75rem'}}

            className={state.aboutLinkClass}
            to="/contact"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            Contact
          </Link>
      
        </div>

        <div className="dropdown" onClick={toggleOpen}>
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Dropdown
          </div>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/submenu1">
              Sub Menu1
            </Link>
            <Link className="dropdown-item" to="/submenu2">
              Sub Menu2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
