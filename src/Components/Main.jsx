import Styles from "./Styles/Main.module.css";
import Button from "./Button/Button";
import ImgIzarley from "./img/img_port.png";
import imgAndroid from "./img/android.png"
import imgJava from "./img/icon-java.jpg";

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
            Seja bem vindo(a), procurando um desenvolvedor especializado em aplicações android
            qualificado e focado para suprir suas necessidades? Posso te ajudar
            nisso! Atualmente sendo especializado em aplicações android na
            linguagem Java/Kotlin!.
          </p>
          <Button button="CONFIRA MEUS PROJETOS"></Button>
        </div>
      </div>
    </main>
  );
}
export default Main;
