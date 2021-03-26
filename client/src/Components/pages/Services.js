import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'
import '../../App.css'


export default (props) => {
  const[event, setEvent] = React.useState({});
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState();
  const[address,setAddress] = useState("");
  const[whoopsie,setWhoopsie] = useState("");

  useEffect(() => {
    console.log(props.id);
    
    axios.get('http://localhost:8000/api/events/'+props.id)
    .then(res => {
        console.log(res.data);
        setEvent(res.data.Event);
    })
    .catch((error) => {
        console.log(error);
      })
  },[]) ;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    event.volunteers.push({name:name,email:email,phone:phone,address:address})
    axios.put("http://localhost:8000/api/events/update/"+props.id,event)
    .then(res => {
        if(res.data.error) {
            console.log(res.data.error.errors);
            setWhoopsie(res.data.error.errors);
        }
        else{
            navigate('/')
        }
    })
    .catch((error) => {
        console.log(error);
    })
}
    return(
      <form onSubmit={onSubmitHandler} className="Info">
        <h1 className='enter'>Enter your info here!</h1>
        <input 
        className='input'
        type={Text}
        placeholder="First and Last Name"
        />
        <input 
        className='input'
        type={Text}
        placeholder="Email"
        />
        <input 
        className='input'
        type={Text}
        placeholder="Phone Number"
        />
        <button className='Submit'>Submit</button>
      </form>
    )}