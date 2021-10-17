import React from "react";
import Header from "./../components/Header";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default MainLayout;
