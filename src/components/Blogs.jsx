import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import next and previous icons from FontAwesome

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate index of the first and last blog for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.data.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px] mt-8'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-4 md:gap-6 px-4 text-black mt-5'>
          {currentBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                <img
                  className='h-40 md:h-56 w-full object-cover'
                  src={`http://localhost:1337${blog.attributes?.coverImg?.data?.[0]?.attributes?.url ?? ''}`}
                  alt={blog.attributes?.blogTitle ?? 'No Title'}
                />
                <div className='p-4 md:p-6'>
                  <h3 className='font-bold text-lg md:text-xl my-1'>
                    {blog.attributes?.blogTitle ?? 'No Title'}
                  </h3>
                  <p className='text-gray-600 text-base md:text-lg'>
                    {blog.attributes?.blogDesc ?? 'No Description'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className='flex justify-center mt-4'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`mx-1 px-3 py-1 border cursor-pointer ${currentPage === 1 ? 'bg-gray-200' : ''}`}
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: Math.ceil(blogs.data.length / blogsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 border ${currentPage === i + 1 ? 'bg-black' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(blogs.data.length / blogsPerPage)}
            className={`mx-1 px-3 py-1 border cursor-pointer ${currentPage === Math.ceil(blogs.data.length / blogsPerPage) ? 'bg-gray-200' : ''}`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
