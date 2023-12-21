import { useState } from "react";

function Clique () {
    alert('Clicou');
}

function Problem3 () {
    const [valor,setValor] = useState("Clique aqui.");

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div>   
            <input type="text" value={valor} onChange={handleChange} />
            <br/>
            <button onClick={Clique}>{valor}</button>
        </div>
    )
}

export default Problem3;