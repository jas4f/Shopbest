import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/cartSlice";
import { FaTrashArrowUp } from "react-icons/fa6";
import { removetoCart } from "../redux/cartSlice";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigator = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const grandtotalPrice = useSelector((state)=> state.cart.totalPrice);
 
  const [isModelOpen,setIsModelOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {/* {
        products.map((product, index) => {
          return <div key={index}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
          </div>
        })
      } */}
    {products.length > 0 ? 
      <div className="flex-row">
      <div className="flex justify-around mt-12 flex-col md:flex-row">
       <div>
        {
          products.map((product,index)=>{
            return <div>
          <p className="cursor-pointer float-end text-red-500 pr-3" onClick={()=>{dispatch(removetoCart(product.id))}}>X</p>
            <div key={index} className="flex gap-10 md:gap-50  flex-col md:flex-row text-xl  m-2 mt-7 p-5 shadow-md">
              <div>
                <img className='w-fit md:w-12 md:h-12' src={product.image} alt="product image" />
                <h2 className="text-xl hidden md:inline">{product.name}</h2>
              </div>

              <div className="flex gap-5 md:gap-20  flex-col md:flex-row">
                <h2 className="text-3xl inline md:hidden text-blue-950">{product.name}</h2>
                <p className="text-2xl text-gray-500">${(product.price * product.quantity).toFixed(2)}</p>
                <div className="flex gap-1 ">
                  <span onClick={() => { dispatch(decreaseQuantity(product.id)) }} className="cursor-pointer  bg-gray-100 hover:bg-gray-200 rounded-xl px-2">-</span>
                  {/* <p>{product.quantity}</p> */}
                  <input type="text" value={product.quantity} className="w-30 text-center bg-gray-100 " />
                  <span onClick={() => { dispatch(increaseQuantity(product.id)) }} className="cursor-pointer  bg-gray-100 hover:bg-gray-200 rounded-2xl px-2">+</span>
                </div>
              </div>
            </div>
            </div>
          })
        }
      </div>
      <div className="h-screen">
       <div className=" p-12 m-auto  mt-12 text-xl md:p-12 sm:px-15 flex flex-col gap-12 shadow-xl">
          <h2>CART TOTALS</h2>
          <div className="flex justify-between">
                  <h3>Total Items</h3>
                  <h3>{quantity}</h3>
          </div>
          <div className="">
                  <h4 className="text-xl">Shipping</h4>
                  <h4 className="text-sm font-bold py-2">Shipping to main street, 0012</h4>
                  <h4 className="text-sm text-red-400 font-bold py-1" onClick={()=>setIsModelOpen(true)}>change address</h4>
          </div>
          
          {/* <Link>Change Address</Link> */}
          <div className="">
            <h3>Total Price</h3>
            <h3 className="text-3xl ">${(grandtotalPrice).toFixed(2)}</h3>
          </div>
                <Link to='/Checkout'><button ocClick={()=>{navigator('/Checkout')}}className="p-3 sm:text-md bg-red-700 text-white lg:w-100 md:w-60">Checkout</button></Link>
       </div>
      </div>
            <Modal
              isModelopen={isModelOpen}
              setIsModelOpen={setIsModelOpen}
            ></Modal>
      </div>
    </div>
    : <div>
          No items
      </div>
    }
    </>
  )

};

export default Cart;