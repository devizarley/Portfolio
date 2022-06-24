import Styles from './Button.module.css';

function Button(props) {
  return (
    <button className={Styles}>{props.button}</button>
  )
}
export default Button