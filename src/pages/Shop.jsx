import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

 const Shop = () => {
     const products = useSelector(state => state.product.products);
    return(
       <>
            {/* <h1 className="text-center text-5xl font-light my-16">All Products</h1> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 mt-4">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div> 
       
       </>
    )

};

export default Shop;