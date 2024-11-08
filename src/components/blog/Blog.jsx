import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { title, cover, reading_time, author_img, author, posted_date, hashtag } = blog;
  const hashtagUrl = `https://www.example.com/search?query=${hashtag}`;

  return (
    <div>
      <img className="mb-6" src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-16 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <h2>Date: {posted_date}</h2>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
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
};

export default Blog;
