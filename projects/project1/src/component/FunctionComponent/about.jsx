import { useState } from "react";

function About(){
    var initialVal = 0;
    var [num, setNum] = useState(initialVal);
    console.log(num, setNum, initialVal)
    return(
        <div>
            <h1>About Page</h1>
            <h2>State initial value is {initialVal}</h2>
            <h2>Updated value is {num}</h2>
            <button onMouseMove={()=>setNum(num+1)}>Increment + </button>&nbsp;&nbsp;
            <button onMouseMove={()=>setNum(num-1)}>Decrement - </button>&nbsp;&nbsp;
            <button onClick={()=>setNum(initialVal)}>Reset</button>
        </div>
    )
}
export default About;