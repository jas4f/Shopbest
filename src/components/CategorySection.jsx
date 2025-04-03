import ChildrenShop from '../assets/Images/ChildrenShop.jpg'
import ManShop from '../assets/Images/ManShop.jpg'
import WomenShop from '../assets/Images/WomenShop.jpg'

 const categories = [
    {
        title : 'children',
        imageUrl : ChildrenShop,
        altvalue : 'childer image'
    },
    {
        title : 'Man',
        imageUrl : ManShop,
        altvalue : 'Man image'
    },
    {
        title : 'Women',
        imageUrl : WomenShop,
        altvalue : 'women image'
    }
 ];

 const CategorySection = () => {
  return(
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
    {categories.map((category,index)=>{
        return <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-3'>
            <img src={category.imageUrl} alt={category.altvalue} className='w-full h-full object-cover rounded-lg shadow-md' />
            <div className='absolute top-20 left-12'>
                <h3 className='text-xl font-bold'>{category.title}</h3>
                <p className='text-gray-600'>View All</p>
            </div>
        </div>
    })}
    </div>
  )
};

export default CategorySection;