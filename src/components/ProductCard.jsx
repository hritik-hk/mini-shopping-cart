import StarRatings from "react-star-ratings"
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({item}) {

  const {id,title,price,category,image,rating}=item;

  const cartItem={
    id:id,
    title:title,
    price:price,
    image:image,
    quantity:1
  }

  const dispatch=useDispatch();

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* category, title ,price & add to cart button */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <h2 className="font-semibold mb-1">{title.substring(0,29)}</h2>
        <StarRatings
          rating={rating.rate}
          starRatedColor="#ea580c"
          numberOfStars={5}
          name="rating"
          starDimension='20px'
          starSpacing='1px'
        /><span>({rating.count})</span>
        <div className="flex justify-between pr-4 mt-1">
          <h2 className="font-semibbold">$ {price}</h2>
          <button 
          onClick={()=>dispatch(addToCart(cartItem))}
          className="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
