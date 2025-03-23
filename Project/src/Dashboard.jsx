import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loogo from "./assets/logo.png"
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () =>{
 
  const photo = localStorage.getItem("photo");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");

  const nav = useNavigate();

  const  logout = () =>{
    localStorage.clear
    nav("/login")
  }
    return(
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src={loogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"balanceinqury"} className='linkingdash'>Balance Inquiry</Nav.Link>
            <Nav.Link as={Link} to={"accountstatement"} className='linkingdash'>Account Statement</Nav.Link>
           <Nav.Link as={Link} to={"submitcase"} className='linkingdash'>Submit Case</Nav.Link>
            <Nav.Link as={Link} to={"withdrawcase"} className='linkingdash'>Withdraw Case</Nav.Link>
             <Nav.Link as={Link} to={"ministatement"} className='linkingdash'>Mini Statement</Nav.Link>
              <Nav.Link as={Link} to={"yourprofile"} className='linkingdash'>Your Profile</Nav.Link>
               <Nav.Link as={Link} to={"resetpassword"} className='linkingdash'>Reset Password</Nav.Link>
               <Nav.Link  className='linkingdash' onClick={logout}>Reset Password</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="multimg">
        <Navbar.Brand href="#"><img src={`http://localhost:8080/uploads/${photo}`} alt="" style={{width:"45px",height:"45px",borderRadius:"50%"}} /></Navbar.Brand>
        <p>{fname} {lname}</p>
      
        </div>
      </Container>
    </Navbar>
    <div>
      <Outlet/>
    </div>
        </>
    )
}

export default Dashboard