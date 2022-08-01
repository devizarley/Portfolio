import Styles from "./Styles/SectionSkills.module.css";
import imgHtml from "./img/html.png";
import imgCss from "./img/css-3.png";
import imgJS from "./img/javascript.png";
import imgReact from "./img/react.png";
import imgNext from "./img/nextjs.png";
import svgVite from "./img/vite.svg";
import svgAvatar from "./img/avatar.svg";

function SectionSkill() {
  return (
    <section className={Styles.sectionSkill}>
      <div className={Styles.containerSectionSkill}>
        <h1>Habilidades atuais</h1>
        <div className={Styles.containerContentSkill}>
          <div className={Styles.SectionSkillLeft}>
            <div>
              <img src={imgHtml} />
              <p>HTML</p>
            </div>
            <div>
              <img src={imgCss} />
              <p>CSS</p>
            </div>
            <div>
              <img src={imgJS} />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={imgReact} />
              <p>React.Js</p>
            </div>
            <div>
              <img src={imgNext} />
              <p>Next.Js</p>
            </div>
            <div>
              <img src={svgVite} />
              <p>Vite</p>
            </div>
          </div>
          <div className={Styles.SectionSkillRight}>
            <img src={svgAvatar} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionSkill;
