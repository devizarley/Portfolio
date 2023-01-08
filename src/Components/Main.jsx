import Styles from "./Styles/Main.module.css";
import Button from "./Button/Button";
import ImgIzarley from "./img/img_port.png";

function Main() {
  return (
    <main>
      <div className={Styles.containerMain}>
        <div className={Styles.mainLeft}>
          <div>
            <img src={ImgIzarley} alt="" />
          </div>
        </div>
        <div className={Styles.mainRight}>
          <h6>Desenvolvedor mobile android</h6>
          <div>
            <h1>Olá, eu sou</h1>
            <h1 className={Styles.animation}>
              <strong>Izarley Rodrigues!</strong>
            </h1>
          </div>
          <p>
            Sejam bem vindos, procurando um desenvolvedor mobile em Java/Kotlin
            qualificado para suprir suas necessidades? Posso te ajudar nisso!
            Atualmente sendo especializado em aplicações android na linguagem
            Java e Kotlin! Confira minhas habilidades atuais logo abaixo.
          </p>
          <Button button="CONFIRA MEUS PROJETOS"></Button>
        </div>
      </div>
    </main>
  );
}
export default Main;
