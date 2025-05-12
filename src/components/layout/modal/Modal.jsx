import styles from './Modal.module.css';

function Modal({ name, body, modalIsOpen }) {
  return (
    <>
      {modalIsOpen && (
        <>
          <div className={styles.fade}></div>
          <div className={styles.modal}>
            <div>
              <h2>{name}</h2>
            </div>
            <div>
              {body}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal;
