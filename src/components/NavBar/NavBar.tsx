import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { indexRoute } from "../../Routes";
import "./NavBar.style.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-3"
      >
        <Navbar.Brand href="#home">
          <div style={{ backgroundColor: "red" }} className="brand-container">
            <img src="" alt="logo" className="brand-logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex ">
            <NavDropdown title="Discover about SBH">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>About RCCSBH2023</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>RCCSBH 2023 Process Flow</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>RCCSBH 2023 Themes</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>RCCSBH 2023 Problem Statements</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>RCCSBH 2023 Teams</Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Project Implementation">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>
                  Guidelines for further development and <br /> deployment of
                  Winning Projects
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Intellectual Property</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Important Note</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Travel Norms</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Stay</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Field Visits</Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Guidelines">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Colleges</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Schools</Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Idea Template">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>For Colleges</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>For Schools</Link>
              </div>
            </NavDropdown>
            <div className="nav-link">
              <Link to={indexRoute}>Venue</Link>
            </div>
            <div className="nav-link">
              <Link to={indexRoute}>Updates</Link>
            </div>
            <div className="nav-link">
              <Link to={indexRoute}>Prizes</Link>
            </div>
            <NavDropdown title="Eligibility">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Colleges</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>Schools</Link>
              </div>
            </NavDropdown>
            <div className="nav-link">
              <Link to={indexRoute}>FAQs</Link>
            </div>
            <div className="nav-link">
              <Link to={indexRoute}>Contact Us</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
