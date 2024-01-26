import React, { useEffect, useState } from "react";

const Formdatos = () => {
    const [user, setUser] = useState({
        nombre:"",
        apellido:"",
        numero: null,
        fecha:""
    })
    const [mostrarDatos, setMostrarDatos] = useState(false);
    const [datos, setDatos] = useState({
       user: {
        nombre: "",
        apellido:"",
        numero: null,
        fecha: ""
       }
    });

    const handleInputChange = (e) => {
        setUser ({...user,[e.target.name]:e.target.value});
    };

    
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        
        try {
            const response = await fetch('http://localhost:3001/api/prueba/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            console.log(user);
            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del servidor:', responseData);

           
                setDatos(responseData);
                
               
            } else {
                console.error('Error del servidor:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };
    useEffect(() => {
    
        if (datos.user.nombre && datos.user.apellido && datos.user.numero && datos.user.fecha) {
            setMostrarDatos(true);
        }
    }, [datos]);
    
    return (
        <>
            <div className="card">
                <form className="card-form" onSubmit={handleSubmit}>
                    <label className="ma">
                        Nombre:
                        <input type="text" name="nombre"  onChange={handleInputChange} />
                    </label>
                    <label className="ma">
                        Apellido:
                        <input type="text" name="apellido"  onChange={handleInputChange} />
                    </label>
                    <label className="ma">
                        Teléfono:
                        <input type="number" name="numero"  onChange={handleInputChange} />
                    </label>
                    <label className="ma">
                        Fecha de nacimiento:
                        <input type="date" name="fecha"  onChange={handleInputChange} />
                    </label>
                    <button className="ma" type="submit">Guardar</button>
                </form>

                {mostrarDatos && (
                    <div>
                        <h1>Datos del usuario</h1>
                        <h3>Nombre: {datos.user.nombre}</h3>
                        <h3>Apellido: {datos.user.apellido} </h3>
                        <p>Telefono: {datos.user.numero}</p>
                        <p>Fecha de nacimiento: {datos.user.fecha}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Formdatos;
