import Styles from "./Styles/SectionSkills.module.css";
import imgJava from "./img/icon-java.jpg";
import imgKotlin from "./img/icon-kotlin.png";
import imgFirebase from "./img/icon-firebase.png";
import imgSqlite from "./img/icon-sqlite.png";
import svgAvatar from "./img/avatar.svg";

function SectionSkill() {
  return (
    <section className={Styles.sectionSkill} id="habilidades">
      <div className={Styles.containerSectionSkill}>
        <h1>Habilidades atuais</h1>
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
              <img src={imgFirebase} />
              <p>Firebase</p>
            </div>
            <div>
              <img src={imgSqlite} />
              <p>SQLite</p>
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
