import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import for use Link Function to page
import { Link } from "react-router-dom";
// import loop item form SidebarData
import { SidebarData } from "./SidebarData";
// import style
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  // useState for set sidebar to false
  const [sidebar, setSidebar] = useState(false);

  // Function for setSidebar to true or false for active or no active in nav Element
  const ShowSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {/* When Click This Icon Navbar is show because sidebar variable is true */}
            <FaIcons.FaBars onClick={ShowSidebar} />
          </Link>
        </div>
        {/* When Click This Icon Navbar is show because sidebar variable is true for add class nav-menu.active to nav element */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* When Click This Icon Navbar is show because sidebar variable is true */}
          <ul className="nav-menu-items" onClick={ShowSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* For Loop show items of navbar form SidebarData (index field is position of array)*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
