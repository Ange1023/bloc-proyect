/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { NotesContext } from "../Context/NotesContext"
import Modal from "./Modal";

export const Notes = ({note}) =>{

    const {removeNotes, updateNotes } = useContext(NotesContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editNote, setEditNote] = useState({ title: note.title, description: note.description });
    const [isViewing, setIsViewing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateNotes(note.id, editNote);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditNote({
            ...editNote,
            [name]: value
        });
    };

    return (
        <div className="noteCard">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="title"
                        value={editNote.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editNote.description}
                        onChange={handleChange}
                    />
                    <button onClick={handleSaveClick}>Guardar</button>
                </div>
            ) : (
                <div>
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    {/* <p>{note.id}</p> */}
                    <button
                        onClick={() => {removeNotes(note.id);}}
                    >
                        <img src="/deleteIcon.svg" alt="Eliminar" />
                    </button>
                    <button onClick = {() =>{setIsViewing(true);}}>
                        <img src="/previewIcon.svg" alt="Ver"/>
                    </button>
                    <button onClick={handleEditClick}> <img src="/editIcon.svg" alt="Editar" /></button>
                </div>
            )}
            <Modal show={isViewing} onClose={()=>{setIsViewing(false);}}>
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                {/* <p>{note.id}</p> */}
            </Modal>
        </div>
    );
};