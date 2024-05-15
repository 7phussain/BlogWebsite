import React, { useContext, useState } from "react";
import blog1Image from "../assets/blog-1.jpg";
import { Store } from "../store/Store";
import placeholderImage from "../assets/placeholder.png";
import { useNavigate } from "react-router-dom";
const Blog = ({ title, userId, id }) => {
  const navigate = useNavigate();
  const GlobalContext = useContext(Store);
  const { users, photos } = GlobalContext;
  const [blogImageUrl, setBlogImageUrl] = useState(
    photos.find((photo) => photo?.id === id)?.url
  );
  const [userImage, setUserImage] = useState(
    users.find((user) => user?.id === id)?.image
  );
  const blogImageErrorHandler = () => {
    setBlogImageUrl(placeholderImage);
  };
  const userImageErrorHandler = () => {
    setUserImage(placeholderImage);
  };
  console.log(
    users.find((user) => user?.id == id),
    userId
  );
  return (
    <article
      className="w-[23%] h-[330px] mb-4 grid_blog cursor-pointer hover:bg-red-400 rounded-md transition-all transition-duration-3"
      onClick={() => navigate(`/posts/${id}/`)}
    >
      <figure className="h-[70%] w-full">
        <img
          src={blogImageUrl}
          onError={blogImageErrorHandler}
          alt=""
          className="h-full w-full object-cover hero_blog_image rounded-[6px_6px_0px_0px]"
        />
      </figure>
      <div className="p-2 flex flex-col justify-between h-[30%]">
        <p className="font-bold text-[15px] mb-2">{title}</p>
        <div className="flex gap-2">
          <figure className="w-[30px] h-[30px] rounded-full">
            <img
              src={userImage}
              alt=""
              className="w-full h-full object-cover rounded-full"
              onError={userImageErrorHandler}
            />
          </figure>
          <figcaption>
            {users.find((user) => user?.id === id)?.firstName +
              " " +
              users.find((user) => user?.id === id)?.lastName}
          </figcaption>
        </div>
      </div>
    </article>
  );
};

export default Blog;
