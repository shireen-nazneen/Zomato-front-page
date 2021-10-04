import React, { Component } from 'react'
import "./App.css"
import Logo from './Logo';
import { useState } from 'react';



function Login(props) {

  const [ele, setEle] = useState("")

  function CHange(e) {
    setEle(e.target.value);
    console.log(e.target.value);
  }
  const list1 = ["/A2b.png", "/icecream.png", "/pradise.png", "/domenoze.png"]
  return (
    <>
      <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
          className='search_bar'
          onKeyUp={CHange}
        />
        <button type="submit" onClick={(e) => props.handleChange(e)}>Search</button>
      </form>

      <table className="Logo">
        <tr>

          {ele ?
            list1.map((e) => e.includes(ele) ? <th><Logo titel={e} styel={{ widht: '10px' }} imgurl={e} discrption={e}></Logo></th> : "")
            : ""}
        </tr>
      </table>
    </>
  );
}

export default Login;
