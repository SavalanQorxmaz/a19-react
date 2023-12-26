import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "./sections/About"
import News from "./sections/News"
import Products from "./sections/Products"
import Contact from "./sections/Contact"

const Home = () => {


  return (
   <>
   <Header/>
   <main className="">
  <About/>
  <News/>
  <Products/>
  <Contact/>

   </main>
   <Footer/>
   </>
  )
}

export default Home