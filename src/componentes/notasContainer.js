import { Note } from "./nota";

//se recibe las props notes que es el array de notes y deleteNote que es la funcion de eliminar
export function NotesContainer({notes, deleteNote}) {
    return(
        <div className= "notes-container d-flex flex-wrap justify-content-start">
            {notes.map((note, index) => (
                // mapeo notes,para que cada iteracion renderizo note y el index que bien puede ser un identificador unico para diferenciar las notes 
                //index lo agrego como key, pero bien como comento se puede agregar un id unico
                <div className="col-lg-3 col-md-3">
                    <Note key={index} note={note} deleteNote={() => deleteNote(index)} />
                </div>
            ))}
        </div>
    )

}