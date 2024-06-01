import { useContext, useState } from "react"
import { NotesContext } from "../Context/NotesContext"

export const NotesForm = () =>{

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const {addNotes} = useContext(NotesContext)

    const checkContent = ({title, description})=>{
        console.log(title)
        console.log(description)
        if(title === '' && description === ''){
            return
        }else if(title === ''){
            console.log('estoy en el else if')
            return {title: 'Sin titulo', description} 
        }
        return {title, description}
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        addNotes(
            checkContent({title, description})
        )
        setTitle("");
        setDescription("");
    }
    return(
        <form onSubmit={onSubmit} className="notesForm">
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
            {
                title === '' && description === '' && (
                    <div style={{
                        color: 'red'
                    }}>
                        Contenio vacio, por favor ingrese texto
                    </div>
                )
            }
            <button className="submitButton">Enviar</button>
        </form>
    )
}