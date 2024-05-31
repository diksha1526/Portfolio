import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from "react";
import logo from '../assets/img/logo.svg';
import navIcon2 from "../assets/img/github.svg";
import linkedin from '../assets/img/linkedin.jpeg';
// import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavBar() {
  const[activeLink,setActive]=useState('home');
  const[scrolled,seScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        seScrolled(true);
      }
      else{
        seScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>{
      window.addEventListener("scroll",onScroll);
    }
  },[])
  const onUpdateActivelink=(value=>{
    setActive(value);
  })
  return (
    <>
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':"navbar-link"}onClick={()=>onUpdateActivelink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':"navbar-link"} onClick={()=>onUpdateActivelink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':"navbar-link"} onClick={()=>onUpdateActivelink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://github.com/diksha1526"><img src={navIcon2} alt=""/></a>
              <a href="https://www.linkedin.com/in/diksha-tiwari-816782228/"><img src={linkedin} alt=""/></a>
              {/* <a href="/"><img src={''} alt=""/></a> */}
            </div>
            <button className="vvd" onClick={()=>console.log('connenct')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  
  )
}



