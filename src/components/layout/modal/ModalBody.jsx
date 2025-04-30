import { useEffect, useState } from "react";

function ModalBody({handleSubmit, handleOnChange, userData, cancelButton, textButton, selectedUser}) {

  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    handleSubmit({ id: selectedUser?.id, username, userEmail });
  }

  useEffect(() => {
    if (selectedUser) {
      setUsername(selectedUser.username);
      setUserEmail(selectedUser.useremail);
    } else {
      setUsername('');
      setUserEmail('');
    }
  }, [selectedUser]);

  return (
    <form onSubmit={submit}>
      <div>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nome do usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          name="useremail"
          id="useremail"
          placeholder="Email do usuario"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div>
        <button>{textButton}</button>
        <button onClick={cancelButton}>Cancelar</button>
      </div>
    </form>
  )
}

export default ModalBody;
