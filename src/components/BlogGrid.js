import React, { useContext } from "react";
import Blog from "./Blog";
import { Store } from "../store/Store";
const BlogGrid = () => {
  const GlobalContext = useContext(Store);
  const { blogs } = GlobalContext;
  console.log(blogs);
  return (
    <section className="flex flex-wrap px-[140px] justify-between gap-1">
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog?.id}
            userId={blog?.userId}
            id={blog?.id}
            title={blog?.title}
          ></Blog>
        );
      })}
    </section>
  );
};

export default BlogGrid;
