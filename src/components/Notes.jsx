export const Notes = (note) =>{
    return(
        <div>
            <h1>{note.title}</h1>
            <p>{note.id}</p>
            <p>{note.description}</p>
            <button>Eliminar</button>
            <button>Ver</button>
            <button>Editar</button>
        </div>
    )
}