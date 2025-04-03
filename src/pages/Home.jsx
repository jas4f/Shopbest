import { Categories, mockData } from "../assets/nockData";
import  ImageShop  from "../assets/Images/ImageShop.jpg";
import InfoSection from "../components/infoSection";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(setProducts(mockData));
    }, [dispatch]); // Add dispatch to dependency array if using ESLint rules

    return (
        <div className="bg-white mt-2 px-4 md-px-16 lg:px-24">
            <div className="container mx-auto py-4 flex flex-col md:flex-row">
                <div className="w-full md:w-3/12">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
                    <ul className="space-y-4 bg-gray-100 p-3 border ">
                        {Categories.map((category, index) => {
                            return <li key={index} className="flex items-center text-sm font-medium pr-50">
                                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                                {category}
                            </li>
                        })}
                    </ul>
                </div>

                <div className="w-full md:w-9/12 pl-2 mt-8 md:mt-0 h-96 relative">
                    <img src={ImageShop} alt="goodImg" className="h-full w-full" />
                    <div className="absolute top-16 left-8">
                        <h2 className="mb-3 text-white font-bold text-3xl">WELCOME TO SHOP BEST</h2>
                        <p className="text-xl mt-3 text-white">5+ CATEGORIES PRODUCTS</p>
                        <button className="bg-green-600 px-8 py-3.5 text-white hover:bg-transparent hover:border  hover:text-green-500   mt-3 border-green font-bold transform transition-transform 
                    duration-300 hover:scale-103">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <InfoSection />
            <CategorySection />

            <div>
                {/* text-align: center;
                font-size: 60px;
                font-weight: lighter;
                margin: 26px 15px; */}
                <h1 className="text-center text-5xl font-light my-16">Top Products</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                    {products.slice(0, 6).map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

        
    );
};

export default Home;