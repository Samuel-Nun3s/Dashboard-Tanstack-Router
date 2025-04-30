import { createFileRoute, useLoaderData, useParams } from '@tanstack/react-router'

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
    <div>
      <h3>Perfil do usuario {params.id}</h3>
      <p><strong>Nome:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.useremail}</p>
    </div>
  )
}
