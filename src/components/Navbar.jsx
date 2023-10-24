import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { BsBag } from "react-icons/bs";

const Header = () => {
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
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-[100px]">
            <img src={Logo} alt="" />
          </div>

        {/* cart */}
        <div
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-3xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {`4`}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
