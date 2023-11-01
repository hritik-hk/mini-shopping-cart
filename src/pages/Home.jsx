import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { Bars } from "react-loader-spinner";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.products);
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <h1 className="font-semibold text-3xl border-b py-10 text-center">New Products</h1>
        <div className="p-10">
          {productList.length==0 ? (
            <div className="flex justify-center items-center w-full">
              <Bars
                height="100"
                width="100"
                color="#f57242"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {productList.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                />
              )
            })}
            </div>
          )}
        </div>
        </div>
    </>
  );
}

export default Home;
