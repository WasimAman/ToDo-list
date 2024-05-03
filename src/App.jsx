import { useState } from "react";
import List from "./components/List";

function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);
  const getList = (e) => {
    setList(e.target.value);
  };
  const check = () => {
    if (item.length == 0) {
      return "You have no pending work ✌️✌️";
    } else {
      return "";
    }
  };
  const addListItem = () => {
    if(list===""){
      alert("Empty list can't be added😒😒😒")
      return;
    }

    if(item.length==10){
      alert("Sorry can't add more 😥😥😥 please finish your previous works")
      return;
    }
    setItem((prev) => {
      return [...prev, list];
    });
    setList("");
  };
  const deleteItem = (id) => {
    setItem((oldValues)=>{
      return oldValues.filter((value,index)=>{
        return id!=index;
      })
    })
  };
  return (
    <>
      <div className="container">
        <div className="to-do-list">
          <h2>ToDo list</h2>
          <div className="form">
            <input
              type="text"
              id="inputField"
              placeholder="Enter something"
              onChange={getList}
              value={list}
            />
            <button onClick={addListItem} className="plus-button">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <h2 id="list">your Pending works</h2>
          <div className="list-items">
            <p>{check()}</p>
            <ol>
              {item.map((value, index) => {
                return <List id={index} key={index} text={value} onSelect={deleteItem}/>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
