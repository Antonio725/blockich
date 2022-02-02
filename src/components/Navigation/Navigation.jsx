import React from "react";
import NavigationDropdown from "./NavigationDropdown";
import { Link } from "react-router-dom";

const Navigation = () => {

  const dropdownItems = [
    { label: "Home", desc: "Home", link: "/" },
    { label: "User Profile", desc: "User Profile", link: "/userProfile" },
    { label: "one", desc: "One", link: "/" },
    { label: "one", desc: "One", link: "/" }
  ];

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/">
                    Home
                  </Link>
                  <Link
                    className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/userProfile">
                    User Profile
                  </Link>
                  <Link
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/allArticles">
                    All Articles
                  </Link>
                  <Link
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/Wallet">
                    Wallet
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6">
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <NavigationDropdown items={dropdownItems} />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;