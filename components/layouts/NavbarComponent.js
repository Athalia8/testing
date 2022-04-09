import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import { useRouter } from 'next/router'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/config'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const [photoURL, setPhotoURL] = useState("")
  const [uid, setUid] = useState("")
  const router = useRouter()

  const user = auth.currentUser
  useEffect(() => {
    if (user !== null) {
      setDisplayName(user.displayName)
      setPhotoURL(user.photoURL)
      setUid(user.uid)
    }
  }, [])

  const changeToggle = () => {
    setIsOpen(!isOpen)
  }
  const logout = () => {
    signOut(auth);
    router.push("/login")
    console.log("Logout berhasil")
  }
  const Ternary = () => {
    if (displayName !== "") {
      return (
        <>
          <img src={photoURL} alt="Profile" width={40} height={40} />
          <NavItem><Link href={"/profile/" + [uid]}><a className="nav-link"><strong>{displayName}</strong></a></Link></NavItem>
          <NavItem><div onClick={logout} className="btn nav-link">Logout</div></NavItem>
        </>
      )
    } else {
      return (
        <>
          <NavItem><Link href="/login"><a className="nav-link">Login</a></Link></NavItem>
          <NavItem><Link href="/register"><a className="nav-link">Register</a></Link></NavItem>
        </>
      )
    }
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
          <Nav className=" d-flex" navbar>
            <Ternary />
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}
