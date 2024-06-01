/* eslint-disable no-unused-vars */


import { MainSection } from './components/MainSection.jsx'
import { NavBar } from './components/NavBar.jsx'
import { LogIn } from './components/LogIn.jsx'


function App(){
  const [auth, setAuth] = useState(false);
  return (
    <main>
      <LogIn/>
      {/* <section className='PrimeSection'>
          <NavBar/>
        <MainSection/> 
      </section> */}

    </main>
  )
}

export default App