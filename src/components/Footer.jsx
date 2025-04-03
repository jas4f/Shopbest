import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
 const Footer = () => {
 return(
    <>
         <div className="flex items-center justify-evenly bg-gray-500 text-white mt-12 p-4 py-15">
        
        <div className="">
            <h3 className="font-bold text-2xl">ShopBest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odio nihil voluptas blanditiis expedita repellat excepturi 
            </p>
        </div>
        <div>
            <h4 className="font-bold text-2xl text-">Quick Links</h4>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/Shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
            </ul>
        </div>
        <div>
                 <h4 className="font-bold text-2xl text-gray-300">Follow us</h4>
            <div className="flex gap-3">
                <a href=""><FaFacebook /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
            </div>
            <form action="">
                <input  type="email" name="email" id="email_1" />
                 <button>Subscribe</button>
            </form>
        </div>
    </div>
    </>
 )
};

export default Footer;