import { Note } from "./nota";

export function NotesContainer({notes, deleteNote}) {
    return(
        <div>
            {notes.map((note, index) => (
                
                <Note key={index} note={note} deleteNote={() => deleteNote(index)} />
                
            ))}
        </div>
    )

}