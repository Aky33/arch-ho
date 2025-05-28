import { Container, Nav, Navbar, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <NavbarToggle aria-controls="navbar" />
                <NavbarCollapse id="navbar">
                    <Nav>
                        <NavLink as={Link} to="/">Home</NavLink>
                        <NavLink as={Link} to="/kategorie">Kategorie</NavLink>
                        <NavLink as={Link} to="/recepty">Recepty</NavLink>
                        <NavLink as={Link} to="/recepty/nahodne">Náhodný výběr</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default NavBar