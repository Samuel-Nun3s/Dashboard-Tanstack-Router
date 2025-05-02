import { createFileRoute, Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

import Modal from '../../components/layout/modal/Modal';
import ModalBody from '../../components/layout/modal/ModalBody';
import { header } from 'server/reply';

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard
})

function Dashboard() {

  const [users, setUsers] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [type, setType] = useState(null);

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

  function modalAddUser() {
    setType(1);
    setSelectedUser(null);
    handleModal();
  }

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
        handleModal();
      })
      .catch(err => console.log(err));
  }

  function modalDeleteUser(user) {
    console.log("deleteUser =>", user);
    setSelectedUser(user);
    setType(2);
    
    handleModal();
  }

  function deleteUser(user) {
    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        fetchUsers();
        handleModal();
      })
      .catch(err => console.log(err));
  }

  function modalEditUser(user) {
    setSelectedUser(user);
    setType(3);
    console.log("user =>", user);
    handleModal();
  }

  function editUser(user) {
    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        fetchUsers();
        handleModal();
      })
      .catch(err => console.log(err));
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
          <button onClick={modalAddUser}>Adicionar</button>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/dashboard/profile/${user.id}`}>
              Verificar informacoes do usuario {user.username}
            </Link>
            <div>
              <button onClick={() => modalEditUser(user)}>Editar</button>
              <button onClick={() => modalDeleteUser(user)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        name={type == 1 ? "Adicionar usuario" : (type == 2 ? "Deletar usuario" : "Editar usuario")}
        body={<ModalBody 
          handleSubmit={type == 1 ? addUser : (type == 2 ? deleteUser : editUser)}
          cancelButton={handleModal}
          textButton={type == 1 ? "Adicionar" : (type == 2 ? "Deletar" : "Editar")}
          selectedUser={selectedUser}
          type={type}
        />}
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}
