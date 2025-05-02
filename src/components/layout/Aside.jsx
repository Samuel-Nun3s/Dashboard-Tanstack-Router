import { Link } from "@tanstack/react-router";

import Button from "../form/Button";

function Aside() {
  return (
    <>
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
      <Button 
        text="Menu"
        action={openAside}
      />
    </>
  )
}

export default Aside;
