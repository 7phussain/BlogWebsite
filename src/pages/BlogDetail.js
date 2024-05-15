import React, { useContext, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { Store } from "../store/Store";
import placeholderImage from "../assets/placeholder.png";
const BlogDetail = () => {
  const { id } = useParams();
  const GlobalContext = useContext(Store);
  const { photos, blogs, users } = GlobalContext;
  const [blogImageUrl, setBlogImageUrl] = useState(
    photos.find((photo) => photo?.id == id)?.url
    // `https://picsum.photos/40${id}/30${id}.jpg`
  );
  const [userImage, setUserImage] = useState(
    users.find((user) => user?.id == id)?.image
  );
  const blogImageErrorHandler = () => {
    setBlogImageUrl(placeholderImage);
  };
  const userImageErrorHandler = () => {
    setUserImage(placeholderImage);
  };
  console.log(id);
  return (
    <Layout>
      <section className="w-[55%] m-auto">
        <figure className="h-[350px] w-full ">
          <img
            src={blogImageUrl}
            alt=""
            className="w-full h-full object-cover"
            onError={blogImageErrorHandler}
          />
        </figure>
        <p>{blogs.find((blog) => blog.id == id)?.body}</p>
        <div className="flex gap-2 mt-2">
          <figure className="w-[30px] h-[30px] rounded-full">
            <img
              src={userImage}
              alt=""
              className="w-full h-full object-cover rounded-full"
              onError={userImageErrorHandler}
            />
          </figure>
          <figcaption>
            {users.find((user) => user?.id == id)?.firstName +
              " " +
              users.find((user) => user?.id == id)?.lastName}
          </figcaption>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
