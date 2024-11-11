import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl font-semibold">Blogs: {blogs.length}</h1>
      {
        blogs.map(blog => (
          <Blog 
            key={blog.id} 
            blog={blog} 
            handleAddToBookmark={handleAddToBookmark} // Pass down handleAddToBookmark
          />
        ))
      }
    </div>
  );
};
Blogs.prototypes={handleAddToBookmark: PropTypes.func.isRequired, }
export default Blogs;
