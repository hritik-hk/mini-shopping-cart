import { IoMdArrowForward } from "react-icons/io";
import { getCartTotal ,toggleOpen} from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CartSidebar = () => {

  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.items);
  const totalAmount=useSelector(state=>state.cart.totalAmount);
  const totalQuantity=useSelector(state=>state.cart.totalQuantity);
  const isOpen=useSelector(state=>state.cart.isOpen);

  useEffect(()=>{
    dispatch(getCartTotal());
  },[cart])



  return (
    <div
      className={`${
        isOpen ? "right-0" : "right-full"
      } " w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({totalQuantity})
        </div>
        <div
          onClick={()=>dispatch(toggleOpen())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.length==0? <p className="text-2xl text-gray-400 text-center">{`your cart is empty :(`}</p> :cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {totalAmount}
          </div>
        </div>
        <p className="bg-black flex p-3 justify-center items-center text-white w-full font-medium">
          Checkout
        </p>
      </div>
    </div>
  );
};

export default CartSidebar;
