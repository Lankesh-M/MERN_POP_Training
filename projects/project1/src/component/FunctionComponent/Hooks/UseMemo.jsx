import { useMemo, useState } from "react";
// function slowFunction(num) {
//     for(let time=1; time < 50000; time++){
//         return num*
//     }
// }
const UseMemo = () => {
  var [number, setNumber] = useMemo(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  return (
    <div style={styling}>
      <h1>This is useMemo Example</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Number is : {number}</h1>
      <h1>Number is : {number}</h1>
    </div>
  );
};

export default UseMemo;