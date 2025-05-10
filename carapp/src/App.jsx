import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import SearchSection from "./Components/SearchSection";
import FeaturedCars from "./Components/FeaturedCars";
import PopularBrands from "./Components/PopularBrands";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <br /><br /><br />
      <SearchSection />
      <br /><br /><br />
      <FeaturedCars />
      <PopularBrands />
      <Footer />
    </>
  );
}
export default App;
