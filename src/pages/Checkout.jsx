import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Checkout = () => {

  const navigator = useNavigate();

  const [open,setOpen] = useState({
    shipping: false,
    billing : true,
    payment : false
  })

  const cartItems = useSelector(state=>state.cart);

  const handleOpener = (section) => {
  setOpen(prev => ({
    ...prev,
    [section]: !prev[section]
  }));
};

const handlePlaceOrder = ()=>{
  navigator('/');
}
  return(
    <>
    <div>
        <h3>Checkout</h3>
        <div>
            <div>
                 <div onClick={()=> handleOpener('billing')}>
                  <h2>Billing information <span></span></h2>
                  {open.billing && 
                  <div className="hidden">
                    <label>Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="email" name="email" id="emailid" />
                    <label>Phone</label>
                    <input type="number" name="number" id="PhoneNo" />
                  </div>
                  }
                  
                 </div>
            </div>
            <div>
              <div onClick={()=> handleOpener('shipping')}>
                <h2>Shipping Information</h2>
                {open.shipping && <div>
                    <label>Address</label>
                    <input type="text" />
                    <label>City</label>
                    <input type="email" name="email" id="emailid" />
                    <label>Zip code</label>
                    <input type="number" name="number" id="PhoneNo" />
                </div>}
            </div>
            </div>
            <div onClick={()=>handleOpener('payment')}>
               <h2>Payment Method</h2>
               {open.payment && <div>
                   <select name="PaymentMethod" id="methodForPayment">
                    <option value="CASHONDELIVERY">Cash on Delivery</option>
                    <option value="ONLINEPAYMENT">Debit Card</option>
                   </select>
               </div>}
               
            </div>
        </div>
        <div>
          <h2>Order Summary</h2>
        <ul>
         {cartItems.map((item,index)=>{
         return <li key={index}>
         <div>
         <img src={item.img} alt="" />
         <p>{item.name}</p>
         <p>{item.price}</p>
         <p>X</p>
         <p>{item.quantity}</p>
         </div>
         <div>
         <h4>{item.subTotal}</h4>
         </div>
         </li>
         })}
        </ul>

        <button onClick={handlePlaceOrder}>
          Place Order
        </button>
        </div>
    </div>
    </>
  )
};
