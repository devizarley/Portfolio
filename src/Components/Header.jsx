import { useState } from "react";
import Button from "./Button/Button";
import Style from "./Styles/Header.module.css";
import "./Styles/hamburger.css";

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <header >
      <div className={Style.containerHeader} id={active ? "menuRight" : ""} >
        <div className={active ? "menu menuClose" : "menu menuOpen"}>
          <h1>
            {"{}"} my <strong>portfolio</strong>
          </h1>
        </div>
        <div className="list">
          <div className={active ? "menu menuOpen" : "menu menuClose"}>
            <a href="#">Home</a>
            <a href="#projetos">Projetos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="https://api.whatsapp.com/send?phone=558881163853" target="_blank">
              <Button button="Contact me" />
            </a>
          </div>
        </div>
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={ToggleMode}
          id={Style.iconHamburger}
        >
          <div className="hamburger hamburgerIcon"></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
