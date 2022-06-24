import Styles from './Main.module.css'
import Button from './Button/Button'
import ImgIzarley from './img/img_port.png';

function Main() {
  return(
    <main>
      <div className={Styles.containerMain}>
        <div className={Styles.mainLeft}>
          <img src={ImgIzarley} alt="" />
        </div>
        <div className={Styles.mainRight}>
          <h6>Desenvolvedor web</h6>
          <div>
            <h1>Olá, eu sou</h1>
            <h1><strong>Izarley Rodrigues!</strong></h1>
          </div>
          <p>Sejam bem vindos, procurando um desenvolvedor web qualificado para suas necessidades?
            posso te ajudar nisso! Atualmente sendo especializado em <strong>React.js, Next.js, GraphQL, Vite, Apollo, JavaScript, Html, Css.</strong>
          </p>
          <Button button='CONFIRA MEUS PROJETOS'></Button>
        </div>
      </div>
    </main>
  )
}
export default Main