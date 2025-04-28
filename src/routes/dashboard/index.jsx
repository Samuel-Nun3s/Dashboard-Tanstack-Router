import { createFileRoute, Link, useLoaderData } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

import Modal from '../../components/layout/modal/Modal';
import ModalBody from '../../components/layout/modal/newUser/ModalBody';

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard
})

function Dashboard() {
  const [users, setUsers] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:5000/users');
      if (!res.ok) return null;

      const data = await res.json();
      console.log(data);

      setUsers(data);
    }

    fetchUsers()
  }, []);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  if (!users) return <p>Carregando usuários...</p>

  return (
    <>
      <div>
        <div>
          <h2>Dashboard</h2>
          <button>Atualizar</button>
          <button onClick={handleModal}>Adicionar</button>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/dashboard/profile/${user.id}`}>
              Verificar informacoes do usuario {user.id}
            </Link>
          </div>
        ))}
      </div>
      <Modal
        name="Adicionar novo usuario"
        body={<ModalBody />}
        actionButton="Adicionar"
        modalIsOpen={modalIsOpen}
        cancelButton={handleModal}
      />
    </>
  )
}
