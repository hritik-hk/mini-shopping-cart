import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { increment,decrement,removeFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";


const CartItem = ({ item }) => {
  
  // destructure item
  const { id,title, image, price, quantity } = item;

  const dispatch=useDispatch();

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <img className="max-w-[80px]" src={image} alt="" />
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <p className="text-sm uppercase font-medium max-w-[240px] text-primary">
              {title}
            </p>
            {/* remove icon */}
            <div
              onClick={() => dispatch(removeFromCart(id))}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={()=>dispatch(decrement(id))} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {quantity}
              </div>
              <div onClick={()=>dispatch(increment(id))} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * quantity
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;