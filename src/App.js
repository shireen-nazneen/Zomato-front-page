import './App.css';
import Logo from './Logo';
import Login from './Login'
import { useState } from 'react';
import Searchbar from './Searchbar';

function App() { 
  const [para, setPara] = useState("")
  var arr = ["A2b","Domino's","Ice cream","Pradise","Chat"]
  var list1= arr.filter((each) => each.includes(arr))
  console.log(list1)

  function handleChange (e){
    e.preventDefault();
    setPara(e.target.value);
    console.log(e.target.value);  }
  
  return (
    <>   
     <div className="App">
      <Searchbar handleCHange={handleChange}></Searchbar>
    </div>
    </>
  );
}

export default App;
