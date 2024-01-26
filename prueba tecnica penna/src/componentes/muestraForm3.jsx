const MuestraImg = ({datos3}) => {
    return (
        <div>
            <h2>Titulo de la imagen: {datos3.tituloImg}</h2>
            <img src ={datos3.img} alt={datos3.tituloImg} className="imgSize"/>
        </div>
    )
}
export default MuestraImg