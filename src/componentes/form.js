import {useState} from "react"

export function Form({addNote}){
    //uso state para manejar y declarar las variables de manera local
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [important, setImportant] = useState(false);
    //esta funcion se ejecuta con un onSubmit en el formulario
    const handleSubmit = (e) =>{
        console.log('Enviando Form');
        e.preventDefault();
        if(!description.trim()){
            alert('Complete la descripcion');
        }
        else{
            addNote({
                title,
                description,
                important
            });
            alert('Nota Agregada');
        }
        setTitle('');
        setDescription('');
        setImportant(false)
    }
    //dentro del html actualizo los valores de las variables, con el que se recibe para agregarlo a la note
    return(
        <div className="container">
            <form className="d-flex mb-5 " onSubmit={handleSubmit}>
                <div className="d-flex align-items-center">
                    <div className="col-6 m-1">
                        <input type="text" className="form-control" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div className="col-10 m-2">
                        <input type="text" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    
                    <input type="checkbox" className="form-check-input m-1" value="" checked={important} onChange={(e) => setImportant(e.target.checked)}/> 
                    <label className="form-check-label" style={{color:'#fff'}}>Importante</label>
                    
                    <button type="submit" className="btn btn-dark col-6 m-2 rounder-1 h-75" style={{color:'#fff'}}>Agregar</button>
                </div>
                
            </form>
        </div>
    )
}