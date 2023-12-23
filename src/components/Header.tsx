import logo from '../assets/svg/Logo.svg'

const Header = () => {
  return (
    <div className='header-background flex items-center'>
        <div className='container px-3  h-full flex items-center justify-between'>
        <img className='h-3/4' src={logo} alt="" />
        <ul className='flex [&>*]:ml-8 mobile:hidden [&>*]:cursor-pointer'>
            <li>Haqqımızda</li>
            <li>Xəbərlər</li>
            <li>Məhsullar</li>
            <li>Əlaqə</li>
            <li>AZE</li>
        </ul>
        <span className='text-2xl font-bold tablet:hidden desktop:hidden cursor-pointer'>&#x2630;</span>
        </div>
    </div>
  )
}

export default Header