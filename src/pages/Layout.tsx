import { Outlet } from "react-router-dom"
import '../sass/Layout.scss'

const Layout = () => {

  return (
    <div>
      <header style={{backgroundColor: 'black', padding: '0.1rem'}}>
        <h1>Anime World</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{display: 'flex', justifyContent: 'center'}}>
   All rights reserved
      </footer>
    </div>
  )
}

export default Layout
