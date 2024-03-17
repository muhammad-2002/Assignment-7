import Banner from "./components/Banner";
import Footer from "./components/Futter";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto body">
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
