/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { MainSection } from './components/MainSection.jsx'
import { NavBar } from './components/NavBar.jsx'
import { LogIn } from './components/LogIn.jsx'


function App(){
  const [auth, setAuth] = useState(false);

  const handleLogin= ()=>{
    setAuth(true);
    console.log(`auth en app es ${auth}`);
  }
  return (
    <main>
      { !auth ? (
      <LogIn
      loginSucces={handleLogin}
      /> ) : (
      <section className='PrimeSection'>
          <NavBar/>
        <MainSection/> 
      </section>
      )
        }
    </main>
  )
}

export default App