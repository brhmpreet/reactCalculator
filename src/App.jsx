import { useState } from 'react'
import './App.css'

function App() {
  const [field,setField] = useState('');

  function handleNumber(e){
    let temp = field.concat(e.target.innerText)
    setField(temp);
  }

  return (
    <div className='outer-container' style={{width:'300px'}}>
      <div style={{color:'black',backgroundColor:'darkgray', height:'30px', margin:'0px 20px'}}>{field}</div>
      <div className='container'>
        <button onClick={()=>setField('')}>C</button>
        <button onClick={()=>setField(field.slice(0,field.length-1))}>&lt;</button>
        <button onClick={(e)=>handleNumber(e)}>%</button>
        <button onClick={(e)=>handleNumber(e)}>/</button>
      </div>
      <div className='container'>
        <button onClick={(e)=>handleNumber(e)}>7</button>
        <button onClick={(e)=>handleNumber(e)}>8</button>
        <button onClick={(e)=>handleNumber(e)}>9</button>
        <button onClick={(e)=>handleNumber(e)}>*</button>
      </div>
      <div className='container'>
        <button onClick={(e)=>handleNumber(e)}>4</button>
        <button onClick={(e)=>handleNumber(e)}>5</button>
        <button onClick={(e)=>handleNumber(e)}>6</button>
        <button onClick={(e)=>handleNumber(e)}>+</button>
      </div>
      <div className='container'>
        <button onClick={(e)=>handleNumber(e)}>1</button>
        <button onClick={(e)=>handleNumber(e)}>2</button>
        <button onClick={(e)=>handleNumber(e)}>3</button>
        <button onClick={(e)=>handleNumber(e)}>-</button>
      </div>
      <div className='container'>
        <button onClick={(e)=>handleNumber(e)}>0</button>
        <button onClick={(e)=>handleNumber(e)}>00</button>
        <button onClick={(e)=>handleNumber(e)}>.</button>
        <button onClick={()=>setField(eval(field).toString())}>=</button>
      </div>
    </div>  
  )
}

export default App
