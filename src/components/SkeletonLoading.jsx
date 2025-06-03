const SkeletonLoading = () => {
  return (
    <div className='flex h-[380px] min-w-[200px] flex-col overflow-hidden rounded-md bg-white shadow-md'>
      <div className='h-[280px] animate-pulse bg-gray-200'></div>
      <div className='h-[150px] bg-gray-200 p-3'>
        <div className='mb-2 mt-1 h-4 w-3/4 animate-pulse bg-gray-200'></div>
        <div className='h-4 w-full animate-pulse bg-gray-200'></div>
        <div className='mt-2 h-4 w-5/6 animate-pulse bg-gray-200'></div>
        <div className='mt-2 h-4 w-2/3 animate-pulse bg-gray-200'></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
