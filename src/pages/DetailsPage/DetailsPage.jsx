import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BsSendFill } from 'react-icons/bs';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { APIURL } from '../../utlis/api';

const DetailsPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [details, setDetails] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // console.log(path);

  const auth = JSON.parse(localStorage.getItem('auth'));

  useEffect(() => {
    const getPostDetails = async () => {
      const res = await axios(`${APIURL}/api/posts/` + path);
      setDetails(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setLike(
        Array.isArray(res.data.likedBy) &&
          res.data.likedBy.includes(auth?.data?.others?._id)
      );
      setLikeCount(res.data.likeCount);
    };
    getPostDetails();
  }, [path, auth?.data?.others?._id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`${APIURL}/api/posts/` + path, {
        username: auth.data.others.username,
        title,
        desc
      });
      setUpdateMode(false);
      toast.success('Post Updated', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    } catch (error) {
      toast.error('something went wrong', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${APIURL}/api/posts/` + path, {
        data: { username: auth.data.others.username }
      });
      toast.warning('Post Deleted', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
      navigation('/');
    } catch (error) {
      toast.error('something went wrong', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }
  };

  const copyPostLink = () => {
    const postLink = `${window.location.origin}/blog-details/${path}`; // Modify this based on your route structure
    navigator.clipboard.writeText(postLink);

    toast.success('link copied to clipboard!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000
    });
  };

  useEffect(() => {
    // Update the like count when the component mounts
    setLikeCount(details.likeCount);
  }, [details.likeCount]);

  // console.log(auth?.data?.others?._id);
  // console.log(path);
  const handleLike = async () => {
    try {
      const response = await axios.put(`${APIURL}/api/posts/${path}/like`, {
        userId: auth?.data?.others?._id
      });

      if (response.status === 200) {
        setLike(true);
        setLikeCount(likeCount + 1);
        toast.success('Post Liked', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Please login', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
      });
    }
  };

  // ...

  return (
    <>
      <Navbar />
      <div className='container m-auto mt-24 w-[90%] md:w-full'>
        <div className='m-auto w-[90%] md:w-full'>
          <Link
            to='/'
            className='flex w-fit items-center gap-1 text-lg uppercase'
          >
            <BiArrowBack /> <p>Back</p>
          </Link>

          <div className='mt-5 flex w-full gap-5'>
            <div className='flex-[8] border-r-2 border-gray-200 px-3 md:border-r-0 md:p-0'>
              {details.photo && (
                <img
                  loading='lazy'
                  className='h-[450px] w-full overflow-hidden rounded-sm border-gray-300 bg-gray-50 object-contain p-1 md:h-[300px]'
                  src={details.photo.url}
                  alt=''
                />
              )}
              <div className='mt-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                  {updateMode ? (
                    <input
                      type='text'
                      className='w-full border border-gray-400 bg-gray-50 p-1 text-xl'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  ) : (
                    <div className='flex w-full flex-col justify-between space-y-2'>
                      <h2 className='text-2xl font-medium text-gray-800 md:text-[1.35rem]'>
                        {title}
                      </h2>

                      <div className='flex items-center space-x-3'>
                        <div className='mr-3 flex items-center space-x-2'>
                          {!like ? (
                            <button
                              title='like'
                              className='flex items-center justify-center space-x-2 text-sm font-medium'
                              onClick={handleLike}
                            >
                              <span className='flex items-center gap-2 font-medium text-gray-800'>
                                Like <AiOutlineLike size={17} />
                              </span>
                            </button>
                          ) : (
                            <span className='flex items-center gap-2 font-medium text-gray-800'>
                              Liked <AiFillLike size={17} />
                            </span>
                          )}
                          <span>({likeCount})</span>{' '}
                          {/* Display the like count */}
                        </div>

                        <button
                          title='copy link'
                          className='mr-4 flex items-center justify-center space-x-2 text-sm font-medium text-gray-800'
                          onClick={() => copyPostLink()}
                        >
                          <span className='text-gray-800'>Share</span>{' '}
                          <BiShareAlt size={17} />
                        </button>
                      </div>
                    </div>
                  )}
                  {details?.username === auth?.data?.others?.username && (
                    <div className='flex items-center space-x-4'>
                      <AiFillEdit
                        title='edit'
                        size={18}
                        className='cursor-pointer text-gray-800'
                        onClick={() => setUpdateMode(true)}
                      />

                      <AiFillDelete
                        title='delete'
                        size={18}
                        className='cursor-pointer text-gray-800'
                        onClick={handleDelete}
                      />
                    </div>
                  )}
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      loading='lazy'
                      className='h-[40px] w-[40px] rounded-full object-cover'
                      src='https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png'
                      alt=''
                    />
                    <p className='text-base font-medium text-gray-800'>
                      <Link to={`/?user=${details.username}`}>
                        {details.username}
                      </Link>
                    </p>
                  </div>
                  <div>
                    {/* <p>{new Date(details.createdAt).toDateString()}</p> */}
                    <span className='text-base font-medium text-gray-800'>
                      {new Date(details.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                {updateMode ? (
                  <div className='flex flex-col items-end space-y-2'>
                    <textarea
                      type='text'
                      cols={20}
                      rows={5}
                      className='w-full border border-gray-400 bg-gray-50'
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                ) : (
                  <p className='text-gray-700'>{desc}</p>
                )}
                {updateMode && (
                  <button
                    onClick={handleUpdate}
                    className='w-fit rounded-md bg-green-600 p-2 font-medium text-white'
                  >
                    Update
                  </button>
                )}
              </div>
              <div className='mt-16 flex w-full flex-col gap-3 bg-gray-100 p-3'>
                {/* comment input */}
                <h2 className='text-xl font-medium text-gray-800'> Comment</h2>
                <div className='flex items-center'>
                  <input
                    placeholder='Write comment ...'
                    className='w-full p-2'
                    type='text'
                  />
                  <button className='border border-white p-2'>
                    <BsSendFill size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-[2] flex-col gap-5 bg-gray-50 p-3 md:hidden'>
              <div className='space-y-3 md:hidden'>
                <h3 className='text-center text-xl font-semibold uppercase text-gray-800'>
                  About us
                </h3>
                <img
                  loading='lazy'
                  className='w-fit object-cover'
                  src='https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg'
                  alt=''
                />
                <p className='text-justify text-gray-700'>
                  Welcome to our blog! Here you&apos;ll find a collection of
                  informative articles, engaging stories, and expert insights on
                  a wide range of topics. Explore our content and join the
                  conversation as we share knowledge, inspiration, and practical
                  advice. Get ready to be inspired, informed, and entertained!
                </p>
              </div>
              <div className='space-y-3 md:hidden'>
                <h3 className='text-center text-xl font-semibold uppercase text-gray-800'>
                  follow us
                </h3>
                <div className='flex items-center justify-center gap-3'>
                  <AiFillFacebook size={25} />
                  <AiFillTwitterSquare size={25} />
                  <FaInstagramSquare size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
