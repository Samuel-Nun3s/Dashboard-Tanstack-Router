import styles from "./Button.module.css";

function Button({ action, text }) {
  return (
    <button className={styles.button} onClick={action}>
      {text}
    </button>
  )
}

export default Button;
