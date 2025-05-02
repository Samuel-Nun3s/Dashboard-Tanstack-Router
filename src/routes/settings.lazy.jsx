import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>
        <h1>Settings</h1>
      </div>
      <div>
        <h2>Desenvolvido por:</h2>
        <h3>Samuel Nunes</h3>
        <h3><a href="https://www.linkedin.com/in/samuel-nunes-5b4b72270/" target='blank'>Linkedin</a></h3>
        <h3><a href="https://github.com/Samuel-Nun3s" target='blank'>Github</a></h3>
      </div>
    </div>
  )
}
