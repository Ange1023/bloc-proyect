import { NotesList } from "./NotesList"

export function SideBar(){
    return (
        <div className='sidebar'>
        <h1>Notes sidebar</h1>
        <NotesList/>
      </div>
    )
}