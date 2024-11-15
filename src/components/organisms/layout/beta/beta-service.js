import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/styles/global/forEstudiantes.css';

const BetaForm = () => {

  const navigate = useNavigate();

  const [estudianteData, setEstudianteData] = useState({
    nombre: '',
    correo: '',
    usuario: '',
    semestre: '',
    universidad: '',
    carrera: '',
    boleta: ''
  });

  const [docenteData, setDocenteData] = useState({
    nombre: '',
    correo: '',
    usuario: '',
    area: '',
    universidad: '',
    sede: '',
    asignatura: ''
  });

  const [isEstudiante, setIsEstudiante] = useState(true);

  const handleEstudianteInputChange = (e) => {
    const { name, value } = e.target;
    setEstudianteData({
      ...estudianteData,
      [name]: value,
    });
  };

  const handleDocenteInputChange = (e) => {
    const { name, value } = e.target;
    setDocenteData({
      ...docenteData,
      [name]: value,
    });
  };

const handleEstudianteSubmit = async (e) => {
  e.preventDefault();
  console.log(estudianteData);
  try {
    const response = await fetch('http://localhost:5000/submitEstudianteForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(estudianteData),
    });

    const data = await response.json();
    console.log(data);

    if (data.message === 'Data inserted successfully') {
      handleGoToConfirmation();
    }
    else if (data.err.errno === 1062){
	alert("Usuario ya existente");
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const handleDocenteSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/submitDocenteForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(docenteData),
    });

    const data = await response.json();
    console.log(data); 

    if (data.message === 'Data inserted successfully') {
      handleGoToConfirmation();
    }
    else if (data.err.errno === 1062){
	alert("Usuario ya existente");
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


/*
  const handleEstudianteSubmit = (e) => {
    e.preventDefault();
    console.log(estudianteData);
    return handleGoToConfirmation();
  };

  const handleDocenteSubmit = (e) => {
    e.preventDefault();
    console.log(docenteData);
    return handleGoToConfirmation();
  };
*/
  const handleGoToConfirmation = () =>{
    navigate('/confirm');
  }

  return (
    <div className="form-container">
      <h1>Acceso Beta</h1>
      <div className="toggle-buttons">
        <button onClick={() => setIsEstudiante(true)} className={`toggle-button ${isEstudiante ? 'active' : ''}`}>Estudiante</button>
        <button onClick={() => setIsEstudiante(false)} className={`toggle-button ${!isEstudiante ? 'active' : ''}`}>Docente</button>
      </div>
      {isEstudiante ? (
        <div>
          <h2>Cuenta Estudiante</h2>
          <form id="betaEstudianteForm" onSubmit={handleEstudianteSubmit}>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Nombre Completo" 
              value={estudianteData.nombre} 
              onChange={handleEstudianteInputChange} 
              required
            />
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              placeholder="Correo Electrónico" 
              value={estudianteData.correo} 
              onChange={handleEstudianteInputChange} 
              required
            />
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              placeholder="@usuario-a-reservar" 
              value={estudianteData.usuario} 
              onChange={handleEstudianteInputChange} 
            />
            <input 
              type="text" 
              id="semestre" 
              name="semestre" 
              placeholder="Semestre" 
              value={estudianteData.semestre} 
              onChange={handleEstudianteInputChange} 
            />
            <input 
              type="text" 
              id="universidad" 
              name="universidad" 
              placeholder="Universidad" 
              value={estudianteData.universidad} 
              onChange={handleEstudianteInputChange} 
            />
            <input 
              type="text" 
              id="carrera" 
              name="carrera" 
              placeholder="Carrera" 
              value={estudianteData.carrera} 
              onChange={handleEstudianteInputChange} 
            />
            <input 
              type="text" 
              id="boleta" 
              name="boleta" 
              placeholder="No. Boleta (Opcional)" 
              value={estudianteData.boleta} 
              onChange={handleEstudianteInputChange} 
            />
            <button type="submit">Solicitar acceso</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Cuenta Docente</h2>
          <form id="betaDocenteForm" onSubmit={handleDocenteSubmit}>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Nombre Completo" 
              value={docenteData.nombre} 
              onChange={handleDocenteInputChange} 
              required
            />
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              placeholder="Correo Electrónico Institucional" 
              value={docenteData.correo} 
              onChange={handleDocenteInputChange} 
              required
            />
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              placeholder="@usuario-a-reservar" 
              value={docenteData.usuario} 
              onChange={handleDocenteInputChange} 
            />
            <input 
              type="text" 
              id="area" 
              name="area" 
              placeholder="Área" 
              value={docenteData.area} 
              onChange={handleDocenteInputChange} 
            />
            <input 
              type="text" 
              id="universidad" 
              name="universidad" 
              placeholder="Universidad" 
              value={docenteData.universidad} 
              onChange={handleDocenteInputChange} 
            />
            <input 
              type="text" 
              id="sede" 
              name="sede" 
              placeholder="Sede o Campus" 
              value={docenteData.sede} 
              onChange={handleDocenteInputChange} 
            />
            <input 
              type="text" 
              id="asignatura" 
              name="asignatura" 
              placeholder="Asignatura que imparte" 
              value={docenteData.asignatura} 
              onChange={handleDocenteInputChange} 
            />
            <button type="submit">Solicitar acceso</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BetaForm;
