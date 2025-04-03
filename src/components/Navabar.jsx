 import { Link, NavLink } from "react-router-dom";

 const Navbar = () => {
  return(
    <>
    <nav className="bg=white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg-px-24 py-4 flex justify-between items-center">
            <div className="text-lg font-bold">
                      <Link to='/'>ShopBest</Link>
            </div>
        <div className="relative flex-1 mx-4">
            <form>
                <input className='border py-2 px-4 w-full'type="text" placeholder="Type object name or word to Search" />
            </form>
        </div>
        <div className="flex items-center space-x-4">
                      <NavLink to='/Cart'>Cart</NavLink>
            <button className="hidden md:block">
                <Link to='/Signup'>
                    Register
                </Link>
            </button>
            <button className="block md:hidden">
                User
            </button>
        </div>
       </div>
       <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold gap-10">
                  <NavLink to='/'className="font-mono font-light text-2xl hover:underline text-gray-600">
        Home
                  </NavLink>
                  <NavLink to='/Shop'className="font-mono font-light text-2xl hover:underline text-gray-600">
        Shop
                  </NavLink>
                  <NavLink to='/Contact' className="font-mono font-light text-2xl hover:underline text-gray-600">
        Contact
                  </NavLink>
       </div>
    </nav>
    </>
  )
};

export default Navbar;