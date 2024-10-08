
import Resistencia from "Resistencia"; // Asegúrate de que la ruta sea correcta

const Resistencias = () => {
    const data = [
        { lang: "Negro", fcolor: "#000000", valor: 0 },
        { lang: "Cafe", fcolor: "#6F4E37", valor: 1 },
        { lang: "Rojo", fcolor: "#FF0000", valor: 2 },
        { lang: "Naranja", fcolor: "#FFA500", valor: 3 },
        { lang: "Amarillo", fcolor: "#FFFF00", valor: 4 },
        { lang: "Verde", fcolor: "#008000", valor: 5 },
        { lang: "Azul", fcolor: "#0000FF", valor: 6 },
        { lang: "Morado", fcolor: "#800080", valor: 7 },
        { lang: "Gris", fcolor: "#808080", valor: 8 },
        { lang: "Blanco", fcolor: "#FFFFFF", valor: 9 },
        { lang: "Dorado", fcolor: "#FFD700", valor: 10 },
        { lang: "Plateado", fcolor: "#C0C0C0", valor: 11 }
    ];

    return (
        
        <>
        {
            data.map(({lang,  fcolor, valor}) => {
                return(
                    <Resistencia 
                    key={lang}
                    lang={lang}
                    fcolor={fcolor}
                    valor={valor}
                        />
                );
            })}
            </>
    
    )
}

export default Resistencias;





