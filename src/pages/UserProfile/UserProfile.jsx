import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { RiImageEditLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { GrCheckmark } from 'react-icons/gr';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { APIURL } from '../../utlis/api';
import axios from 'axios';

const UserProfile = () => {
  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState('');
  const [pic, setPic] = useState(null);

  const profileDetails = useSelector((state) => state.profile);

  useEffect(() => {
    setUsername(profileDetails.username);
  }, [profileDetails]);

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('profilePic', pic);

      const response = await axios.put(
        `${APIURL}/api/auth/update/${profileDetails._id}`,
        formData
      );

      if (response.status === 200) {
        console.log('Profile updated successfully');
        setEditable(false);
      } else {
        console.error('Failed to update profile');
      }
    } catch (err) {
      console.error('Error occurred while updating profile:', err);
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-[80vh] w-full'>
        <div className='container m-auto mt-24 w-[50%] border py-4 shadow-md md:w-[95%]'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold'> Hi, There! </h2>

              {editable ? (
                <GrCheckmark
                  onClick={handleUpdate}
                  title='Done'
                  className='cursor-pointer'
                />
              ) : (
                <FiEdit
                  onClick={() => setEditable(true)}
                  title='edit profile '
                  className='cursor-pointer'
                />
              )}
            </div>
            <div className='flex h-[140px] w-full gap-6 md:flex-col'>
              <div className='relative min-h-[110px] w-[110px]'>
                <img
                  loading='lazy'
                  alt=''
                  className='min-h-[110px] min-w-[110px] cursor-pointer rounded-full border border-gray-300 object-cover'
                  src={`${
                    pic
                      ? pic
                      : 'https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png'
                  }`}
                />
                <input
                  type='file'
                  name='pic'
                  onChange={(e) => setPic(e.target.files[0])}
                />
                <button
                  title='update image'
                  className={`${editable ? 'block' : 'hidden'} absolute bottom-0 right-0`}
                >
                  <RiImageEditLine />
                </button>
              </div>
              <div className='w-[80%]'>
                <div className='flex flex-col gap-2'>
                  <div>
                    <span className='text-sm font-semibold text-gray-700'>
                      Name{' '}
                    </span>
                    {editable ? (
                      <input
                        required
                        type='text'
                        className='w-full border-b-2 border-gray-400 bg-gray-50 text-base font-medium'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    ) : (
                      <p className='text-base font-medium'>
                        {profileDetails.username}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className='text-sm font-semibold text-gray-700'>
                      Email{' '}
                    </span>
                    <p className='cursor-not-allowed text-base font-medium'>
                      {profileDetails.email}
                      {/* { console.log(profileDetails.others.email)} */}
                    </p>
                  </div>
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

export default UserProfile;
