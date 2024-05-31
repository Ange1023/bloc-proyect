import { NotesList } from "./components/NotesList"
import { NotesForm } from "./components/NotesForm"
function App(){
  return (
    <main>
      <div className='bar'>
        <section className='logos'>
        <div className='loginLogo'><img src="/accountLogo.svg" alt="" /></div>
        <div className='addNoteLogo'><img src="/addLogo.svg" alt="" /></div>
        </section>
      </div>
      <section className='mainSection'>

      <div className='sidebar'>
        <h1>Notes sidebar</h1>
      </div>
      <div className='textContent'>
      <NotesForm/>
      <NotesList/>
        note content
      </div>
      </section>

    </main>
  )
}

export default App