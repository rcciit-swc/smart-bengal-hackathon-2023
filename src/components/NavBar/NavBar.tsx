import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { indexRoute, problemStatementsRoute } from "../../Routes";
import guideline_clg from "../../assets/docs/Guidelines-College-SPOC.pdf";
import guideline_school from "../../assets/docs/Guidelines-School-SPOC.pdf";
import idea_template_college from "../../assets/docs/Idea-Presentation-Format-SBH2023-College.pptx";
import idea_template_school from "../../assets/docs/Idea-Presentation-Format-SIH2022-School.pptx";
import process_flow from "../../assets/docs/RCCIIT Smart Bengal Hackathon 2023_Publication_Final.pdf";
import Footer from "../Footer/Footer";
import "./NavBar.style.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="xxl" className="px-3">
        <Navbar.Brand href="#home">
          <img src="" alt="logo" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex ">
            <NavDropdown title="Discover about SBH">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>About RCCSBH 2023</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={process_flow} target="_blank">RCCSBH 2023 Process Flow</a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={indexRoute}>RCCSBH 2023 Themes</Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link to={problemStatementsRoute}>
                  RCCSBH 2023 Problem Statements
                </Link>
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
                <a href={guideline_clg} target="_blank">Colleges</a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={guideline_school} target="_blank">Schools</a>
              </div>
            </NavDropdown>
            <NavDropdown title="Idea Template">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={idea_template_college} download="idea_template">For Colleges</a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a href={idea_template_school} download="idea_template">For Schools</a>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link to={indexRoute}>Venue</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={indexRoute}>Updates</Link>
            </div>
            <div className="nav-link text-decoration-none">
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
            <div className="nav-link text-decoration-none">
              <Link to={indexRoute}>FAQs</Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link to={indexRoute}>Contact Us</Link>
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
