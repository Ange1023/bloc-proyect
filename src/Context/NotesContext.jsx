/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { note as data } from "../Data/Note";

export const NotesContext = createContext()

export const NotesContextProvider = (props) =>{

    const [notes, setNotes] = useState([])
    
    // const localStr = window.localStorage;

    
  useEffect(() => {
    const storedNotes = JSON.parse(window.localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    } else {
      setNotes(data);
      window.localStorage.setItem('notes', JSON.stringify(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);



    const addNotes = (note) =>{
        setNotes(
            [...notes, {
                id: notes.length,
                title: note.title,
                description: note.description
            },
        ]
        )
    }

    const removeNotes = (noteId) =>{
        setNotes(
            notes.filter(n => n.id !== noteId)
        )
    }

    const updateNotes = (id, updatedNote) => {
        setNotes(notes.map(note => (note.id === id ? { ...note, ...updatedNote } : note)));
    };

    return(

        <NotesContext.Provider
            value = {{
                notes,
                addNotes,
                removeNotes,
                updateNotes
            }}
        >
            {props.children}
        </NotesContext.Provider>

    )
}