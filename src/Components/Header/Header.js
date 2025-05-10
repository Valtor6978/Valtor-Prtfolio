import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between main-header align-items-center">
      <div>
        <img src="Images/Valtor.svg" alt="Valtor Logo" draggable="false" />
      </div>
      <nav>
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <a href="Files/Valtor.pdf">
              cv
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/valtorandcody" target="_blank">
              <img
                src="Images/instagram.svg"
                alt="instagram icon"
                draggable="false"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Valtor6978" target="_blank">
              <img
                src="Images/github.svg"
                alt="github icon"
                draggable="false"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
