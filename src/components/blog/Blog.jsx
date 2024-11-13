import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { id, title, cover, reading_time, author_img, author, posted_date, hashtag } = blog;
console.log("working ",id)
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full mb-8 rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
      
      <div className='flex justify-between mb-4'>
        <div className="flex">
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <h2>Date: {posted_date}</h2>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button 
            onClick={() => {
            
              handleAddToBookmark(blog);           
            }}
            className='ml-2 text-2xl text-green-400'>
            <FaBookmark />
          </button>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>

      <p>
        {hashtag && hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="">{`#${hash}`}</a> 
          </span>
        ))}
      </p>

      <button 
        className='text-purple-800 font-bold underline'
        onClick={() => handleMarkAsRead(id,reading_time)}>
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
