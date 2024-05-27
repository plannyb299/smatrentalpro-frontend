import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";
import useClickOutside from "../../customHooks/ClickOutside";

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setisNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNavOpen(false);
  });

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">SmatRentalPro</Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          <MenuLink url="" path="Home" />
          {/* <MenuLink url="buy" path="Buy" /> */}
          <MenuLink url="rent" path="Rent" />
          <MenuLink url="profile" path="Profile" />
          <MenuLink url="search" path="Search" />
          <MenuLink url="about" path="About" />
          <MenuLink url="login" path="Login" />
          <Link to="/login" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* Login */}
        <Link to="/login" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Login</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </Link>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};
export default Navbar;
