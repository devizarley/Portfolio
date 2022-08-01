import Button from "./Button/Button";
import Style from "./Styles/Header.module.css";
import imgLinkedin from "./img/linkedin.png";
import imgInstagram from "./img/instagram.png";
import imgGithub from "./img/github.png";

function Header() {
  return (
    <header>
      <div className={Style.containerHeader}>
        <div className={Style.headerLeft}>
          <h1>
            {"{}"} my <strong>portfolio</strong>
          </h1>
        </div>
        <div className={Style.headerRight}>
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Sobre</a>
          <Button button="Contact me" />
        </div>
      </div>
      {/* <div className={Style.networks}>
        <img src={imgInstagram} />
        <img src={imgGithub} />
        <img src={imgLinkedin} />
        <hr />
      </div> */}
    </header>
  );
}
export default Header;
