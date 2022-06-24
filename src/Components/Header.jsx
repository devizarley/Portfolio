import Button from './Button/Button';
import Style from './Header.module.css'

function Header() {
  return (
    <header>
    <div className={Style.containerHeader}>
      <div className={Style.headerLeft}>
        <h1>{"{}"} my <strong>portfolio</strong></h1>
      </div>
      <div className={Style.headerRight}>
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Sobre</a>
        <Button button="Contact me"/>
      </div>
    </div>
    </header>
  )
}
export default Header