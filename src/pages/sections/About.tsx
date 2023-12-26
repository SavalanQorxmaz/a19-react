import { useSelector, useDispatch } from "react-redux"
import { selectScrollPosition,selectScrollHeight } from "../../features/slices/scrollSlice"
import { selectScreenHeight } from "../../features/slices/screenSlice"
import { activeSection } from "../../features/slices/activeSectionSlice"
import { useEffect, useRef } from "react"

const About = () => {

  const dispatch = useDispatch()
  
  const selectedScrollPosition = useSelector(selectScrollPosition)
  const selectedScrollHeight = useSelector(selectScrollHeight)
  const selectedScreenHeight = useSelector(selectScreenHeight)
  const sectionRef = useRef<HTMLElement>(null)

  const checkIfSectionActiveF = ()=>{
    if(sectionRef.current &&( sectionRef.current?.offsetTop < (selectedScrollPosition + selectedScreenHeight / 2)) && ( (sectionRef.current?.offsetTop + sectionRef.current?.offsetHeight) > (selectedScrollPosition + selectedScreenHeight / 2))){
      dispatch(activeSection(sectionRef.current?.id))
    }
  
      
    }
  
    useEffect(()=>{
  
     checkIfSectionActiveF()
  
    },[selectedScreenHeight,selectedScrollHeight,selectedScrollPosition])

  return (
   <section ref={sectionRef} id='about' className='bg-red-400'>


   </section>
  )
}

export default About