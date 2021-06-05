import React, { useState, useRef } from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";

function Header() {
  const [toggleCardsMegaMenu, setToggleCardsMegaMenu] = useState(false);
  const megaMenuRef = useRef();

  const handleToggleMegaMenu = () => {
    megaMenuRef.current.classList.toggle("active");
  };

  const handleCardsMegaMenu = () => {
    setToggleCardsMegaMenu(!toggleCardsMegaMenu);
  };

  const handleCardsHover = () => {
    setToggleCardsMegaMenu(!toggleCardsMegaMenu);
    handleToggleMegaMenu();
    console.log(toggleCardsMegaMenu, "toggleCardsMegaMenu");
  };

  return (
    <div className="zHeader">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand>MYINVITEZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className="primary-text"
                onMouseEnter={handleToggleMegaMenu}
                onMouseLeave={handleToggleMegaMenu}
              >
                Types of invitations
              </Nav.Link>
              <Nav.Link
                className="primary-text"
                onMouseEnter={handleCardsHover}
                onMouseLeave={handleCardsHover}
              >
                Cards
              </Nav.Link>
              <Nav.Link className="primary-text">Pricing</Nav.Link>
              <Nav.Link className="primary-text">FAQ</Nav.Link>
              <Nav.Link eventKey={2} className="primary-text">
                Login/Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        ref={megaMenuRef}
        className="z-mega-menu"
        onMouseEnter={handleToggleMegaMenu}
        onMouseLeave={handleToggleMegaMenu}
      >
        {/* invitation */}

        {toggleCardsMegaMenu ? (
          <div className="d-flex">
            <div className="child-categories">
              <div className="heading">Birthday</div>
              <div className="content">Belated</div>
              <div className="content">Kids</div>
              <div className="content">Family</div>
              <div className="content">For Her</div>
              <div className="content">For Him</div>
              <div className="content">Funny</div>
              <div className="content">Add a Photo</div>
              <div className="content">Milestone</div>
            </div>
            <div className="child-categories">
              <div className="heading">Thank You</div>
              <div className="content">Baby</div>
              <div className="content">Baptism</div>
              <div className="content">Birthday</div>
              <div className="content">Baby Shower</div>
              <div className="content">For Support</div>
              <div className="content">Graduation</div>
              <div className="content">Teacher Appreciation</div>
              <div className="content">First Communion</div>
              <div className="content">Wedding</div>
            </div>
            <div className="child-categories">
              <div className="heading">Ocassion</div>
              <div className="content">Anniversary</div>
              <div className="content">Bar Mitzvah</div>
              <div className="content">Good Luck</div>
              <div className="content">New Baby</div>
              <div className="content">Men's Birthday</div>
              <div className="content">Teacher Appreciation</div>
              <div className="content">Wedding</div>
            </div>
            <div className="child-categories">
              <div className="heading">Anytime</div>
              <div className="content">Engagement</div>
              <div className="content">Exam</div>
              <div className="content">Graduation</div>
              <div className="content">New Baby</div>
              <div className="content">New Home</div>
              <div className="content">Retirement</div>
            </div>
            <div className="child-categories">
              <div className="heading">Parties</div>
              <div className="content">Anniversary</div>
              <div className="content">BBQ Party</div>
              <div className="content">Brunch</div>
              <div className="content">Cocktail Party</div>
              <div className="content">Dinner Party</div>
              <div className="content">Family Reunion</div>
              <div className="content">Graduation Party</div>
              <div className="content">Housewarming</div>
              <div className="content">Retirement Part</div>
              <div className="content">RSVP Cards</div>
              <div className="content">Sleepover Party</div>
              <div className="content">Sports &amp; Games</div>
              <div className="content">Summer &amp; Pool</div>
              <div className="content">Professional Events</div>
            </div>
          </div>
        ) : (
          <div className="d-flex">
            <div className="child-categories">
              <div className="heading">Wedding</div>
              <div className="content">Bridal Shower</div>
              <div className="content">Wedding Invitation</div>
              <div className="content">Bachelor Party</div>
              <div className="content">Engagement Part</div>
              <div className="content">Rehearsal Dinner</div>
              <div className="content">RSVP Cards</div>
            </div>
            <div className="child-categories">
              <div className="heading">Babies &amp; kids</div>
              <div className="content">1st Birthday</div>
              <div className="content">Birth Announcement</div>
              <div className="content">Baby Birthday</div>
              <div className="content">Baby Shower</div>
              <div className="content">Baby Sprinkle</div>
              <div className="content">Baptism &amp; Christening</div>
              <div className="content">Bar &amp; Bat Mitzvah</div>
              <div className="content">First Communion</div>
              <div className="content">Gender Reveal</div>
              <div className="content">Kids Birthday</div>
              <div className="content">Sip &amp; See</div>
            </div>
            <div className="child-categories">
              <div className="heading">Birthdays</div>
              <div className="content">1st Birthday</div>
              <div className="content">Baby Birthday</div>
              <div className="content">Kid's Birthday</div>
              <div className="content">Men's Birthday</div>
              <div className="content">Women's Birthday</div>
              <div className="content">Milestone Birthday</div>
            </div>
            <div className="child-categories">
              <div className="heading">Announcements</div>
              <div className="content">Birth</div>
              <div className="content">Engagement</div>
              <div className="content">Graduation</div>
              <div className="content">Memorial</div>
              <div className="content">Moving</div>
              <div className="content">Pregnancy</div>
              <div className="content">Save the date</div>
              <div className="content">Wedding</div>
            </div>
            <div className="child-categories">
              <div className="heading">Parties</div>
              <div className="content">Anniversary</div>
              <div className="content">BBQ Party</div>
              <div className="content">Brunch</div>
              <div className="content">Cocktail Party</div>
              <div className="content">Dinner Party</div>
              <div className="content">Family Reunion</div>
              <div className="content">Graduation Party</div>
              <div className="content">Housewarming</div>
              <div className="content">Retirement Part</div>
              <div className="content">RSVP Cards</div>
              <div className="content">Sleepover Party</div>
              <div className="content">Sports &amp; Games</div>
              <div className="content">Summer &amp; Pool</div>
              <div className="content">Professional Events</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
