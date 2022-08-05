    import React from "react";
import { Container ,Navbar,Nav} from "react-bootstrap";
import  './Nav.css'
import logo from './../images/logo.png'
const Navs = ()=>{
    return(
        <div>
    <Navbar   expand="lg">
    <Container>
        <Navbar.Brand href="home">
            <img className="img" src={logo} alt="logo"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Explore foods</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">FQA</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
    )
}
export default Navs
