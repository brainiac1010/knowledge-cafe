import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, reading_time, author_img, author, posted_date, hashtag } = blog;
  const hashtagUrl = `https://www.example.com/search?query=${hashtag}`;

  return (
    <div className='mb-20'>
      <img className="w-full mb-8 rounded-md" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
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
            onClick={() => handleAddToBookmark(blog)} 
            className='ml-2 text-2xl text-green-400'>
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        <a href={hashtagUrl} className="text-blue-500 hover:underline">
          {hashtag}
        </a>
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired, 
};

export default Blog;
