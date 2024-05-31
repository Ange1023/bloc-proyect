import { useContext, useState } from "react"
import { NotesContext } from "../Context/NotesContext"

export const NotesForm = () =>{

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const {addNotes} = useContext(NotesContext)

    const onSubmit = (event) =>{
        event.preventDefault()
        addNotes(
            {
            title,
            description
            }
        )
        setTitle(" ");
        setDescription(" ");
    }
    return(
        <form onSubmit={onSubmit}>
            <input 
                placeholder="Ingrese el titulo"
                onChange={(e)=>{setTitle(e.target.value)}}
                value= {title}
            />
            <textarea 
                placeholder = "Ingrese la descripcion"
                onChange={(e)=>{setDescription(e.target.value)}}
                value = {description}
            ></textarea>
            <button>Enviar</button>
        </form>
    )
}