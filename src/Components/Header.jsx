import React from "react"
import "../Styles/Header.css";

function Header() {

  function handleOpenSideBar() {
    const navMenuElement = document.getElementsByClassName("nav-menu")
    navMenuElement[0].classList.toggle("visible")
  }

  return(
    <header>
      <div className="logo-container">
        <p>船橋</p>
        <p>Leonardo Funabashi</p>
      </div>
      <nav className="nav-menu-container">
        <div className="nav-list-menu-logo">
          <input type="checkbox" onClick={ handleOpenSideBar } id="checkbox-menu" />
          <label className="list-lines" htmlFor="checkbox-menu">
            <span />
            <span />
            <span />
          </label>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;