#App.js


import React, { useState } from 'react';

function App() {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [savedRecords, setSavedRecords] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setDecimal(value);

    if (!isNaN(value)) {
      const decValue = parseInt(value, 10);
      setBinary(decValue.toString(2));
      setOctal(decValue.toString(8));
      setHexadecimal(decValue.toString(16).toUpperCase());
    } else {
      setBinary('');
      setOctal('');
      setHexadecimal('');
    }
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };

  const handleInputBlur = () => {
    if (decimal === '') {
      setIsClicked(false);
    }
  };

  const handleSave = () => {
    if (decimal !== '' && !isNaN(decimal)) {
      const record = {
        decimal: decimal,
        binary: binary,
        octal: octal,
        hexadecimal: hexadecimal,
      };
      setSavedRecords([...savedRecords, record]);
      setDecimal('');
      setBinary('');
      setOctal('');
      setHexadecimal('');
    } else {
      alert('Por favor, ingrese un número decimal válido.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: '✵•.¸,✵°✵.｡.✰ ℂ𝕠𝕟𝕧𝕖𝕟𝕤𝕠𝕣 𝔻𝕖𝕔𝕚𝕞𝕒𝕝 ✰.｡.✵°✵,¸.•✵´' }}>
      <div style={{ background: '#f0f0f0', borderRadius: '10px', padding: '20px', marginBottom: '20px', display: 'inline-block', border: '2px solid black', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>✵•.¸,✵°✵.｡.✰ ℂ𝕠𝕟𝕧𝕖𝕟𝕤𝕠𝕣 𝔻𝕖𝕔𝕚𝕞𝕒𝕝 ✰.｡.✵°✵,¸.•✵</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <input
            type="text"
            value={isClicked ? decimal : 'Número a Convertir'}
            onChange={handleChange}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            style={{ width: '300px', textAlign: 'center', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#333' }}>꧁🐧✭ B̼i̼n̼a̼r̼i̼o̼  ✭🐧꧂ </label>
          <span style={{ marginLeft: '10px', marginRight: '20px', color: '#333' }}>{binary}</span>
          <label style={{ color: '#333' }}>꧁🐧✭ O̼c̼t̼a̼l̼  ✭🐧꧂ </label>
          <span style={{ marginLeft: '10px', marginRight: '20px', color: '#333' }}>{octal}</span>
          <label style={{ color: '#333' }}>꧁🐧✭ H̼e̼x̼a̼d̼e̼c̼i̼m̼a̼l̼  ✭🐧꧂ </label>
          <span style={{ marginLeft: '10px', color: '#333' }}>{hexadecimal}</span>
        </div>
        <button onClick={handleSave} style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#3399ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', fontWeight: 'bold' }}>Guardar Registro</button>
      </div>
      <h2 style={{ color: '#333' }}>───※ ·❆· 𝓗𝓲𝓼𝓽𝓸𝓻𝓲𝓪𝓵 𝓖𝓾𝓪𝓻𝓭𝓪𝓭𝓸 ·❆· ※───</h2>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%', maxWidth: '800px', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Decimal</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Binario</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Octal</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Hexadecimal</th>
          </tr>
        </thead>
        <tbody>
          {savedRecords.map((record, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'inherit' }}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{record.decimal}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{record.binary}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{record.octal}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{record.hexadecimal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

------------------------------------------------------------------------------------------------------

  #index.js


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


