import { createFileRoute, useLoaderData, useParams, Link } from '@tanstack/react-router'

import DefaultDiv from '../../../components/layout/DefaultDiv';

import { FaArrowLeft } from "react-icons/fa";

import styles from './id.module.css';

export const Route = createFileRoute('/dashboard/profile/$id')({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:5000/users/${params.id}`);
    if (!res.ok) return null;

    const data = await res.json();

    return data;
  },
  component: UserProfile
})

function UserProfile() {
  const params = useParams({ from: '/dashboard/profile/$id' });
  const user = useLoaderData({ from: '/dashboard/profile/$id' });

  if (!user) return <p>Usuario nao encontrado</p>

  return (
    <div className={styles.profile} >
      <DefaultDiv>
        <div className={styles.back}>
          <Link to="/dashboard">
            <FaArrowLeft />
          </Link>
        </div>
        <DefaultDiv
          customClass='subdiv'
        >
          <h3>User ID: {params.id}</h3>
        </DefaultDiv>
        <DefaultDiv
          customClass='subdiv'
        >
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.useremail}</p>
        </DefaultDiv>
      </DefaultDiv>
    </div>
  )
}
