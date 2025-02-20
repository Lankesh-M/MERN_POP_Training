import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var previousRender = useRef();
  //   useEffect(() => {},[]) format for creating useEffect.
  useEffect(() => {
    previousRender.current = text;
  }, [text]);
  return (
    <div>
      <h1>This is UseRef Example.</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>The current Render text is {text}</h2>
      <h2>The previous Rendered text is {previousRender.current}</h2>
    </div>
  );
};
export default UseRef;