import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {selectScrollPosition, selectScrollHeight} from '../features/slices/scrollSlice'
import { selectScreenMode,selectScreenHeight } from '../features/slices/screenSlice'
import { activeSection, selectActiveSection } from '../features/slices/activeSectionSlice'
import logo from '../assets/svg/Logo.svg'
import { Link } from 'react-router-dom'

const Nav = (props:{mobileMenu:boolean, setMobileHeaderShow:React.Dispatch<React.SetStateAction<boolean>>})=>{
  const {mobileMenu, setMobileHeaderShow} = props
  
const selectedActiveSection = useSelector(selectActiveSection)

  return (
    <>
      <ul className={mobileMenu?  'flex flex-col justify-center items-center text-3xl [&>*]:mt-8  [&>*]:cursor-pointer': 'flex [&>*]:ml-8  [&>*]:cursor-pointer' }>
            <li><a onClick={()=>setMobileHeaderShow(false)} href="#about" className={selectedActiveSection === 'about'?  'text-green-500' : ''}>Haqqımızda</a></li>
            <li><a onClick={()=>setMobileHeaderShow(false)} href="#news" className={selectedActiveSection === 'news'?  'text-green-500' : ''}>Xəbərlər</a></li>
            <li><a onClick={()=>setMobileHeaderShow(false)} href="#products" className={selectedActiveSection === 'products'?  'text-green-500' : ''}>Məhsullar</a></li>
            <li><a onClick={()=>setMobileHeaderShow(false)} href="#contact" className={selectedActiveSection === 'contact'?  'text-green-500' : ''}>Əlaqə</a></li>
            <li>AZE</li>
        </ul>
    </>
  )
}

const Header = () => {

  const [mobileHeaderShow, setMobileHeaderShow] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [scrollValueArray,setScrollValueArray] = useState<number[]>([])
  const [scrollPositionDegree,setScrollPositionDegree] = useState(0)

const selectedScrollYPosition = useSelector(selectScrollPosition)
const selectedScreenMode = useSelector(selectScreenMode)
const selectedActiveSection = useSelector(selectActiveSection)
const selectedScrollHeight = useSelector(selectScrollHeight)
const selectedScreenHeight = useSelector(selectScreenHeight)





   // SCROLL HADISESINDE HEADERIN IRELI GERI HEREKETINI TEMIN ETMEK UCUN

   useEffect(()=>{
  
    setScrollValueArray((arr:number[]):number[]=>arr.concat(selectedScrollYPosition))
      if(scrollValueArray.length>20){
        setScrollValueArray((arr:number[]):number[]=>arr.slice(1))
      }

      if(selectedScrollYPosition < 50 && !showHeader){

        setShowHeader(true)
    }
       else if((scrollValueArray[scrollValueArray.length - 1] - scrollValueArray[0]) < 5){
          setShowHeader(true)
        }
        else if((  scrollValueArray[0] - scrollValueArray[scrollValueArray.length - 1]) < 5){
          setShowHeader(false)
        }

   },[selectedScrollYPosition]) 

   useEffect(()=>{
    selectedScreenMode !== 'mobile' && setMobileHeaderShow (false)

   },[selectedScreenMode])

   useEffect(()=>{

    setScrollPositionDegree(Math.floor(selectedScrollYPosition/(selectedScrollHeight-selectedScreenHeight)*100))

   })


   



  return (
   <header>
     <div className={showHeader? 'header-background flex items-center show-header' : 'header-background flex items-center hide-header'}>
        <div className='container px-3  h-full flex items-center justify-between'>
        <img className='h-3/4' src={logo} alt="" />
      <div className='mobile:hidden'><Nav mobileMenu = {false} setMobileHeaderShow = {setMobileHeaderShow}/></div>
        <span onClick={()=>setMobileHeaderShow(true)} className=' tablet:hidden desktop:hidden cursor-pointer text-4xl font-extrabold'>&#x2630;</span>
        </div>
        {
        mobileHeaderShow ?
        <div className='bg-opacity  fixed top-0 left-0 w-full h-full tablet:hidden desktop:hidden '>

          <div className=' flex items-center justify-end p-5'>
            <span onClick={()=>setMobileHeaderShow(false)} className='cursor-pointer text-3xl font-extrabold'>&#x2718;</span>
          </div>
          <Nav mobileMenu = {true} setMobileHeaderShow = {setMobileHeaderShow}/>

        </div>
        :
        null
       }
       <div className='absolute -bottom-1 w-full bg-slate-900 h-1'>
        <div style={{left: `${scrollPositionDegree}%`}} className='absolute top-0 left-0 bottom-0 right-0 bg-slate-200'></div>
       </div>
    </div>
   </header>

    
  )
}

export default Header