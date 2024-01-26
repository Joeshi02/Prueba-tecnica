import { useState } from "react"

const FormPdf = ({onFormSubmit2}) => {
    const [titulo, setTitulo] = useState("")
    const [archivoPdf, setArchivoPdf] = useState(null)
    const handletituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleArchivoPdfChange = (event) => {
        setArchivoPdf(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!archivoPdf) {
            alert("Por favor, selecciona un archivo PDF.");
            return;
        }

        // Enviar los datos al componente padre
        onFormSubmit2({ titulo, archivoPdf });
    };

    return (
        <>
            <div className="card">
                <form className="card-form" onSubmit={handleSubmit}>
                    <label className="ma">
                        Título del PDF:
                        <input type="text" value={titulo} onChange={handletituloChange} required />
                    </label>
                    <br />
                    <label className="ma">
                        Seleccionar PDF:
                        <input type="file" accept=".pdf" onChange={handleArchivoPdfChange} required />
                    </label>
                    <br />
                    <button className="ma" type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};

export default FormPdf;
    
