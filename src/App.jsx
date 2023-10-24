import "./App.css";
import ProductCard from "./components/ProductCard";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <h1 className="font-semibold text-xl border-b py-4">New Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default App;
