import { useState, useMemo } from "react";
function slowFunction(num){
    for(var i = 0;i<10000000000;i++){}
    return num*2
}
const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingUpANumber = useMemo(()=>{
    return slowFunction(number)
  },[number])
  return (
    <div style={styling}>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h1>This is useMemo example </h1>
      {/* Number Box:{" "}
      <input
        type="number"
        value={number}  
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>The number is {number}</h2>
      <h2>The number is {doublingUpANumber}</h2> */}
    </div>
  );
};
export default UseMemo;








// import { useMemo, useState } from "react";
// // function slowFunction(num) {
// //     for(let time=1; time < 50000; time++){
// //         return num*
// //     }
// // }
// const UseMemo = () => {
//   var [number, setNumber] = useMemo(0);
//   var [theme, setTheme] = useState(false);
//   var styling = {
//     backgroundColor: theme ? "black" : "white",
//     color: theme ? "white" : "black",
//   };
//   return (
//     <div style={styling}>
//       <h1>This is useMemo Example</h1>
//       Number Box:{" "}
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <h1>Number is : {number}</h1>
//       <h1>Number is : {number}</h1>
//     </div>
//   );
// };

// export default UseMemo;