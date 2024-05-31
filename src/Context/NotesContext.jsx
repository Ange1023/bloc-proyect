import { createContext, useState, useEffect } from "react";
import { note as data } from "../Data/Note";

export const NotesContext = createContext()

export const NotesContextProvider = (props) =>{

    const [notes, setNotes] = useState([])

    useEffect(() =>{
        setNotes(data)
    },[]);

    const addNotes = (note) =>{
        setNotes(
            [...notes, {
                id: note.id,
                title: note.title,
                description: note.description
            },
        ]
        )
    }

    const removeNotes = (noteId) =>{
        setNotes(
            notes.filter((note) =>{
                note.id !== noteId
            })
        )
    }

    return(

        <NotesContext.Provider
            value = {{
                notes,
                addNotes,
                removeNotes
            }}
        >
            {props.children}
        </NotesContext.Provider>

    )
}