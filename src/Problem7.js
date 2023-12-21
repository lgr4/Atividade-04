import { useState } from "react";

function Problem7 () {
    const [valor1,setValor1] = useState("Digite seu título aqui");
    const [valor2,setValor2] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

    const handleChange1 = (event) => {
        setValor1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValor2(event.target.value);
    };

    return (
        <header>
            <input type="text" value={valor1} onChange={handleChange1} />
            <h1> {valor1} </h1>
            <input type="text" value={valor2} onChange={handleChange2} />
            <p> {valor2}
            </p>
        </header>
    )
}

export default Problem7;