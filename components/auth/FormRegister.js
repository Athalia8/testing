import Link from "next/link";

export default function FormRegister() {
  return (
    <div>
      <div className="card-form">
        <p className="text-center text-muted fs-08 mt-3">Or sign in with credentials</p>
        <div className="d-flex align-items-center mb-2">
          <span className="fas fa-user text-muted mx-1" />
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex align-items-center mb-2">
          <span className="far fa-envelope text-muted mx-1" />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex align-items-center mb-2">
          <span className="fas fa-key text-muted mx-1" />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-3">Register</button>
        </div>
        <div class="text-center fs-6">Have account? <Link href="/login"><a>Login</a></Link></div>
      </div>
    </div>

  )
}

