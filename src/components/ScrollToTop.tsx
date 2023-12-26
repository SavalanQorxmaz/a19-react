import { useSelector } from "react-redux"
import { selectScrollPosition } from "../features/slices/scrollSlice"

const ScrollToTop = () => {

    const selectedScrollPosition = useSelector(selectScrollPosition)

    const backToTopF = ()=>{
        document.documentElement.scrollTo(0,0)
    }

  return (
    <span onClick={backToTopF}   className={selectedScrollPosition > window.innerHeight / 2 ? "fixed bottom-12 right-12 z-10 scale-x-150 opacity-30 font-extrabold text-4xl cursor-pointer transition-all" : 'fixed -bottom-8 right-12 z-10  font-extrabold text-xl cursor-pointer transition-all'}> &#x2B9D; </span>
  )
}

export default ScrollToTop