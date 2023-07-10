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
          <h6>Desenvolvedor Front-end e Mobile</h6>
          <div>
            <h1>Olá, eu sou</h1> 
            <h1 className={Styles.animation}>
              <strong>Izarley Rodrigues!</strong>
            </h1>
          </div>
          <p>
            Seja bem vindo(a), sou um desenvolvedor especializado em aplicações mobile. 
            Sou apaixonado por programação desde que descobri essas tecnologias fascinantes, e
            tenho dedicado meu tempo a aprimorar minhas habilidades e criar projetos inovadores e de qualidade, sempre buscando entregar soluções livres de bugs.
            Procurando um desenvolvedor qualificado e focado para suprir suas necessidades? Posso te ajudar nisso!
          </p>
          <a href="#projetos"><Button button="CONFIRA MEUS PROJETOS"></Button></a>
        </div>
      </div>
    </main>
  );
}
export default Main;
