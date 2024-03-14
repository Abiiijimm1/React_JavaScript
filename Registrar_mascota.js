#App.js
import React, { useState } from 'react';

function RegistroPersona() {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [imagen, setImagen] = useState('');
  const [padecimiento, setPadecimiento] = useState('');
  const [personas, setPersonas] = useState([]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleContactoChange = (event) => {
    setContacto(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.files[0]);
  };

  const handlePadecimientoChange = (event) => {
    setPadecimiento(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaPersona = { nombre, contacto, imagen: URL.createObjectURL(imagen), padecimiento };
    setPersonas([...personas, nuevaPersona]);
    setNombre('');
    setContacto('');
    setImagen('');
    setPadecimiento('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ fontFamily: 'Arial, sans-serif', backgroundImage: 'url("https://i.pinimg.com/736x/bf/ab/f9/bfabf9b10822fba73d25098e0b942146.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="row">
        <div className="col-md-6 text-center">
          <h2 style={{ color: 'black' }}>Registro de Mascotas</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={handleNombreChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="contacto" className="form-label">Contacto:</label>
              <input type="text" className="form-control" id="contacto" value={contacto} onChange={handleContactoChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="imagen" className="form-label">Imagen:</label>
              <input type="file" className="form-control" id="imagen" onChange={handleImagenChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="padecimiento" className="form-label">Padecimiento:</label>
              <input type="text" className="form-control" id="padecimiento" value={padecimiento} onChange={handlePadecimientoChange} />
            </div>
            <button type="submit" className="btn btn-danger">Registrar</button>
          </form>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-end text-center">
          <h2 style={{ color: 'black' }}>Registros</h2>
          <table className="table table-pink">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Contacto</th>
                <th>Imagen</th>
                <th>Padecimiento</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((persona, index) => (
                <tr key={index}>
                  <td>{persona.nombre}</td>
                  <td>{persona.contacto}</td>
                  <td><img src={persona.imagen} alt="imagen" style={{ maxWidth: '100px' }} /></td>
                  <td>{persona.padecimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegistroPersona;
