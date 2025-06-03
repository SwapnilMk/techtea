import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { techteaLogo } from '../../assets';
import { BiSearch } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Navbar = ({ handleSearch }) => {
  Navbar.propTypes = {
    handleSearch: PropTypes.func.isRequired
  };

  const navigation = useNavigate();
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth && auth.data) {
      setLoginUser(auth.data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setLoginUser(null);
    toast.success('Logout successfully', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    navigation('/login');
  };

  return (
    <>
      <div className='fixed top-0 z-10 m-auto w-full bg-white shadow-sm'>
        <div className='container m-auto flex h-[85px] items-center py-1 md:h-[65px]'>
          <div className='left flex w-full flex-1 items-center justify-start'>
            <div className='flex h-[60px] w-full items-center justify-start overflow-hidden'>
              <Link to='/' className='flex items-center gap-2'>
                <img
                  className='h-[110px] w-[110px] object-contain'
                  src={techteaLogo}
                  alt='logo'
                />
              </Link>
            </div>
          </div>
          <div className='center flex w-full flex-[5] items-center justify-center px-1'>
            <div className='flex w-[50%] items-center gap-1 rounded-md border border-gray-800 p-1 px-2 md:w-full'>
              <BiSearch className='text-2xl text-gray-800' />
              <input
                className='h-full w-full bg-transparent text-black placeholder:text-gray-700'
                type='search'
                placeholder='Search here...'
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className='right flex-1'>
            <div className='center flex flex-1 items-center justify-end'>
              <div className='flex items-center gap-3'>
                {loginUser ? (
                  <div title='profile' className='group relative'>
                    <button className='flex items-center gap-2 md:gap-0'>
                      <img
                        loading='lazy'
                        title={loginUser.username}
                        alt='photos'
                        className='h-8 w-8 rounded-full border border-gray-500 object-cover'
                        src={
                          loginUser && loginUser && loginUser.profilePic
                            ? loginUser.profilePic
                            : 'https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png'
                        }
                      />

                      {loginUser && loginUser && loginUser.username ? (
                        <p className='font-medium text-gray-800 md:hidden'>
                          {loginUser.username}
                        </p>
                      ) : (
                        <p className='font-medium text-gray-800'>Guest</p>
                      )}
                      <MdArrowDropDown
                        className='text-gray-800 md:hidden'
                        size={25}
                      />
                    </button>
                    <nav
                      tabIndex='0'
                      className='invisible absolute right-2 top-full w-fit rounded border border-gray-300 bg-white opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100'
                    >
                      <ul className='space-y-3 py-1'>
                        <li className='w-full px-2'>
                          <Link
                            className='p-2 font-semibold text-gray-800'
                            title='profile'
                            to='/DetailsPage'
                          >
                            Profile
                          </Link>
                        </li>
                        <li className='w-full px-2'>
                          <Link
                            className='p-2 font-semibold text-gray-800'
                            title='logout'
                            to='/login'
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : (
                  <Link className='p-2 font-semibold' title='login' to='/login'>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
