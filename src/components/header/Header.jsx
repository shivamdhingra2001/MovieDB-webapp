import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = ()=>{
    const navData = [
        {name:'Home', link:'/'},
        {name:'Movies', link:'/Movies'},
        {name:'Tv Series', link:'/Series'},
        {name:'Search', link:'/Search'},
        {name:'Contact Us', link:'/Contact'},
        {name: 'About Us', link: '/About'}
    ]

    return (
        <header  className='header'>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>My Entertainment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {
                            navData.map((item)=>{
                                return (
                                    <Nav key={item.name}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Nav> 
                                )
                            })
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    
        </header>
    )
}

export default Header;