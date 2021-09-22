import React from "react"
import "../Styles/Header.css";

function Header() {
  return(
    <header>
      <div className="logo-container">
        <p>船橋</p>
        <p>Leonardo Funabashi</p>
      </div>
      <nav className="nav-menu-container">
        <div className="nav-list-container">
          <ul className="nav-menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
          </ul>
          <div className="nav-list-menu-logo">
            Imagem Lista
          </div>
        </div>
        <div className="nav-list-menu-logo-close">Sair</div>
      </nav>
    </header>
  );
}

export default Header;