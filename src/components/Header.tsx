import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {selectScrollPosition} from '../features/slices/scrollSlice'
import { selectScreenMode } from '../features/slices/screenSlice'
import logo from '../assets/svg/Logo.svg'

const Nav = (props:{mobileMenu:boolean})=>{
  const {mobileMenu} = props

  return (
    <>
      <ul className={mobileMenu?  'flex flex-col justify-center items-center text-3xl [&>*]:mt-8  [&>*]:cursor-pointer': 'flex [&>*]:ml-8  [&>*]:cursor-pointer' }>
            <li>Haqqımızda</li>
            <li>Xəbərlər</li>
            <li>Məhsullar</li>
            <li>Əlaqə</li>
            <li>AZE</li>
        </ul>
    </>
  )
}

const Header = () => {

  const [mobileHeaderShow, setMobileHeaderShow] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [scrollValueArray,setScrollValueArray] = useState<number[]>([])

const selectedScrollYPosition = useSelector(selectScrollPosition)
const selectedScreenMode = useSelector(selectScreenMode)
 
  


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



  return (
   <header>
     <div className={showHeader? 'header-background flex items-center show-header' : 'header-background flex items-center hide-header'}>
        <div className='container px-3  h-full flex items-center justify-between'>
        <img className='h-3/4' src={logo} alt="" />
      <div className='mobile:hidden'><Nav mobileMenu = {false}/></div>
        <span onClick={()=>setMobileHeaderShow(true)} className=' tablet:hidden desktop:hidden cursor-pointer text-4xl font-extrabold'>&#x2630;</span>
        </div>
        {
        mobileHeaderShow ?
        <div className='bg-opacity  fixed top-0 left-0 w-full h-full tablet:hidden desktop:hidden '>

          <div className=' flex items-center justify-end p-5'>
            <span onClick={()=>setMobileHeaderShow(false)} className='cursor-pointer text-3xl font-extrabold'>&#x2718;</span>
          </div>
          <Nav mobileMenu = {true}/>

        </div>
        :
        null
       }
    </div>
   </header>

    
  )
}

export default Header