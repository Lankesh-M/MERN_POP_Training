import { useEffect, useState } from "react";
const UseEffect = () => {
  var [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  },[text]);
  return (
    <section>
      <h1>This is useEffect Example</h1>
      Type your Text:{" "}
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <h1>You typed this :{text}    </h1>
    </section>
  );
};
export default UseEffect;