import logo from '../assets/svg/Logo.svg'
import instagram from '../assets/svg/instagram.svg';
import whatsapp from '../assets/svg/whatsapp.svg';
import telegram from '../assets/svg/telegram.svg';
import youtube from '../assets/svg/youtube.svg';
import mail from '../assets/svg/mail.svg';
import phone from '../assets/svg/phone.svg'
const Footer = () => {
  return (
    <footer className='flex items-end p-3'>
        <div className='container px-3 grid grid-cols-4 mobile:grid-cols-2 gap-4 '>
            <div className='row-span-2 mobile:row-start-3 mobile:col-start-1 flex justify-center items-center'>
                <img src={logo} alt="logo" />
            </div>
            <div className='mobile:row-start-1 mobile:col-start-1'>
                <h3 className='text-xl text-center mb-2'>Şirkət</h3>
                <ul className=' text-center'>
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
            <div className='mobile:row-start-1 mobile:col-start-2'>
                <h3 className='text-xl text-center mb-2'>Müştərilər üçün</h3>
                <ul className=' text-center'>
                    <li>Satış məntəqələrimiz</li>
                    <li>Çatdırılma və ödəniş</li>
                </ul>
            </div>

            <div className='mobile:row-start-2 mobile:col-start-2'>
                <h3 className='text-xl text-center mb-2'>Bizimlə qalın</h3>
                <ul className='flex justify-center [&>*]:m-1'>
                    <li><img src={whatsapp} alt="whatsapp" /></li>
                    <li><img src={telegram} alt="telegram" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={youtube} alt="youtube" /></li>
                </ul>
            </div>

            <div className='row-start-2 col-start-4 mobile:col-start-1'>
                <h3 className='text-xl text-center mb-2'>Əlaqə</h3>
                <ul className=' text-center'>
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

            <div className='row-start-3 col-span-4 mobile:row-start-3 mobile:col-start-2'>
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