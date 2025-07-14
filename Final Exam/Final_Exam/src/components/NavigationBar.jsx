import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { logout } from '../redux/actions/authAction'; // ✅ import logout action

function NavigationBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout()); // ✅ updated line
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Hotel Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Rooms</Nav.Link>
            {isAuth && (
              <>
                <Nav.Link as={Link} to="/reserve">Reserve</Nav.Link>
                <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {isAuth ? (
              <Button variant="outline-light" onClick={handleLogout}>Sign Out</Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">Sign In</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
