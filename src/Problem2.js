import { useState } from "react";

function Problem2 () {
    const [valor,setValor] = useState("Digite um título.");

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div>   
            <input type="text" value={valor} onChange={handleChange} />
            <h1>{valor}</h1>
        </div>
    );
}

export default Problem2;