
import "react"
import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useCallback} from "react"

function App() {
  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState(null)


  useEffect(() => {
    fetch("")
    .then((res) => {return removeEventListener.json(); 
    }) 
    .then((data) => {
      setItems(data.items)
    });
  }, []);


  return (
    <div className="App">
     
      <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>

      
    </div>
  );
}

export default App;
