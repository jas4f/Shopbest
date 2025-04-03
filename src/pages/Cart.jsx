import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/cartSlice";
import { FaTrashArrowUp } from "react-icons/fa6";
import { removetoCart } from "../redux/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const grandtotalPrice = useSelector((state)=> state.cart.totalPrice);

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
      <div className="flex justify-around mt-12">
       <div>
        <div>
          <div className="flex sm:gap-25 justify-between sm:text-xl text-2xl font-light">
              <p>products</p>
              <div className="flex gap-12">
                <p>price</p>
                <p>Quanities</p>
                <p>Subtotal Price</p>
                <p>remove</p>
              </div>
          </div>
        </div>
        {
          products.map((product,index)=>{
            return <div key={index} className="flex gap-50 text-xl items-center m-2 mt-7 p-5 shadow-md">
              <div>
                <img className='w-12 h-12' src={product.image} alt="product image" />
                <h2 className="text-xl">{product.name}</h2>
              </div>

              <div className="flex gap-20">
                <p>{product.price}</p>
                <div className="flex gap-5 border-1">
                  <span onClick={() => { dispatch(decreaseQuantity(product.id)) }} className="cursor-pointer border-r-1 px-1 bg-gray-100 hover:bg-gray-200">-</span>
                  <p>{product.quantity}</p>
                  <span onClick={() => { dispatch(increaseQuantity(product.id)) }} className="cursor-pointer border-l-1 px-1 bg-gray-100 hover:bg-gray-200">+</span>
                </div>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
                <p className="cursor-pointer text-red-500" onClick={()=>{dispatch(removetoCart(product.id))}}><FaTrashArrowUp /></p>
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
                  <h4 className="text-sm text-red-400 font-bold py-1">change address</h4>
          </div>
          
          {/* <Link>Change Address</Link> */}
          <div className="">
            <h3>Total Price</h3>
            <h3 className="text-3xl ">${(grandtotalPrice).toFixed(2)}</h3>
          </div>
          <button className="p-3 sm:text-md bg-red-700 text-white lg:w-100 md:w-60">Checkout</button>
       </div>
      </div>
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