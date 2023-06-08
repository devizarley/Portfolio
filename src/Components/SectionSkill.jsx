import Styles from "./Styles/SectionSkills.module.css";
import imgJava from "./img/icon-java.jpg";
import imgKotlin from "./img/icon-kotlin.png";
import imgFirebase from "./img/icon-firebase.png";
import imgSqlite from "./img/icon-sqlite.png";
import svgAvatar from "./img/avatar.svg";
import iconGit from "./img/icon_git.png";
import iconReactNative from "./img/react.png";

function SectionSkill() {
  return (
    <section className={Styles.sectionSkill} id="habilidades">
      <div className={Styles.containerSectionSkill}>
        <h1>Mobile</h1>
        <div className={Styles.containerContentSkill}>
          <div className={Styles.SectionSkillLeft}>
            <div>
              <img src={imgJava} />
              <p>Java</p>
            </div>
            <div>
              <img src={imgKotlin} />
              <p>Kotlin</p>
            </div>
            <div>
              <img src={iconReactNative} alt="" />
              <p>React Native</p>
            </div>
            <div>
              <img src={imgFirebase} />
              <p>Firebase</p>
            </div>
            <div>
              <img src={imgSqlite} />
              <p>SQLite</p>
            </div>
            <div>
              <img src={iconGit} />
              <p>Git</p>
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
