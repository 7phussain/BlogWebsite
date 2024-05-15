import React from "react";
import Layout from "./Layout";

import BlogGrid from "../components/BlogGrid";
const Home = () => {
  return (
    <Layout>
      <div className="py-5">
        <BlogGrid />
      </div>
    </Layout>
  );
};

export default Home;
