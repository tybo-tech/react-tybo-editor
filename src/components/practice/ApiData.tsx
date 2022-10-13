import {useState, useEffect} from 'react'
import './ApiData.css';

function ApiData() {
//1. Get data
//2. Save data to state

// User Effect, allows us to interaract with outside react ecosystem
const [items, setItems] = useState({});
const [count, setCount] = useState(1);
console.log("Render");

// Use Effect takes 2 params, function with all side effects and dependecies array that detemines when the effect should run
//Or rather array that contains values when they change they run the effect.
// So if the array is empty efftect will run onmy on rander, but there are no dependences that will trigger the effect to run again
useEffect(()=>{
  fetch(`https://swapi.dev/api/people/${count}`)
  .then(res=>res.json())
  .then(data=>setItems(data))
},[count]);

function next(){
  setCount(prevCount=>{
    return prevCount+1;
  })
}
    return (
      <div className='block'>
        <button style={{margin:'3rem 0'}} onClick={next} className='btn btn-dark'>Next</button>
       <pre>
        {JSON.stringify(items, null, 2)}
       </pre>
      </div>
    )
  
}

export default ApiData;