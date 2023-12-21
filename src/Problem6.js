import { useState } from "react";

function Problem6 () {
    const [valor,setValor] = useState("Aqui começa meu primeiro parágrafo. Entre com o texto que desejar.");

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div>
            <input type="text" value={valor} onChange={handleChange} />        
            <p> {valor} </p>
        </div>
    )
}

export default Problem6;