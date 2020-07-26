import React, { ChangeEvent } from "react";
import "./App.css";
import { useRecoilState } from "recoil/dist";
import { textState } from "./atoms/text-atom";

function App() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="app">
      <input type="text" value={text} onChange={onChange} />
      Echo: {text}
    </div>
  );
}

export default App;
