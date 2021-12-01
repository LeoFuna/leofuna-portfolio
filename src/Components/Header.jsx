import React from "react"
import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {

  function handleOpenSideBar() {
    const navMenuElement = document.getElementsByClassName("nav-menu")
    const navMenuContainerElement = document.getElementsByClassName("nav-menu-container")
    navMenuElement[0].classList.toggle("visible");
    navMenuContainerElement[0].classList.toggle("openSideBar");
  }

  // function linkToAnRoute() {

  // }

  return(
    <header data-testid="header">
      <div className="logo-container">
        <div className="logo">
          <p>船橋</p>
        </div>
        <div className="user">
          <p>Leonardo Funabashi</p>
        </div>
      </div>
      <nav className="nav-menu-container">
        <div className="nav-list-menu-logo">
          <input type="checkbox" onClick={ handleOpenSideBar } id="checkbox-menu" />
          <label data-testid="hamburger-menu" className="list-lines" htmlFor="checkbox-menu">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div data-testid="nav-menu" className="nav-menu">
          <ul>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              <li className="nav-item">Início</li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="projetos"> 
              <li className="nav-item">Projetos</li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contato">
              <li className="nav-item">Contato</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;