import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="A simple and fast way to search weather" />
        <title>weatherApplication</title>
      </Helmet>
      <Nav />
      <SearchBar />
      {children}
    </>
  );
}

export default Layout;
