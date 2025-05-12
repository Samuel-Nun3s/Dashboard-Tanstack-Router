import styles from './Input.module.css';

function Input({ type, name, id, placeholder, value, onChange }) {
  return (
    <input className={styles.input}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
