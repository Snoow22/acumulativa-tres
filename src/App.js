import { useState } from "react"
import { Header } from "./componentes/header"
import { Form } from "./componentes/form"
import { NotesContainer } from "./componentes/notasContainer"



export function App(){
    const [notes, setNotes] = useState([])

    const addNote = (note) => {
        setNotes([...notes, note])
    }
    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }
    console.log("notas de app: ", notes)
    return (
        <div className="App">
            <Header/>
            <Form addNote={addNote}/>
            <NotesContainer notes={notes} deleteNote={deleteNote}/>
        </div>
    )
}
