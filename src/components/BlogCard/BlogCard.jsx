import { Link } from 'react-router-dom';
import { CiShare2 } from 'react-icons/ci';
import PropTypes from 'prop-types';

const BlogCard = ({ post, copyPostLink }) => {
  console.log(post);

  return (
    <>
      <div>
        <div className='flex h-[380px] min-w-[200px] flex-col overflow-hidden rounded-md bg-white shadow-md hover:shadow-2xl'>
          <Link
            to={`/blog-details/${post._id}`}
            className='h-[280px] overflow-hidden'
          >
            {post.photo && (
              <img
                loading='lazy'
                className='h-[280px] w-full object-cover hover:scale-105'
                src={post.photo.url}
                alt=''
              />
            )}
          </Link>
          <div className='h-[230px] space-y-1 overflow-hidden bg-white px-3 py-2'>
            <div className='flex justify-between'>
              <h2 className='overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-gray-800'>
                {' '}
                {post.title}{' '}
              </h2>
              <button
                className='flex items-center justify-center space-x-2 text-sm text-gray-800'
                onClick={() => copyPostLink(post._id)}
              >
                {' '}
                <span className='text-gray-800'>Share</span>
                <CiShare2 />
              </button>
            </div>
            {post.categories.map((cat) => (
              <span key={cat.name} className='hidden'>
                {cat.name}
              </span>
            ))}
            <div className='flex items-center justify-between text-sm font-medium'>
              <div className='flex items-center space-x-2'>
                <img
                  loading='lazy'
                  alt=''
                  className='h-8 w-8 rounded-full border border-gray-500 object-cover'
                  src='https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png'
                />
                <p className='text-gray-800'>{post.username}</p>
              </div>{' '}
              <span className='text-gray-800'>
                {post.createdAt.slice(0, 10)}
              </span>
            </div>
            <p className='overflow-hidden text-ellipsis text-gray-700'>
              {post.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  copyPostLink: PropTypes.func.isRequired
};

export default BlogCard;
