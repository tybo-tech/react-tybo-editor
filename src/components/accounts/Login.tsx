import React from 'react'
import './Login.css';
// import Draggable from 'react-draggable'

export const Login: React.FC = () => {
  const [user, setUser] = React.useState({name: '', email: '', bio: '', isTagColleced: true, source:"social", favColor:"none"});
  console.log(user);

  function handleForm(event:any){
    setUser(prevUser=>{
      const {name, value, type , checked} = event.target;
      return {...prevUser, [name]: type === "checkbox" ? checked : value}
    })
  }
    return (
<div className='form'>
      <div className="mb-3">
        <label  className="form-label">Full Name</label>
        <input type="text" onChange={handleForm} className="form-control" name='name'/>
      </div>

    <div className="mb-3">
      <label  className="form-label">Email</label>
      <input type="text"  onChange={handleForm} className="form-control" name='email'/>
    </div>

    <div className="mb-3">
      <label  className="form-label">Bio</label>
     <textarea className='form-control'  onChange={handleForm}  name='bio'/>
    </div>


    <div className="form-check">
        <input className="form-check-input" checked={user.isTagColleced}  onChange={handleForm}  type="checkbox" id='flexCheckDefault' name='isTagColleced'/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        Have you collected you acces tag?
        </label>
</div>
<br/>
<div className="mb-3">
  <fieldset>
    <legend>How did you hear about us?</legend>

    <input className="form-check-input"  onChange={handleForm}  type="radio" value="online" id='online' name='source' checked = {user.source === "online"}/>
        <label className="form-check-label" htmlFor="online">
        Online
        </label> 
<br/>
        <input className="form-check-input"   onChange={handleForm}  type="radio" value="tv" id='tv' name='source' checked = {user.source === "tv"}/>
        <label className="form-check-label" htmlFor="tv">
        Tv
        </label> 

        <br/>
        <input className="form-check-input"   onChange={handleForm}  type="radio" value="social" id='social' name='source'  checked = {user.source === "social"}/>
        <label className="form-check-label" htmlFor="social">
        Social
        </label> 
  </fieldset>
     
    </div>

    <div className="mb-3">
      <label  className="form-label">Fav color</label>
      <select   onChange={handleForm} className="form-control" name='favColor' value={user.favColor}>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="none">None</option>
       </select> 
    </div>
    {/* <div className="mb-3">
    <button className="btn btn-primary" onClick={logForm}>Sign Up</button>

    </div> */}
</div>
    )
  
}
