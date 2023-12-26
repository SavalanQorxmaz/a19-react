import { useDispatch } from "react-redux";
import { scrollYPosition,scrollHeight } from "./features/slices/scrollSlice";
import { screenMode, screenHeight } from "./features/slices/screenSlice";
import { activeSection,selectActiveSection } from "./features/slices/activeSectionSlice";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {

  const dispatch = useDispatch()


//  Ekran olcusu deyismelerini izlemek ucun

  useEffect(()=>{
    dispatch(screenMode(window.innerWidth))
    
    dispatch(screenHeight(window.innerHeight))
  },[])

  const screenModeF = ()=>{
    dispatch(screenMode(window.innerWidth))
    dispatch(screenHeight(window.innerHeight))
  }

  useEffect(()=>{
    window.addEventListener('resize', screenModeF)

    return ()=> window.removeEventListener('resize', screenModeF)
   
  },[window.innerWidth,window.innerHeight])

// scroll izlemek ucun

  useEffect(()=>{
    dispatch(scrollYPosition(document.documentElement.scrollTop))
    dispatch(scrollHeight(document.documentElement.scrollHeight))
  },[])

  const scrollPositionF =()=>{
    
    dispatch(scrollYPosition(document.documentElement.scrollTop))
    dispatch(scrollHeight(document.documentElement.scrollHeight))
  
  }
   useEffect(()=>{
  
    window.addEventListener('scroll', scrollPositionF,{passive:true})

    return ()=> window.removeEventListener('scroll', scrollPositionF)

   },[document.documentElement.scrollTop]) 
  return (
  <BrowserRouter>
  <Home/>
  <ScrollToTop/>
  </BrowserRouter>
  );
}

export default App;
