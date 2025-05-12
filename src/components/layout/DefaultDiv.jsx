import styles from './DefaultDiv.module.css';

function DefaultDiv(props) {
  return (
    <div className={`${styles.defaultDiv} ${styles[props.customClass]} ${styles[props.direction]}`}>
      {props.children}
    </div>
  )
}

export default DefaultDiv;
