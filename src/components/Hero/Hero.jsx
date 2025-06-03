import { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const imgs = [
  'https://ik.imagekit.io/imgkitt/lukas-blazek-GnvurwJsKaY-unsplash%20(2).jpg?updatedAt=1693388077367',
  'https://ik.imagekit.io/imgkitt/pexels-burst-373892.jpg?updatedAt=1693387983093'
];

const Hero = () => {
  const randomImgSrc = imgs[Math.floor(Math.random() * imgs.length)];
  const [authDetails, setAuthDetails] = useState(null);
  const auth = JSON.parse(localStorage.getItem('auth'));
  // console.log('ok');
  useEffect(() => {
    if (auth && auth.data && auth.data.others && !authDetails) {
      setAuthDetails(auth.data.others);
    }
  }, [auth, authDetails]); // Include 'authDetails' as a dependency

  return (
    <div className='relative h-[100vh] w-full overflow-hidden bg-gray-400 md:h-[650px]'>
      <LazyLoad height={800} offsetVertical={500}>
        <img
          loading='lazy'
          className='h-[100vh] w-full object-cover md:h-[800px]'
          src={randomImgSrc}
          alt='img'
        />
      </LazyLoad>
      <div className='absolute left-[50%] top-[50%] flex w-[90%] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-5 text-center text-[#202020]'>
        <div className='flex h-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-white px-2 py-8 backdrop-blur-md'>
          <div>
            {authDetails && (
              <h2 className='text-3xl font-semibold text-white'>
                Hi {authDetails && authDetails.username} ! 👋
              </h2>
            )}

            <h2 className='text-6xl font-semibold text-black md:text-4xl'>
              Welcome To Techtea
            </h2>
          </div>

          <p className='w-[40%] text-center text-[1.4rem] text-black md:w-full md:text-[1.23rem]'>
            &ldquo; Awesome place to make oneself productive and entertained
            through daily updates. &rdquo;
          </p>
          <Link
            to='/post'
            className='flex w-fit items-center justify-center gap-2 rounded-3xl bg-white p-3 hover:bg-gray-100'
          >
            <BsFillPlusCircleFill size={25} />
            <p className='font-semibold'>Create Post</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
