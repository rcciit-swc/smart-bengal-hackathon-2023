import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import {
  indexRoute,
  problemStatementsRoute,
  processFlowRoute,
  projectImplementationRoute,
  TeamImplementationRoute,
  venueRoute,
  sbhthemesRoute,
  updatesRoute,
  teamRoute,
  prizesRoute,
  eligibilityRoute,
} from "../../Routes";
import idea_template_college from "../../assets/docs/Idea-Presentation-Format-SBH2023-College.pptx";
import idea_template_school from "../../assets/docs/Idea-Presentation-Format-SIH2022-School.pptx";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import "./NavBar.style.css";
import { useState } from "react";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const navHandler = () => {
    setExpanded(false);
  };
  window.onload = () => setExpanded(false);

  return (
    <>
      <Navbar collapseOnSelect expanded={expanded} expand="md" className="px-3">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            className="brand-logo"
            style={{
              width: "50px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex bg-navbar">
            <NavDropdown title="Discover about SBH">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={indexRoute}>
                  About SBH 2023
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={processFlowRoute}>
                  SBH 2023 Process Flow
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={sbhthemesRoute}>
                  SBH 2023 Themes
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={problemStatementsRoute}>
                  SBH 2023 Problem Statements
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={teamRoute}>
                  SBH 2023 Teams
                </Link>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={TeamImplementationRoute}>
                Executive Team
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={projectImplementationRoute}>
                Project Implementation
              </Link>
            </div>
            <NavDropdown title="Guidelines">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a
                  href="https://docs.google.com/document/d/17DrpmAKZ20Kvwqg2hjQWbtd_Rtz22m69/edit?usp=sharing&ouid=107107518174504861403&rtpof=true&sd=true"
                  onClick={navHandler}
                  target="_blank"
                  rel="noreferrer"
                >
                  SBH Senior
                </a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a
                  href="https://docs.google.com/document/d/1aO2-qzhJioC-SLw2JQ6e7nprd9i7KrEk/edit?usp=sharing&ouid=107107518174504861403&rtpof=true&sd=true"
                  onClick={navHandler}
                  target="_blank"
                  rel="noreferrer"
                >
                  SBH Junior
                </a>
              </div>
            </NavDropdown>
            <NavDropdown title="Idea Template">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a
                  href={idea_template_college}
                  onClick={navHandler}
                  download="idea_template"
                >
                  For Colleges
                </a>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <a
                  href={idea_template_school}
                  onClick={navHandler}
                  download="idea_template"
                >
                  For Schools
                </a>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={venueRoute}>
                Venue
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={updatesRoute}>
                Updates
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={prizesRoute}>
                Prizes
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={eligibilityRoute}>
                Eligibility
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={indexRoute}>
                FAQs
              </Link>
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
