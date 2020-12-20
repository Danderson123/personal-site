import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigate(props) {
    return (
        <div style={{height: props.windowHeight + "px", width: props.windowWidth + " px"}}>
            <Navbar className="custom-navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link >
                        Home
                        </Nav.Link>
                        <Nav.Link >
                        About Me
                        </Nav.Link>
                        <Nav.Link >
                        Education
                        </Nav.Link>
                        <Nav.Link >
                        Experience
                        </Nav.Link>
                        <Nav.Link >
                        Work
                        </Nav.Link>
                        <Nav.Link >
                        Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div>
    );
};

export default Navigate;