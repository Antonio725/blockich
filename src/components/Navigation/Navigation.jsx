import React from "react";
import NavigationDropdown from "./NavigationDropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import blockchainLogo from "../../assets/icons/blockchain.png";
import {
  ALL_POSTS_PAGE,
  HOME_PAGE,
  USER_PROFILE_PAGE,
  WALLET_PAGE,
} from "../Router/Routes";

const Navigation = () => {
  const items = [
    { label: "Home", desc: "Home page", link: HOME_PAGE },
    { label: "User Profile", desc: "Your activity", link: USER_PROFILE_PAGE },
    { label: "Articles", desc: "All articles", link: ALL_POSTS_PAGE },
    { label: "Wallet", desc: "Your wallet", link: WALLET_PAGE },
  ];

  const location = useLocation();

  return (
    <div>
      <nav className="bg-white shadow ">
        <div className="max-w-7xl mx-auto px-8 hidden md:block">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {items.map(({ desc, link }) => {
                    return (
                      <Link
                        className={`${
                          location.pathname === link
                            ? "text-gray-800 "
                            : "text-gray-300"
                        } hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium`}
                        to={link}
                        key={link}
                      >
                        {desc}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6">
                <img
                  className="w-10"
                  src={blockchainLogo}
                  alt="blockChainLogo"
                />
                <div className="ml-2 font-mono font-bold text-2xl select-none">
                  Blockich
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <NavigationDropdown items={items} />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
