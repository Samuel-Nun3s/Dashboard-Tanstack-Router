import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Aside from '../components/layout/Aside';

export const Route = createRootRoute({
  component: () => (
    <>
      <Aside />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})
