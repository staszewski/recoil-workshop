import React, { ChangeEvent, MouseEvent } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil/dist";
import { textState } from "./atoms/text-atom";
import { listState } from "./atoms/list-atom";
import { itemsCountState } from "./selectors/items-count-selector";

function App() {
  const [text, setText] = useRecoilState(textState);
  const [listItems, setListItems] = useRecoilState<string[]>(listState);
  const listLength = useRecoilValue(itemsCountState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addItemList = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setListItems((oldList: string[]) => {
      const newList = [...oldList, text];
      return newList;
    });
    setText("");
  };

  return (
    <div className="app">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={addItemList}>Add item to list</button>
      <h2>Added items count: {listLength}</h2>
      <ul>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
