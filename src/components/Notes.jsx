import { useContext } from "react"
import { NotesContext } from "../Context/NotesContext"

export const Notes = ({note}) =>{

    const {removeNotes} = useContext(NotesContext)
    return(
        
        <div>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <p>{note.id}</p>
            <button 
                onClick = {()=>{removeNotes(note.id)
                    console.log(note.id)
                }}
            >Eliminar</button>
            <button>Ver</button>
            <button>Editar</button>
        </div>
    )
}