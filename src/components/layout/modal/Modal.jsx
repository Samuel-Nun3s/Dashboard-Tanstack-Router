function Modal({ name, body, modalIsOpen }) {
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
        </div>
      )}
    </>
  )
}

export default Modal;
