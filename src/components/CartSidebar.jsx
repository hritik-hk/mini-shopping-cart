import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { useState } from "react";

const CartSidebar = () => {
  let { isOpen, setIsOpen } = useState(true);
  const total = 459;

  function handleClose() {
    setIsOpen(false);
  }

  //only for for testing UI
  const cart = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      amount:3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      amount:2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      amount:1,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      amount:4,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    }
  ]

  return (
    // <div
    //   className={`${
    //     isOpen ? "right-0" : "right-full"
    //   } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    // >
    <div
      className="right-0 w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({3})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={() => console.log("clear cart")}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <p className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium">
          Checkout
        </p>
      </div>
    </div>
  );
};

export default CartSidebar;
