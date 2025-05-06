import { Link } from "@tanstack/react-router";

import Button from "../form/Button";

import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import styles from "./Aside.module.css";
import { useState } from "react";

function Aside() {

  const [asideIsOpen, setAsideIsOpen] = useState(false);

  function openAside() {
    setAsideIsOpen(!asideIsOpen);
  }

  return (
    <aside className={`${styles.aside} ${asideIsOpen ? "" : styles.close}`}>
      <nav>
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/dashboard">
          <MdSpaceDashboard />
        </Link>
        <Link to="/settings">
          <IoMdSettings />
        </Link>
      </nav>
      <Button
        text={asideIsOpen ? <FaArrowLeft /> : <FaArrowRight />}
        action={openAside}
      />
    </aside>
  )
}

export default Aside;
