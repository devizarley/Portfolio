import imgLinkedin from "./img/linkedin.png";
import imgInstagram from "./img/instagram.png";
import imgGithub from "./img/github.png";
import Style from "./Styles/Networks.module.css";

function Networks() {
  return (
    <div className={Style.networks}>
      <a target="_blank" href="https://www.instagram.com/izarleyrodrigues/">
        <img src={imgInstagram} />
      </a>
      <a target="_blank" href="https://github.com/devizarley">
        <img src={imgGithub} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/izarley-rodrigues-958312228/"
      >
        <img src={imgLinkedin} />
      </a>
      <hr />
    </div>
  );
}
export default Networks;
