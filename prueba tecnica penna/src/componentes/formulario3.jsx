import { useState } from "react"

const FromImg = ({onFormSubmit3}) => {
    const [tituloImg, setTituloImg] = useState("");
    const [img, setImg] = useState(null);
    
    const handleTituloImg = (e) => {
        setTituloImg(e.target.value);
    }

    const handleImg = (e) => {
        setImg(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!img) {
            alert("Por favor, selecciona una imagen.");
            return;
        }

        onFormSubmit3({ tituloImg, img });
    }

    return (
        <div className="card">
            <form className="card-form" onSubmit={handleSubmit}>
                <label className="ma">
                    Titulo Img: 
                    <input type="text" value={tituloImg} onChange={handleTituloImg} />
                </label>
                <label className="ma">
                    Seleccionar imagen
                    <input type="file" onChange={handleImg} />
                </label>
                <button className="ma" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FromImg;
