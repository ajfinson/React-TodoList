import React from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "./todoAtom";
import PopUp from "./PopUp";

function App() {
    const [newItem, setNewItem] = React.useState("");
    const [list, setList] = useRecoilState(todoAtom);
    const [indexToDelete, setIndexToDelete] = React.useState(0);
    const [showPopUp, setShowPopUp] = React.useState(false);

    
const handleNewItem = () => {
    if (newItem) {
        setList([...list, newItem]);
        setNewItem("");
    }
    else{
        alert("Please enter an item");
    
    }
}

const handleDeleteItem = (itemIndex:number) => {
    
    if (list.length >= 1) {
        setIndexToDelete(itemIndex);
        setShowPopUp(true);
    }
    else {
        alert("No items to delete");
    }
  

   
  
}

  return (
    <div className="App">
        <div id="container">
        <h1 className="headerinput">Shopping List</h1>
        <input
            className="headerinput"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="headerbutton" onClick={handleNewItem}>Add</button>
        <ul className="theList">
            {list.map((item, index) => (
            <li key={index}>
                {item}
                <button className="bodybutton" onClick={() =>handleDeleteItem(index)}>Delete</button>
                <PopUp message={item} PopUpOpen={showPopUp} setShowPopUp={setShowPopUp} indexToDelete={indexToDelete} indexOfItem={index}/>
                </li>
            ))}
        </ul>
        
        </div>
    </div>
 )}

export default App;