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
        setTitle("");
        setDescription("");
    }
    return(
        <form onSubmit={onSubmit} className="notesSub">
            <input 
                placeholder="Ingrese el titulo"
                onChange={(e)=>{setTitle(e.target.value)}}
                value= {title}
                className="appInput"
            />
            <textarea 
                placeholder = "Ingrese la descripcion"
                onChange={(e)=>{setDescription(e.target.value)}}
                value = {description}
                className="appText"
            ></textarea>
            <button className="submitButton">Enviar</button>
        </form>
    )
}