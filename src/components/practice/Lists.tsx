import {useState} from 'react'
import './Lists.css';
// import Draggable from 'react-draggable'

function Lists() {
  // Int state
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [count, setCount] = useState(0);
  const itemsElements = items.map(item=><h5 key={item}>{item}</h5>);

  function addToList(){
    const newItem = `Item ${items.length+1}`;
    setItems(prevState=>[...prevState, newItem]);  // Get previos state, and append new item to it
  }

  function add(){
    setCount(prevCount=> prevCount+1)
  }

  function min(){
    setCount(prevCount=> prevCount-1)
  }

    return (
      <div className='block'>
            {itemsElements}
            <button onClick={addToList} className="btn btn-primary">Add new</button> 
            <hr/>

           <div className="input-group mb-3">
           <button onClick={min} className="btn btn-primary">-</button> 
          <h6 className='p-2'>{count}</h6>
          <button onClick={add} className="btn btn-primary">+</button> 
        </div>
        </div>
      
    )
  
}

export default Lists;