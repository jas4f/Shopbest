import { useState } from "react";

const ChangeAdress = ({setAddress, setIsModelOpen}) => {
    const [newAddress, setNewAddress] = useState();

    const onclose = ()=>{
     setAddress(newAddress);
     setIsModelOpen(false);
    }

    const handleInput = (e)=>{
        setNewAddress(e.target.value);
    }

    return ( <>
       <div>
          <input type="text" 
          placeholder="Enter new Address"
          className="border p-2 w-full mb-4"
          onChange={handleInput}
           />
        <div className="flex justify-around">
            <button
            className="bg-gray-500 text-white py-3 px-4 rounded mr-2"
            onClick={()=> setIsModelOpen(false)}>
               Cancel
            </button>
            <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onclose}
            >
                Save Address
            </button>
        </div>
       </div>
    </> );
}
 
export default ChangeAdress;

