import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import Link from "next/link";
import { useState } from "react";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const changeToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='px-lg-5 shadow bg-light rounded'>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link href="/"><a className="navbar-brand">Gaming Platform</a></Link></NavbarBrand>
        <NavbarToggler onClick={changeToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem><Link href="/home"><a className="nav-link">Home</a></Link></NavItem>
            <NavItem><Link href="/games/list"><a className="nav-link">Game List</a></Link></NavItem>
          </Nav>
          <Nav className="mx-auto" navbar>
            <NavItem><Link href="/profile"><a className="nav-link">Profile</a></Link></NavItem>
            <NavItem><Link href="/register"><a className="nav-link">Register</a></Link></NavItem>
            <NavItem><Link href="/login"><a className="nav-link">Login</a></Link></NavItem>
            {/* <NavItem><Link href="/logout"><a className="nav-link">Logout</a></Link></NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}
