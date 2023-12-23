import { useState } from 'react'
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

  return (
    <div className='header-background flex items-center'>
        <div className='container px-3  h-full flex items-center justify-between'>
        <img className='h-3/4' src={logo} alt="" />
      <div className='mobile:hidden'><Nav mobileMenu = {false}/></div>
        <span onClick={()=>setMobileHeaderShow(true)} className='text-2xl font-bold tablet:hidden desktop:hidden cursor-pointer'>&#x2630;</span>
        </div>

       {
        mobileHeaderShow ?
        <div className='bg-opacity  fixed top-0 left-0 w-full h-full tablet:hidden desktop:hidden '>

          <div className=' flex items-center justify-end p-5'>
            <span onClick={()=>setMobileHeaderShow(false)} className='cursor-pointer text-3xl'>&#x2718;</span>
          </div>
          <Nav mobileMenu = {true}/>

        </div>
        :
        null
       }
    </div>
  )
}

export default Header