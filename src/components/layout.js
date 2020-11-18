import React from "react";
import Footer from "./footer";

function Layout(props) {
  const children = props.children;
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
