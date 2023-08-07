import Logo from '../assets/logo.png'
import Naija from '../assets/naija.png'
import {BiCaretDown} from 'react-icons/bi'
const Navigation = () => {
  return (
    <div className=" w-screen bg-yellow-200 items-center h-[90px] flex justify-around">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className='flex gap-10 items-center'>
          <li className='list-none flex gap-[2px]'>Personal <BiCaretDown className='flex my-auto'/></li>
          <li className='list-none'>Agents</li>
          <li className='list-none flex gap-[2px]'>Company<BiCaretDown className='flex my-auto'/></li>
          <li className='list-none'>Press</li>
          <li className='list-none flex gap-[2px]'><div className='flex items-center gap-[2px]'><img src={Naija} alt="gg" className='h-[50%]'/> <BiCaretDown className='flex my-auto'/></div></li>
        </div>
    </div>
  )
}

export default Navigation