import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <SearchBar />
      {children}
    </>
  );
}

export default Layout;
