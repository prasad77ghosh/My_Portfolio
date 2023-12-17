// import React from "react";
import { Link } from "react-router-dom";
import { Links } from "../../types";
import classes from "./Navbar.module.css";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={classes.main_cont}>
      <div className={classes.img_cont}>
        <img src="/public/profile_01.png" alt="profile_01" />
      </div>
      <div className={classes.nav_cont}>
        {Links.map((item) => (
          <Link to={item.link} className={classes.nav_list_cont} key={item.id}>
            <item.icon size={23} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>

      <div className={classes.setting_cont}>
        <p>Setting</p>
        <FiSettings size={23} />
      </div>
    </nav>
  );
};

export default Navbar;
