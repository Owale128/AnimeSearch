import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <div>
      <header style={{backgroundColor: 'black', padding: '0.1rem'}}>
        <h1 style={{display: 'flex', justifyContent: 'center', color: 'white'}}>Anime List</h1>
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
