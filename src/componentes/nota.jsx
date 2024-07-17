import '../CSS/note.css';

//Se recibe las props note y deleteNote
export function Note({note, deleteNote}) {
    const {title, description, important} = note
    
    
    if(important){
        return(
            <div className="noteI p-3 m-3 important" style={{background: '#EC7063'}}>
                <div className="note-header d-flex justify-content-between">
                    <h3>{title}</h3>
                    <button className="btn" onClick={deleteNote}><i className="bi bi-x"></i></button>
                </div>
                <p>{description}</p>
            </div>
        )
    }
    else{
        return(
            <div className='note p-3 m-3' style={{background: '#FFFFCC'}}>
                <div className="note-header d-flex justify-content-between">
                    <h3>{title}</h3>
                    <button className="btn" onClick={deleteNote}><i className="bi bi-x"></i></button>
                </div>
                <p>{description}</p>
            </div>
        )
    }
}