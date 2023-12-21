import { useState } from "react";

function Problem8 () {
    const [valor,setValor] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <footer>
            <input type="text" value={valor} onChange={handleChange} />
            <h1> {valor} </h1>
        </footer>
    )
}

export default Problem8;