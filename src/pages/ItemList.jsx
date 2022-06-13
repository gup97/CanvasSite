import React from "react";
import Header from "component/header/header";
import Main from "component/main";
import Footer from "component/footer";
import ItemList from "component/second";
const Page = () => {
  return (
    <>
      <Header />
      <ItemList />
      <ItemList />
      <ItemList />
      <Footer />
    </>
  );
};

export default Page;
