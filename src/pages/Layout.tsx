import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <div>
      <header>
        <h1>Anime List</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
    All rights reserved
      </footer>
    </div>
  )
}

export default Layout
