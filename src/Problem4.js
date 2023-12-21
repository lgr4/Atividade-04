import { useState } from "react";

function Problem4 () {
    const [valor1,setValor1] = useState("Item 1");
    const [valor2,setValor2] = useState("Item 2");
    const [valor3,setValor3] = useState("Item 3");
    
    const handleChange1 = (event) => {
        setValor1(event.target.value);
    };

    const handleChange2 = (event) => {
        setValor2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValor3(event.target.value);
    };
    
    return (
        
        <ul>
            <input type="text" value={valor1} onChange={handleChange1} />
            <br/>
            <item>{valor1}</item>
            <br/>
            <input type="text" value={valor2} onChange={handleChange2} />
            <br/>
            <item>{valor2}</item>
            <br/><input type="text" value={valor3} onChange={handleChange3} />
            <br/>
            <item>{valor3}</item>
            <br/> 
        </ul>
    )
}

export default Problem4;