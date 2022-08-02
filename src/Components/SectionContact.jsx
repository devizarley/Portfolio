import imgFoguete from "./img/foguete.gif";
import Styles from "./Styles/SectionContact.module.css";

function SectionContact() {
  return (
    <section className={Styles.sectionContact}>
      <div className={Styles.containerSectionContact}>
        <div className={Styles.topContainer}>
          <h1>Contate-me</h1>
          <p>Entre em contato, irei responde-lo o mais rápido possivel!</p>
        </div>
        <div className={Styles.bottomContainer}>
          <div className={Styles.leftContact}>
            <form>
              <p>Nome completo:</p>
              <input type="text" placeholder="Nome completo" />
              <p>Email:</p>
              <input type="email" placeholder="Email" />
              <p>Mensagem:</p>
              <textarea id={Styles.msg} placeholder="Mensagem"></textarea>
            </form>
          </div>
          <div className={Styles.rightContact}>
            <img src={imgFoguete} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionContact;
