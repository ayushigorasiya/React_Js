import Banner from "./Components/Banner/Banner"
import Blog from "./Components/Blog/Blog"
import Categories from "./Components/Categories/Categories"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Healthy from "./Components/Healthy/Healthy"
import News from "./Components/News/News"
import Popular from "./Components/Popular/Popular"

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Popular/>
      <Healthy/>
      <Blog/>
      <News/>
      <Footer/>
      
    </>
  )
}

export default App
