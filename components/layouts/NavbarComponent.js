import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid fixed-top shadow p-2 mb-5 bg-body rounded px-5">
          <Link href="/">
            <a className="navbar-brand">Navbar</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/games/list">
                  <a className="nav-link">Game List</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/profile">
                    <a className="nav-link">Profile</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/auth/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/auth/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
