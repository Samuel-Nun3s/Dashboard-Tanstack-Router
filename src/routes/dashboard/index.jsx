import { createFileRoute, Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

import Modal from '../../components/layout/modal/Modal';
import ModalBody from '../../components/layout/modal/ModalBody';
import { header } from 'server/reply';

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard
})

function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    if (!res.ok) return null;

    const data = await res.json();
    // console.log("Coleta dos usuarios =>", data);

    setUsers(data);
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  function addUser(user) {
    console.log("user =>", user);

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        fetchUsers();
        // redirect
        // navigate('/dashboard/', { state: { message: 'Usuario criado com sucesso!' } });
      })
      .catch(err => console.log(err));
  }

  function editUser(user) {
    setSelectedUser(user);
    console.log("user =>", user);
    handleModal();
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  if (!users) return <p>Carregando usuários...</p>

  return (
    <>
      <div>
        <div>
          <h2>Dashboard</h2>
          <button onClick={fetchUsers}>Atualizar</button>
          <button onClick={handleModal}>Adicionar</button>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/dashboard/profile/${user.id}`}>
              Verificar informacoes do usuario {user.username}
            </Link>
            <div>
              <button onClick={() => editUser(user)}>Editar</button>
              <button>Excluir</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        name="Adicionar novo usuario"
        body={<ModalBody 
          handleSubmit={addUser}
          cancelButton={handleModal}
          textButton="Adicionar"
          selectedUser={selectedUser}
        />}
        actionButton={addUser}
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}
