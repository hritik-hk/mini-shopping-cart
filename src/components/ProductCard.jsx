import StarRatings from "react-star-ratings";

export default function ProductCard() {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* category, title ,price & add to cart button */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{`women's clothing`}</div>
        <h2 className="font-semibold mb-1">Rain Jacket Women Windbreaker</h2>
        <StarRatings
          rating={3.5}
          starRatedColor="#ea580c"
          numberOfStars={5}
          name="rating"
          starDimension='20px'
          starSpacing='1px'
        />
        <div className="flex justify-between pr-4 mt-1">
          <h2 className="font-semibbold">$ 39.99</h2>
          <button className="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
