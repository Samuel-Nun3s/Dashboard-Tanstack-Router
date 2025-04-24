import { Link } from "@tanstack/react-router";

function Aside() {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/dashboard">
        Dashboard
      </Link>
      <Link to="/settings">
        Settings
      </Link>
    </nav>
  )
}

export default Aside;
