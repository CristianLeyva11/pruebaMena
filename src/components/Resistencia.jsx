import { useState } from 'react';
import './Resistencia.css'; 

const Resistencia = () => {
    const [banda1, setBanda1] = useState(0);
    const [banda2, setBanda2] = useState(0);
    const [multiplicador, setMultiplicador] = useState(1);
    const [tolerancia, setTolerancia] = useState(5);

    const resistencia = (banda1 * 10 + banda2) * multiplicador;

    const colores = [
        { nombre: "Negro", colorHex: "#000000" },
        { nombre: "Café", colorHex: "#6F4E37" },
        { nombre: "Rojo", colorHex: "#FF0000" },
        { nombre: "Naranja", colorHex: "#FFA500" },
        { nombre: "Amarillo", colorHex: "#FFFF00" },
        { nombre: "Verde", colorHex: "#008000" },
        { nombre: "Azul", colorHex: "#0000FF" },
        { nombre: "Morado", colorHex: "#800080" },
        { nombre: "Gris", colorHex: "#808080" },
        { nombre: "Blanco", colorHex: "#FFFFFF" },
        { nombre: "Dorado", colorHex: "#FFD700" },
        { nombre: "Plateado", colorHex: "#C0C0C0" }
    ];

    return (
        <div className="container">
            <div className='img'>
                <img 
                    src='https://ingenioso.top/wp-content/uploads/2021/11/4-bandas.png' 
                    alt="Bandas de resistencia" 
                />
            </div>
            <div className='contenido'>
                <h2>Calculadora de resistencias</h2>
                <div className="inputs-contenido">                
                    <div className="inputs">                
                        <div className="inputs-50">                
                            <select onChange={(e) => setBanda1(Number(e.target.value))}>
                                {colores.slice(0, 10).map((color, index) => (
                                    <option key={index} value={index}>{color.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="inputs-50">                
                            <select onChange={(e) => setBanda2(Number(e.target.value))}>
                                {colores.slice(0, 10).map((color, index) => (
                                    <option key={index} value={index}>{color.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="inputs">                
                        <div className="inputs-50">                
                            <select onChange={(e) => setMultiplicador(Number(e.target.value))}>
                                {colores.slice(0, 10).map((color, index) => (
                                    <option key={index} value={Math.pow(10, index)}>{color.nombre}</option>
                                ))}
                                <option value="0.1">Dorado</option>
                                <option value="0.01">Plateado</option>
                            </select>
                        </div>
                        <div className="inputs-50">                
                            <select onChange={(e) => setTolerancia(Number(e.target.value))}>
                                <option value="1">Café ±1%</option>
                                <option value="2">Rojo ±2%</option>
                                <option value="5">Dorado ±5%</option>
                                <option value="10">Plateado ±10%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input className='input-solo'
                    type="text"
                    value={`${resistencia} Ω ± ${tolerancia}%`}
                    readOnly
                />
                <div className="colors-display">
                    <span className="color-span" style={{ backgroundColor: colores[banda1].colorHex }}>
                        
                    </span>
                    <span className="color-span" style={{ backgroundColor: colores[banda2].colorHex }}>
                        {colores[banda2].nombre}
                    </span>
                    <span className="color-span" style={{ backgroundColor: multiplicador === 0.1 ? colores[10].colorHex : multiplicador === 0.01 ? colores[11].colorHex : colores[Math.log10(multiplicador)].colorHex }}>
                        {multiplicador === 0.1 ? "Dorado" : multiplicador === 0.01 ? "Plateado" : colores[Math.log10(multiplicador)].nombre}
                    </span>
                    <span className="color-span" style={{ backgroundColor: tolerancia === 5 ? colores[10].colorHex : tolerancia === 10 ? colores[11].colorHex : colores[tolerancia - 1].colorHex }}>
                        {tolerancia === 5 ? "Dorado" : tolerancia === 10 ? "Plateado" : colores[tolerancia - 1].nombre}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Resistencia;
