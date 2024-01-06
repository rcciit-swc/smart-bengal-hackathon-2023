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
  contactUsRoute,
  faqRoute,
  rulesRoute,
  resultSeniorRoute,
  resultJuniorRoute
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
      <Navbar
        collapseOnSelect
        expanded={expanded}
        expand="xl"
        className="px-3 z-top navbar__color"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            className="brand-logo"
            style={{
              width: "100%",
              maxHeight: "50px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          style={{ paddingInline: 0 }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex">
            <NavDropdown title="Discover about SBH">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={indexRoute}>
                  About SBH 2024
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={processFlowRoute}>
                  SBH 2024 Process Flow
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={sbhthemesRoute}>
                  SBH 2024 Themes
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
                  SBH 2024 Teams
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={rulesRoute}>
                  SBH 2024 Rules and Regulations
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
            {/* <NavDropdown className="navbar__color" title="Guidelines">
              <div className="dropdown-item">
                <span className="dot"></span>
                <a
                  href="https://docs.google.com/document/d/17DrpmAKZ20Kvwqg2hjQWbtd_Rtz22m69/edit?usp=sharing&ouid=107107518174504861403&rtpof=true&sd=true"
                  onClick={navHandler}
                  target="_blank"
                  rel="noreferrer"
                >
                  SBH Senior 2023
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
                  SBH Junior 2023 
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
            </NavDropdown> */}
            <NavDropdown className="navbar__color" title="Results">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link
                  //href="https://docs.google.com/document/d/17DrpmAKZ20Kvwqg2hjQWbtd_Rtz22m69/edit?usp=sharing&ouid=107107518174504861403&rtpof=true&sd=true"
                  onClick={navHandler}
                  //target="_blank"
                  //rel="noreferrer"
                  to={resultSeniorRoute}
                >
                  SBH Senior 2023
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link
                  //href="https://docs.google.com/document/d/1aO2-qzhJioC-SLw2JQ6e7nprd9i7KrEk/edit?usp=sharing&ouid=107107518174504861403&rtpof=true&sd=true"
                  onClick={navHandler}
                  //target="_blank"
                  //rel="noreferrer"
                  to={resultJuniorRoute}
                >
                  SBH Junior 2023
                </Link>
              </div>
            </NavDropdown>
            <NavDropdown title="Hackathon Details">
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={venueRoute}>
                  Venue
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={updatesRoute}>
                  Registration
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={prizesRoute}>
                  Prizes
                </Link>
              </div>
              <div className="dropdown-item">
                <span className="dot"></span>
                <Link onClick={navHandler} to={eligibilityRoute}>
                  Eligibility
                </Link>
              </div>
            </NavDropdown>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={faqRoute}>
                FAQs
              </Link>
            </div>
            <div className="nav-link text-decoration-none">
              <Link onClick={navHandler} to={contactUsRoute}>
                Contact Us
              </Link>
            </div>
            {/* <button
              onClick={(e) => {
                e.preventDefault();
                // addProblemStatement("2SsRL825aYlHU5e5vxYw");
                addOrganisation()
              }}
            >
              ADD
            </button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
