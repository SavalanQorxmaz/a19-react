import { useDispatch } from "react-redux";
import { scrollYPosition } from "./features/slices/scrollSlice";
import Home from "./pages/Home";
import { useEffect } from "react";
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(scrollYPosition(document.documentElement.scrollTop))
  },[])
  const scrollPositionF =()=>{
    
    dispatch(scrollYPosition(document.documentElement.scrollTop))
      
  
  }
   useEffect(()=>{
  
    window.addEventListener('scroll', scrollPositionF,{passive:true})

    return ()=> window.removeEventListener('scroll', scrollPositionF)

   },[document.documentElement.scrollTop]) 
  return (
  <>
  <Home/>
  
  </>
  );
}

export default App;
