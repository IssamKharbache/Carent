import React from "react";
import Nav from "./Nav";
import MenuNav from "./MenuNav";

const Header = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="lg:hidden">
        <MenuNav />
      </div>
    </div>
  );
};

export default Header;
