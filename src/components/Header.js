import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header = () => {
    
    return(
        <header>
            <Navbar className='navbar-style' expand="lg" >
                <Container>
                    <Navbar.Brand href="#">
                    <Image src='images/vtu-logo.png' alt='logo' className='logo-img-style'/>
                    <h5 className='logo-text-style'>Visvesvaraya Technological University, Belgavi</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Acadamics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Admissions</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Circulars & Notifications</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Certificate Issues</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Examinations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Examinations & Guidelines</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Examinations Applications</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Civil Department</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Computer Science Department</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Electronics & Electrical Department</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Login" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Staff Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Admin Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
export default Header