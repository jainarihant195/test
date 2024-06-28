import React from 'react'

function Validate() {
    const handleSubmit = async () => {
        if (!reason || !selectedPackage) {
          alert("Please select a valid reason and package");
          return;
        }
    
      };
    
  return (
    <div>
       <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Enter text..."
                    className="border border-gray-300 p-2 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
    </div>
  )
}

export default Validate
