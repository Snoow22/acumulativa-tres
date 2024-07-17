

export function Note({Note, deleteNote}) {
    const {title, description, important} = Note
    if(important){
        return(
            <div class="note p-3 m-3 important">
                <div class="note-header d-flex justify-content-between">
                    <h3>{title}</h3>
                    <button class="btn" onclick={deleteNote}><i class="bi bi-x"></i></button>
                </div>
                <p>{description}</p>
            </div>
        )
    }
}