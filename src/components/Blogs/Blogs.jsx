import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handelAddtoBookmark }) => {
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
            handelAddtoBookmark={handelAddtoBookmark}
          />
        ))
      }
    </div>
  );
};

export default Blogs;
