import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterImage } from '../../assets';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import { APIURL } from '../../utlis/api';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  //form submit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${APIURL}/api/auth/register`, {
        username,
        email,
        password
      });
      toast.success('Register successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
      res.data && navigation('/login');
      // console.log(res);
    } catch (error) {
      toast.error('Something went wrong', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
      console.log(error);
    }
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-100'>
      {/* auth card */}
      <div className='flex h-[550px] w-[50rem] overflow-hidden rounded-xl bg-white shadow-lg md:h-[100%] md:flex-col'>
        {/* left */}
        <div className='flex flex-1 items-center justify-center'>
          <div className='flex flex-col gap-7'>
            <h3 className='text-4xl font-semibold'>Sign up</h3>
            <form
              onSubmit={handleSubmit}
              action='submit'
              className='flex flex-col gap-6'
            >
              <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                <FaUserAlt />
                <input
                  required
                  type='text'
                  name='userName'
                  placeholder='User Name'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                <MdEmail />
                <input
                  required
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex items-center space-x-4 border-b-[1px] border-black py-2'>
                <FaLock />
                <input
                  required
                  type='password'
                  name='last-name'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='w-fit rounded-md bg-black px-4 py-2 text-base text-white'
              >
                Register
              </button>
            </form>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-1 items-center justify-center'>
          <div className='flex w-[250px] flex-col items-center justify-between gap-5 md:flex-col-reverse'>
            <img loading='lazy' src={RegisterImage} alt='' />
            <Link className='underline' to='/login'>
              I&apos;m already member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
