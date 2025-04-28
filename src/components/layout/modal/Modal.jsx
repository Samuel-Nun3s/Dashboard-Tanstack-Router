function Modal({ name, body, actionButton, cancelButton, modalIsOpen }) {
  return (
    <>
      {modalIsOpen && (
        <div>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <h2>{body}</h2>
          </div>
          <div>
            <button onClick={cancelButton}>Cancelar</button>
            <button>{actionButton}</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;
