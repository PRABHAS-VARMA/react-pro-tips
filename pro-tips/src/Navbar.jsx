import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Kavlium ❤️
        </Link>
        <ul>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/registration-form">Registration Form</Link></li>
        </ul>
      </nav>
    )
  }
  