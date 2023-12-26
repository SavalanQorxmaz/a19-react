import logo from '../assets/svg/Logo.svg'
import instagram from '../assets/svg/instagram.svg';
import whatsapp from '../assets/svg/whatsapp.svg';
import telegram from '../assets/svg/telegram.svg';
import youtube from '../assets/svg/youtube.svg';
import mail from '../assets/svg/mail.svg';
import phone from '../assets/svg/phone.svg'
import { useSelector, useDispatch } from "react-redux"
import { selectScrollPosition,selectScrollHeight } from "../features/slices/scrollSlice"
import { selectScreenHeight } from "../features/slices/screenSlice"
import { activeSection } from "../features/slices/activeSectionSlice"
import { useEffect, useRef } from "react"
const Footer = () => {

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
    <footer ref={sectionRef} id='footer' className='flex items-end p-3 pt-12'>
        <div className='container px-3 grid grid-cols-12  gap-4 mobile:flex mobile:flex-col'>
            <div className='desktop:row-span-2 desktop:col-start-1 desktop:col-span-3 tablet:row-start-3 tablet:col-start-1  flex justify-center items-center'>
                <img src={logo} alt="logo" />
            </div>
            <div className='desktop:row-span-2 desktop:col-start-4 desktop:col-span-3 tablet:row-start-1 tablet:col-start-1 tablet:row-span-2 tablet:col-span-4'>
                <h3 className='text-xl mb-2'>Şirkət</h3>
                <ul className=''>
                    <li>
                    Məhsullar
                    </li>
                    <li>
                    Haqqımızda
                    </li>
                    <li>
                    Xəbərlər
                    </li>
                </ul>
            </div>
            <div className='desktop:row-span-2 desktop:col-start-7 desktop:col-span-3 tablet:row-start-1 tablet:col-start-5 tablet:row-span-2 tablet:col-span-4'>
                <h3 className='text-xl  mb-2'>Müştərilər üçün</h3>
                <ul className=' '>
                    <li>Satış məntəqələrimiz</li>
                    <li>Çatdırılma və ödəniş</li>
                </ul>
            </div>

            <div className='desktop:row-start-1 desktop:col-start-10 desktop:col-span-3 tablet:row-start-1 tablet:col-start-9 tablet:row-span-1 tablet:col-span-4'>
                <h3 className='text-xl  mb-2'>Bizimlə qalın</h3>
                <ul className='flex  [&>*]:m-1'>
                    <li><img src={whatsapp} alt="whatsapp" /></li>
                    <li><img src={telegram} alt="telegram" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={youtube} alt="youtube" /></li>
                </ul>
            </div>

            <div className=' desktop:row-start-2 desktop:col-start-10 desktop:col-span-3 tablet:row-start-2 tablet:col-start-9 tablet:row-span-1 tablet:col-span-4'>
                <h3 className='text-xl  mb-2'>Əlaqə</h3>
                <ul className=' '>
                    <li className='flex'>
                        <img src={phone} alt="phone" />
                        <span className='ml-2'>+994998191944</span>
                        
                    </li>
                    <li className='flex'>
                        <img src={mail} alt="mail" />
                        <span className='ml-2'>a19technologies@gmail.com</span>
                    </li>
                </ul>
            </div>

            <div className='row-start-3 col-span-12 tablet:row-start-3 tablet:col-start-2'>
                <ul className=' text-center'>
                    <li>Made in Azerbaijan</li>
                    <li>Since 2023</li>
                </ul>
            </div>

         

        </div>
    </footer>
  )
}

export default Footer