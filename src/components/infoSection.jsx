import { FaHeadset, FaLock, FaShippingFast, FaTag, FaTrash } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";



 const InfoSection = () => {
  const infoitems = [
    {
        icon : <FaShippingFast className="text-3xl text-red-600" />,
        title : 'Free Shipping',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio modi doloribus vero possimus repellendus voluptates deleniti'
    },
    {
        icon : <FaHeadset className="text-3xl text-red-600" />,
        title : 'Free Shipping',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio modi doloribus vero possimus repellendus voluptates deleniti'
    },
    {
        icon : <FaMoneyBill1Wave className="text-3xl text-red-600" />,
        title : 'Free Shipping',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio modi doloribus vero possimus repellendus voluptates deleniti'
    },
    {
        icon : <FaTag className="text-3xl text-red-600" />,
        title : 'Free Shipping',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio modi doloribus vero possimus repellendus voluptates deleniti'
    },
    {
        icon : <FaLock className="text-3xl text-red-600" />,
        title : 'Free Shipping',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio modi doloribus vero possimus repellendus voluptates deleniti'
    },
  ]
  return(
    <div className="bg-white pb-8 pt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoitems.map((item,index)=>{
            return <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform 
                    duration-300 hover:scale-103 cursor-pointer">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold">
                    {item.title} 
                </h3>
                <p className="mt-2 text-gray-600">
                    {item.description}
                </p> 
            </div>
        })}
          </div>
    </div>
  )
};
export default InfoSection;