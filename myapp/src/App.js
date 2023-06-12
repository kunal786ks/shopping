import logo from './logo.svg';
import './App.css';
import mydata from './Procucts/index.json';
import {useState} from "react";

const App=()=>{

  const [query, setQuery]=useState("")
  const [data,setData ]=useState(mydata.product)

  const handelChange=(e)=>{
    setQuery(e.target.value);
  }
  const handelSubmit=()=>{
    const temp=data.filter((item)=>{
      
      // console.log(query);
      return item.productname.toLowerCase()===query.toLowerCase();
    })
    setData(temp);
  }
  return (
    <div className="App">
      <h1 style={{color:"red"}}><u>Welcome to SHOPIFY</u></h1>
      <p1 style={{color:"red"}}>Get Excluse discount on trending items</p1>
      <br></br>
      <input placeholder="search here for product" onChange={handelChange}/>
      <button onClick={handelSubmit}>Search</button>
      {
        data.map((post)=>{
          return (
            <div>
            <p>{post.productname}</p>
            <p>{post.price}</p>
            <img src={post.img}/>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
