import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

import Modal from '../../components/layout/modal/Modal';
import ModalBody from '../../components/layout/modal/ModalBody';
import { header } from 'server/reply';

import styles from './index.module.css';
import DefaultDiv from '../../components/layout/DefaultDiv';
import Button from '../../components/form/Button';

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard
})

function Dashboard() {

  const [users, setUsers] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [type, setType] = useState(null);

  const fetchUsers = async () => {
      setUsers(null);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const res = await fetch('http://localhost:5000/users');
      if (!res.ok) return null;
  
      const data = await res.json();
      console.log("Coleta dos usuarios =>", data);

      setUsers(data);
      setTotalUsers(data.length);  
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

  return (
    <>
      <div className={styles.dashboard}>
        <DefaultDiv>
          <h2>Dashboard</h2>
          <DefaultDiv
            customClass="subdiv"
          >
            <h2>Total users</h2>
            <h3>{totalUsers}</h3>
          </DefaultDiv>
          <Button 
            action={fetchUsers}
            text="to Update"
          />
          <Button 
            action={modalAddUser}
            text="To add"
          />
        </DefaultDiv>
        <DefaultDiv>
          {!users ? <p>Loading users...</p> :
            users.map((user) => (
              <DefaultDiv
                customClass="subdiv"
                key={user.id}
                direction="row"
              >
                <Link to={`/dashboard/profile/${user.id}`}>
                  {user.username}
                </Link>
                <div className={styles.usersActions}>
                  <button className={styles.editButton} onClick={() => modalEditUser(user)}><FaEdit /></button>
                  <button className={styles.deleteButton} onClick={() => modalDeleteUser(user)}><MdDeleteForever /></button>
                </div>
              </DefaultDiv>
            ))
          }
        </DefaultDiv>
      </div>
      <Modal
        name={type == 1 ? "Add user" : (type == 2 ? "Delete user" : "Edit user")}
        body={<ModalBody 
          handleSubmit={type == 1 ? addUser : (type == 2 ? deleteUser : editUser)}
          cancelButton={handleModal}
          textButton={type == 1 ? "Add" : (type == 2 ? "Delete" : "Edit")}
          selectedUser={selectedUser}
          type={type}
        />}
        modalIsOpen={modalIsOpen}
      />
    </>
  )
}
