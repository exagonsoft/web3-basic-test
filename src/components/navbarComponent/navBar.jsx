import React, { useEffect, useState } from "react";
import "./navbarstyles.css";
import Logo from "../../assets/logo.png";
import { navMenuLinks } from "../../constants/constants";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {configCors} from "../../mock/corsConfiguration.cjs";

const NavBar = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [corsConfiguration, setCorsConfiguration] = useState('');

  const toggleMenu = () => {
    setShowMenu((prev) =>!prev);
  };

  const handleCors = async () => {
    const config = await configCors();
    setCorsConfiguration((prevState) => config);
  }

  useEffect(() => {
    handleCors();
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 650);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="nav-bar">
      <Link to="./" className="logo-link">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="logo-text">Web3 Drone Management</span>
      </Link>
      {isWideScreen ? (
        <div className="nav-menu">
          {navMenuLinks.map((_link, index) => (
            <Link key={index} to={_link.link} className="nav-menu-item">
              {_link.icon}
              <span>{_link.title}</span>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <GiHamburgerMenu className="mobile-menu-icon" onClick={toggleMenu}/>
          {showMenu ? <div className="nav-menu-mobile">
          {navMenuLinks.map((_link, index) => (
            <Link key={index} to={_link.link} className="nav-menu-item-mobile" onClick={() => {setShowMenu(false)}}>
              {_link.icon}
              <span>{_link.title}</span>
            </Link>
          ))}
        </div> : <></>}
        </>
      )}
    </nav>
  );
};

export default NavBar;
