import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { BsBag } from "react-icons/bs";
import {toggleOpen} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const dispatch=useDispatch();
  const totalQuantity=useSelector((state=>state.cart.totalQuantity));

  // header state
  const [isActive, setIsActive] = useState(false);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } px-4 fixed w-full z-10 md:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-[100px]">
            <img src={Logo} alt="" />
          </div>

        {/* cart */}
        <div
          className="cursor-pointer flex relative"
        >
          <BsBag
          onClick={()=>dispatch(toggleOpen())}
           className="text-3xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {totalQuantity}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
