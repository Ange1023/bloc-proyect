import { NotesList } from "./components/NotesList"
import { NotesForm } from "./components/NotesForm"
function App(){
  return (
    <main>
      <div className='bar'>
        <section className='logos'>
        <div className='loginLogo'>Logo login</div>
        <div className='addNoteLogo'>Add note logo</div>
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