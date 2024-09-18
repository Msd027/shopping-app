import React, {useState,useEffect} from "react";
import Header from './Header'
import Footer from './Footer'

const App = () => {

  const [title] = useState('Developer Funnel')
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const handleClick = () =>{
    setCount(count+1)
  }

  const handleClick1 = () =>{
    setCount1(count1-1)
  }

  useEffect(()=>{
    console.log("hii")
  },[count])
  return(
    <>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{title}</h1>
      <div class="count">
        <button onClick={handleClick1}>-</button>
        <h2>{count1}</h2>
        <h2>{count}</h2><button onClick={handleClick}>+</button>
      </div>
      <br></br>
      <Footer/>
    </>
  )
}

export default App
