
const MuestraForm = ({datosPdf}) => {
    return(
        <>
        <div>
            <h2>Datos del PDF:</h2>
            <p>Título del PDF: {datosPdf.titulo}</p>
            <p>Archivo PDF: {datosPdf.archivoPdf ? datosPdf.archivoPdf.name : "No se ha seleccionado un archivo"}</p>
        </div>
        </>
    )
}
export default MuestraForm