import {useState} from "react"

export function Form({addNote}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [important, setImportant] = useState(false);
    const handleSubmit = (e) =>{
        console.log('Enviando Form');
        e.preventDefault();
        if(!description.trim()){
            alert('Complete la descripcion')
        }
        else{
            addNote ={
                title,
                description,
                important
            }
            alert('Nota Agregada')
        }
    }

    return(
        <div className="container">
            <form className="d-flex mb-5 " onSubmit={handleSubmit}>
                <div className="d-flex align-items-center">
                    <div className="col-6 m-1">
                        <input type="text" className="form-control" placeholder="Titulo"></input>
                    </div>
                    <div className="col-10 m-2">
                        <input type="text" className="form-control" placeholder="Description"></input>
                    </div>
                    
                    <input type="checkbox" className="form-check-input m-1" value=""/>
                    <label className="form-check-label">Importante</label>
                    
                    <button type="submit" className="btn btn-dark col-6 m-2 rounder-1 h-75">Agregar</button>
                </div>
                
            </form>
        </div>
    )
}