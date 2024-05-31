import { Notes } from "./Notes"
import { NotesContext } from "../Context/NotesContext"
import { useContext } from "react"

export const NotesList = () =>{

    const {notes} = useContext(NotesContext)
    
    return(        
        <div>
            {notes.map((note)=>{
                return <Notes key={note.id} note = {note}/>
            })}
        </div>
    )
}