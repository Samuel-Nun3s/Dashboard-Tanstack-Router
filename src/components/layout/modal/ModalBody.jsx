import { useEffect, useState } from "react";

import Input from "../../form/Input";
import Button from "../../form/Button";

import styles from './ModalBody.module.css';

function ModalBody({handleSubmit, handleOnChange, userData, cancelButton, textButton, selectedUser, type}) {

  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    handleSubmit({ id: selectedUser?.id, username, useremail });
  }

  useEffect(() => {
    if (selectedUser) {
      setUsername(selectedUser.username);
      setUseremail(selectedUser.useremail);
    } else {
      setUsername('');
      setUseremail('');
    }
  }, [selectedUser]);

  return (
    <form onSubmit={submit}>
      {type == 2 ? 
        <div>
          <h3 className={styles.deleteText}>Tem certeza em excluir o usuario:</h3>
          <p className={styles.deleteText}>{username}</p>
        </div> : 
        <>
          <div>
            <Input 
              type="text"
              name="username"
              id="username"
              placeholder="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="email"
              name="useremail"
              id="useremail"
              placeholder="Email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
        </>}
        <div>
          <Button 
            text={textButton}
          />
          <Button 
            text="Cancelar"
            action={cancelButton}
          />
        </div>
    </form>
  )
}

export default ModalBody;
