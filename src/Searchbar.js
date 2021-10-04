import "./App.css"
import Login from './Login';

export default function Searchbar(props) {
  function add(){
    alert("jhjhj")
  }
  return (
    <div className="searchbar">
      <img src="/zomato.jpg" height="90%" width="100%"></img>
      <ul>
        <tr><th><button className="login" onClick={add} >Login</button></th></tr>
        <tr><th> <button className="sing_up" >singup</button></th></tr>
      </ul>
      <div class="centered">
        <h1 className="text">Zomato</h1>
        <h1 class="hedding">Discover the best food &amp; drinks in <span class="next-line">Kingman, KS</span></h1>
        <Login handleChange={props.handleChange}></Login>
      </div>



    </div>
  )
}
