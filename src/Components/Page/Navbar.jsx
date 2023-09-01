import React, { useContext, useState } from "react";
import styles from "../main.module.css";
import { NavLink } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { AppContext } from "../../Context/AppContext";
import { Circle } from "@chakra-ui/react";


const Navbar = () => {

  const { TotalQty } = useContext(AppContext);


  return (
    <div id={styles.fixedNav}>

      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img
                src="https://az8d0a.a2cdn1.secureserver.net/wp-content/uploads/2020/12/platform-commons-1.png?time=1693532113"
                alt="logo"
              />
            </NavLink>
          </li>
        </div>
        <div id={styles.searchBars}>


          <li>
            <p


            >
              <NavLink to="/wishlist"><VscHeart /></NavLink>

            </p>
          </li>
          <li>
            <p


            >
              <span style={{ display: "flex", alignContent: "center" }} >
                <NavLink to="/cart"><IoBagOutline /></NavLink>

                <span  >
                  {TotalQty !== 0 ? <Circle minWidth={30} bg="#fdd835" >{TotalQty}</Circle> : ""}
                </span>
              </span>
            </p>
          </li>
        </div>
      </div>
      <hr className={styles.hrLine} />
    </div>
  );
};

export default Navbar;
