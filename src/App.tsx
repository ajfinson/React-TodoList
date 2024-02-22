import React from "react";
import "./App.css";

function App() {
    const [newItem, setNewItem] = React.useState("");
    const [list, setList] = React.useState([]);
    
const handleNewItem = () => {
    if (newItem) {
        setList([...list, newItem]);
        setNewItem("");
    }
}
const handleDeleteItem = (indexToDelete:number) => {
    setList(list.filter((item, index) => index !== indexToDelete));
}


  return (
    <div className="App">
        <h1>Shopping List</h1>
        <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleNewItem}>Add</button>
        <ul>
            {list.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
            ))}
        </ul>

    </div>
              )}

export default App;