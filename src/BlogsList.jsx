import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}> <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </Link>
          
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
// export default React.memo(BlogList);    // to skip re rendering of components props that are unchanged.
