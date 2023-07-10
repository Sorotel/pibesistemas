import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo1.png';
import logomail from '../../assets/img/envelope.svg'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true)
        }else{
            setScrolled(false)
        }

        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : '' }>
      <Container>
        <Navbar.Brand href="#home">
            <img className='imgLogo' src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>

            <Nav.Link href="#servicios" className={activeLink === 'servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
            <Nav.Link href="#pricing" className={activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
          
            
            </div>
            <a href='#connect'><button className='me-auto'><img src={logomail} alt="logomail" /> <span>Conectemos</span> </button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar


// #263066