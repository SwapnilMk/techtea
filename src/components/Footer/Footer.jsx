import { BsSendFill } from 'react-icons/bs';
import {
  AiFillFacebook,
  AiFillHome,
  AiFillInfoCircle,
  AiFillTwitterSquare
} from 'react-icons/ai';
import { FaInstagramSquare, FaShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='m-auto mt-12 flex min-h-[200px] w-full bg-black p-3 text-white'>
      <div className='container m-auto grid grid-cols-3 md:grid-cols-1 md:space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-xl font-medium'> Quick Links</h2>
          <div className='flex items-center gap-3'>
            <AiFillHome size={20} />
            <Link to='/'>
              <p>Home</p>
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <FaShareSquare size={20} />
            <Link to='/post'>
              <p>Posts</p>
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <AiFillInfoCircle size={20} />
            <Link to='/about'>
              <p>About</p>
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 space-y-2 md:items-start'>
          <h2 className='text-xl font-medium'> Subscribe</h2>
          <div className='flex w-full flex-row justify-center gap-2 md:justify-start'>
            <input
              placeholder='Your email'
              className='w-[70%] p-1 px-2 text-black'
              type='email'
            />
            <button className='border p-2'>
              <BsSendFill />
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 md:items-start'>
          <div className='space-y-2'>
            <h2 className='text-xl font-medium'> Socials</h2>
            <div className='flex items-center gap-3'>
              <AiFillFacebook size={24} />
              <p>Facebook</p>
            </div>
            <div className='flex items-center gap-3'>
              <AiFillTwitterSquare size={24} />
              <p>Twitter</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaInstagramSquare size={24} />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
