import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CiImageOn } from 'react-icons/ci';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APIURL } from '../../utlis/api';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('auth'));
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // handle and convert it into base64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };

  // const formSubmit = async (e) => {
  //   e.preventDefault();

  //   const newPost = {
  //     title,
  //     username: auth.data.others.username,
  //     desc,
  //   };

  //   if (photo) {
  //     newPost.photo = photo;
  //   }

  //   setIsLoading(true); // Set loading state to true

  //   try {
  //     const res = await axios.post(`${APIURL}/api/posts`, newPost);
  //     console.log(res);
  //     navigate("/");
  //     toast.success("Post Uploaded", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       autoClose: 3000,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Something went wrong", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       autoClose: 3000,
  //     });
  //   }

  //   setIsLoading(false); // Set loading state back to false after form submission
  // };

  const formSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      username: auth.data.username, // Use optional chaining to handle potential undefined or null values
      desc
    };

    if (photo) {
      newPost.photo = photo;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${APIURL}/api/posts`, newPost);
      console.log(res);
      navigate('/');
      toast.success('Post Uploaded', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className='container m-auto mt-24 w-[50%] bg-gray-100 py-4 md:w-full'>
        <div className='mb-3'>
          <h2 className='text-2xl font-medium text-gray-800'>
            Create your post
          </h2>
        </div>
        <form onSubmit={formSubmit} className='flex flex-col space-y-3'>
          <div className='img relative flex h-[350px] w-full items-center justify-center overflow-hidden bg-white'>
            {photo ? (
              <img
                loading='lazy'
                className='h-full w-full object-cover'
                src={photo}
                alt=''
              />
            ) : (
              <div className='flex flex-col items-center justify-center'>
                <p>Upload image</p>
                <p>(Size should be less than 2MB)</p>
              </div>
            )}
            <input
              type='file'
              id='fileInput'
              name='image'
              style={{ display: 'none' }}
              onChange={handleImage}
              className='flex h-10 w-10 items-center justify-center bg-black text-white'
            />
            <label
              htmlFor='fileInput'
              className='absolute bottom-0 left-0 cursor-pointer bg-black p-1 text-white'
            >
              <CiImageOn size={30} />
            </label>
          </div>
          <div>
            <p className='text-lg font-medium text-gray-800'>Title</p>
            <input
              placeholder='Post title...'
              className='w-full bg-white p-2'
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <p className='text-lg font-medium text-gray-800'>Details</p>
            <textarea
              placeholder='Post details...'
              className='w-full bg-white p-2'
              rows={3}
              type='text'
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          {/* button */}
          {auth ? (
            <button
              type='submit'
              // className="p-2 w-full font-medium text-white bg-black"
              className={`${
                isLoading
                  ? 'cursor-not-allowed bg-[rgba(0,0,0,0.5)]'
                  : 'cursor-pointer bg-gray-800'
              } w-full p-2 font-medium text-white`}
              disabled={isLoading} // Disable the button when loading is true
            >
              {isLoading ? 'Uploading...' : 'Upload Post'}{' '}
              {/* Show loading indicator or button text */}
            </button>
          ) : (
            <Link
              to='/login'
              className='w-full bg-black p-2 text-center font-medium text-white'
            >
              Please login
            </Link>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
