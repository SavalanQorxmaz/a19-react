import { useDispatch } from "react-redux";
import { scrollYPosition } from "./features/slices/scrollSlice";
import { screenMode } from "./features/slices/screenSlice";
import Home from "./pages/Home";
import { useEffect } from "react";
function App() {

  const dispatch = useDispatch()


   // window.addEventListener('resize', () => {
  //   console.log(window.innerWidth)
  // })

  useEffect(()=>{
    dispatch(screenMode(window.innerWidth))
  },[])

  const screenModeF = ()=>{
    dispatch(screenMode(window.innerWidth))
  }

  useEffect(()=>{
    window.addEventListener('resize', screenModeF)

    return ()=> window.removeEventListener('resize', screenModeF)
   
  },[window.innerWidth])



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
