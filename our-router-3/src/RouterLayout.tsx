import Header from './layout/Header'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

function RouterLayout() {
  return (
    <>
      <Header/>
        <main className="page-shell">
          <Outlet />
        </main>
      <Footer/>
    </>
  )
}

export default RouterLayout
