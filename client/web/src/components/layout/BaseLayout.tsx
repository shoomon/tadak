import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
