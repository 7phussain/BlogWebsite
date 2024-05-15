import React, { useEffect, useState } from "react";
import { Store } from "./Store";
const ContextManager = ({ children, ...props }) => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);

      try {
        const [blogsResponse, usersResponse, photosResponse] =
          await Promise.all([
            fetch("https://dummyjson.com/posts"),
            fetch("https://dummyjson.com/users"),
            fetch("https://jsonplaceholder.typicode.com/photos"),
          ]);

        const blogsDataR = await blogsResponse.json();
        const usersDataR = await usersResponse.json();
        const photosDataR = await photosResponse.json();

        setBlogs(blogsDataR?.posts);
        setUsers(usersDataR?.users);
        setPhotos(photosDataR);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Optionally set a state for error handling
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Store.Provider
      value={{
        blogs,
        setBlogs,
        users,
        photos,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default ContextManager;
