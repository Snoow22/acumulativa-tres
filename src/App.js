import { useState } from "react"
import { Header } from "./componentes/header"
import { Form } from "./componentes/form"
import { NotesContainer } from "./componentes/notasContainer"



export function App(){
    const [notes, setNotes] = useState([])

    const addNote = (note) => {
        setNotes([...notes, note])
    }
    const deleteNote = (noteDeleting) => {
        const newNotes = notes.filter((note) => note !== noteDeleting);
        setNotes(newNotes);
    }
    return (
        <div className="App">
            <Header/>
            <Form addNote={addNote}/>
            <NotesContainer/>
        </div>
    )
}
