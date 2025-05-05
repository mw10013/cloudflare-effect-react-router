import { Outlet } from 'react-router'

export default function RouteComponent() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  )
}
