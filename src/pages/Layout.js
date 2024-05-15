import React, { Children } from "react";
import Header from "../components/Header";
const Layout = ({ children, ...props }) => {
  return (
    <main className="">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
