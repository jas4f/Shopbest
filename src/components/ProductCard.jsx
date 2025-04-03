 import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

 const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    
    const handleProductData=(e,product)=>{
        e.stopPropagation();
        e.preventDefault();

        console.log('this is product : ',product);
        dispatch(addtoCart(product));
        alert("product added successfully !!");
    }
  return(
    <>
          <div className="bg-white p-4 shadow  border transform transition-transform duration-300 hover:scale-105 h-full flex flex-col">
              <div className="flex-grow mb-4 flex items-center justify-center">
                  <img
                      className='object-contain w-full h-48'
                      src={product.image}
                      alt={product.name}
                  />
              </div>
              <div className="flex flex-col justify-between">
                  <div>
                      <h3 className="text-sm font-medium line-clamp-2 h-10 overflow-hidden">
                          {product.name}
                      </h3>
                      <p className="text-lg font-semibold mt-1">${product.price}</p>
                      <div className="flex items-center mt-1">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                      </div>
                  </div>
                  <button onClick={(e)=>{handleProductData(e,product)}} className="mt-3 flex items-center justify-center gap-1 bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 transition-colors text-sm w-full">
                      <span>+</span>
                      <span>Add to Cart</span>
                  </button>
              </div>
          </div>
    </>
  )
};

export default ProductCard;