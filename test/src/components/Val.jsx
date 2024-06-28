import React,{useState} from 'react'

function Val() {
    const handleSubmit=()=>{
        
        if(!email || !password){
            alert('Plese enter');
            setEmail('');
            setPassword('');
            return;
        }
        console.log(email)
        console.log(password)
    }
    const handleChange =(e)=>{e.target.value;
setEmail(e.target.value);
    }
    const handleChange1 =(e)=>{e.target.value;
setPassword(e.target.value);
    }
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
    return (
        <div>
            <input
                type="email"
                placeholder="Enter Email..."
                className="border border-gray-300 p-2 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                />
            <input
                type="text"
                placeholder="Enter Password..."
                className="border border-gray-300 p-2 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange1}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Val
