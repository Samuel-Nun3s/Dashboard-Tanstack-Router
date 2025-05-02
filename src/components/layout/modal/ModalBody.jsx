import { useEffect, useState } from "react";

import Input from "../../form/Input";
import Button from "../../form/Button";

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
          <p>Tem certeza em excluir o usuario:</p>
          <p>{username}</p>
        </div> : 
        <>
          <div>
            <Input 
              type="text"
              name="username"
              id="username"
              placeholder="Nome do usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="email"
              name="useremail"
              id="useremail"
              placeholder="Email do usuario"
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
