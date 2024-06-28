import React,{useState} from 'react'

function Color() {
    const [color,setColor]=useState('Black');

    const handleClick=()=>{
        const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }
  return (
        <div className="p-4">
            
                <input
                    type="text"
                    placeholder="Enter text..."
                    className="border border-gray-300 p-2 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className={`text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${color}`}
                    onClick={handleClick}
                >
                    Submit
                </button>
            
        </div>
      
  )
}

export default Color;

