import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authActions";

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");
  //const [score, setScore] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [uid, setUid] = useState("");
  const { scoreRedux, scoreRedux2 } = props;

  console.log("score1 = " + scoreRedux, "score2 = " + scoreRedux2)

  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      // console.log(user)
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
      setUid(user.uid);
    }
  }

  useEffect(() => {
    getUser()
  }, [scoreRedux, scoreRedux2]);

  const changeToggle = () => {
    setIsOpen(!isOpen);
  };

  const Ternary = () => {
    if (displayName !== null && displayName !== "") {
      return (
        <>
          {
            photoURL ? (
              <NavItem>
                <img src={photoURL} alt="Profile" width={40} height={40} />
              </NavItem>
            ) : (
              <NavItem>
                <img src="/user.png" alt="Profile" width={40} height={40} />
              </NavItem>
            )
          }
          <NavItem>
            <Link href={"/profile/" + [uid]}>
              <a className="nav-link">
                {displayName} ({scoreRedux !== "" ? scoreRedux : scoreRedux2 !== "" ? scoreRedux2 : 0})
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <a href="#" onClick={props.signOut} className="nav-link">
              Logout
            </a>
          </NavItem>
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <Link href="/login">
              <a className="nav-link">Login</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </NavItem>
        </>
      );
    }
  };
  return (
    <div className="px-lg-5 shadow bg-light rounded fixed-top">
      <Navbar color="light" light expand="md">
        <Link href="/">
          <a className="navbar-brand">Gaming Platform</a>
        </Link>
        <NavbarToggler onClick={changeToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link href="/home">
                <a className="nav-link">Home</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/games/list">
                <a className="nav-link">Game List</a>
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Ternary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    token: state.auth.token,
    scoreRedux: state.auth.scoreRedux,
    scoreRedux2: state.game.scoreRedux,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
