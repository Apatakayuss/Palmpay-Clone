
import {AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane, FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-300 py-[50px]">
    <div className="flex justify-center flex-wrap gap-10 w-[80%] mx-auto">
        <div className="flex-1">
            <h3 className="text-xl mb-[25px]">Contact us</h3 >
            <p className='mb-6'>Email:</p>
            <p className='mb-6'>support@palmpay.com</p>
            <p className='mb-6'>Phone: <a className='text-blue-500' href={'tel:${018886888}'}>018886888</a></p>

            <div className='flex gap-2'>
                <div className='bg-white rounded-full flex items-center p-[8px]'><FaFacebookF size={30} className='text-purple-500 font-extrabold'/></div>
                <div className='bg-white rounded-full flex items-center p-[8px]'><AiFillInstagram size={30} className='text-purple-500'/></div>
                <div className='bg-white rounded-full flex items-center p-[8px]'><AiOutlineTwitter size={30} className='text-purple-500'/> </div>
                <div className='bg-white rounded-full flex items-center p-[8px]'><FaTelegramPlane size={30} className='text-purple-500'/> </div>
            </div>
        </div>
        <div className="flex-1 pl-6">
            <h3 className="text-xl mb-[25px]">Personal</h3 >
            <p>Palmpay App</p>
        </div>
        <div className="flex-1 pl-6">
            <h3 className="text-xl mb-[25px]">Agents</h3 >
            <p className='mb-6'>POS</p>
            <p>Apply Now</p>
        </div>
        <div className="flex-1 pl-6">
            <h3 className="text-xl mb-[25px]">Company</h3 >
            <p className='mb-6'>About Us</p>
            <p className='mb-6'>Career</p>
            <p className='mb-6'>Blog</p>
            <p>Press</p>
        </div>
        <div className="flex-1 pl-6">
            <h3 className="text-xl mb-[25px]">Legal</h3 >
            <p className='mb-6'>Privacy & Cookie Policy</p>
            <p>Terms & Conditions</p>
        </div>
        </div>
        </div>
  )
}

export default Footer