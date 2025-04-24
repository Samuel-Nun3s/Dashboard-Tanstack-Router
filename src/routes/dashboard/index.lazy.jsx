import { createLazyFileRoute, Link, useLoaderData } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard/')({
  loader: async () => {
    const res = await fetch(`http://localhost:5000/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("res =>", res);
    if (!res.ok) return null;

    const data = await res.json();
    console.log("data =>", data);

    return data;
  },
  component: Dashboard
})

function Dashboard() {

  const users = useLoaderData({ from: Route.id });
  console.log("users =>", users);

  return (
    <div>
      <h2>Dashboard</h2>
      
    </div>
  )
}
