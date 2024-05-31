
import { EditSection } from './components/editSection.jsx'
import { NavBar } from './components/NavBar.jsx'
import { SideBar } from './components/SideBar.jsx'


function App(){
  return (
    <main>
      <NavBar/>
      <section className='mainSection'>

        <SideBar/>
        <EditSection/>
      </section>
    </main>
  )
}

export default App