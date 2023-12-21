import image from "./images/imagem.png"
import { useState } from "react";

function Problem5 () {
    const [valor,setValor] = useState({image});

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div>
            <input type="text" value={valor} onChange={handleChange} />
            <br/>
            <br/>     
            <img src={image} alt='Logo da UPE'></img>
        </div>
    )
}

export default Problem5;