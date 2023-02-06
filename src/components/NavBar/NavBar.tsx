import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import {
  indexRoute,
  problemStatementsRoute,
  processFlowRoute,
  projectImplementationRoute,
  venueRoute,
  sbhthemesRoute,
  updatesRoute,
  prizesRoute,
  eligibilityRoute,
} from "../../Routes";
import guideline_clg from "../../assets/docs/Guidelines-College-SPOC.pdf";
import guideline_school from "../../assets/docs/Guidelines-School-SPOC.pdf";
import idea_template_college from "../../assets/docs/Idea-Presentation-Format-SBH2023-College.pptx";
import idea_template_school from "../../assets/docs/Idea-Presentation-Format-SIH2022-School.pptx";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import "./NavBar.style.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="xxl" className="px-3">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            className="brand-logo"
            style={{
              width: "50px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex ">
            <NavDropdown title="Discover about SBH">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>About SBH 2023</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={processFlowRoute}>SBH 2023 Process Flow</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={sbhthemesRoute}>SBH 2023 Themes</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={problemStatementsRoute}>
                  SBH 2023 Problem Statements
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>SBH 2023 Teams</Link>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link to={projectImplementationRoute}>
                Project Implementation
              </Link>
            </div>
            <NavDropdown title="Guidelines">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={guideline_clg} target="_blank" rel="noreferrer">
                  Colleges
                </a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={guideline_school} target="_blank" rel="noreferrer">
                  Schools
                </a>
              </div>
            </NavDropdown>
            <NavDropdown title="Idea Template">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={idea_template_college} download="idea_template">
                  For Colleges
                </a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={idea_template_school} download="idea_template">
                  For Schools
                </a>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link to={venueRoute}>Venue</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={updatesRoute}>Updates</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={prizesRoute}>Prizes</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={eligibilityRoute}>Eligibility</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={indexRoute}>FAQs</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <a href="#contact">Contact Us</a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
