function Input({ type, name, id, placeholder, value, onChange }) {
  return (
    <input
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
