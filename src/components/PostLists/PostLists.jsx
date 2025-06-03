import BlogCard from '../BlogCard/BlogCard';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import SkeletonLoading from '../SkeletonLoading';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const PostLists = ({ posts }) => {
  const copyPostLink = (postId) => {
    const postLink = `${window.location.origin}/blog-details/${postId}`; // Modify this based on your route structure
    navigator.clipboard.writeText(postLink);

    toast.success('link copied to clipboard!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000
    });
  };

  return (
    <div className='container m-auto mt-20 w-[90%] lg:w-full'>
      <div>
        <h3 className='text-[1.4rem] font-semibold uppercase text-gray-800'>
          All Posts
        </h3>

        <div className='mt-5 flex w-full gap-5 md:flex-col-reverse'>
          <div className='grid flex-[8] grid-cols-3 gap-8 border-r-2 border-gray-200 px-3 lg:grid-cols-2 md:grid-cols-1 md:border-r-0 md:p-0'>
            {posts.length > 0 ? (
              posts.map((data) => (
                <div key={data._id}>
                  <BlogCard
                    key={data._id}
                    post={data}
                    copyPostLink={copyPostLink}
                  />
                </div>
              ))
            ) : (
              // Render SkeletonLoading components while data is loading
              <>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
              </>
            )}
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
                informative articles, engaging stories, and expert insights on a
                wide range of topics. Explore our content and join the
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
  );
};

PostLists.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostLists;
