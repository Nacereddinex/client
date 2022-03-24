import Axios from 'axios'
import './App.css';
import { useState } from 'react';


function App() {

  const [name,setName]=useState('')
  const [age,setAge]=useState(0)
  const [country,setCountry]=useState('')
  const [position,setPosition]=useState('')
  const [wage,setWage]=useState(0)
  const [emplist,setEmplist]=useState([])


  
  const handleSub =()=> {
    Axios.post('http://localhost:3001/create',{name:name,age:age,country:country,position:position,wage:wage}).then(()=>console.log('success'))

  }
  const handleGet =()=> {
    Axios.get('http://localhost:3001/get').then((res)=>setEmplist(res.data))

  }
  return (
    <div className="App">
      <div className='info'>
       <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='name'/>
       <input type="number" onChange={(e)=>{setAge(e.target.value)}} placeholder='age'/>
       <input type="text" onChange={(e)=>{setCountry(e.target.value)}} placeholder='country'/>
       <input type="text" onChange={(e)=>{setPosition(e.target.value)}} placeholder='position'/>
       <input type="number" onChange={(e)=>{setWage(e.target.value)}} placeholder='wage'/>

       <button onClick={handleSub} className="btn"> Save </button>
       

       
       </div>
       <div className='employees'>
        <button onClick={handleGet}>show employees</button>

        {emplist.map((val,key)=>{
          return <div className='emp'>
                    <h3>name : {val.name} </h3>
                    <h3>age :{val.age}</h3>
                    <h3>country :{val.country}</h3>
                    <h3>position: {val.position}</h3>
                    <h3>wage: {val.wage}</h3>
                  </div>


        })
        
        }

       </div>
    </div>
  );
}

export default App;
