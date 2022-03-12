import React from "react";
import NavigationDropdown from "./NavigationDropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import blockchainLogo from "../../assets/icons/blockchain.png"

const Navigation = () => {

    const items = [
        { label: "Home", desc: "Home page", link: "/" },
        { label: "User Profile", desc: "Your activity", link: "/userProfile" },
        { label: "Articles", desc: "All articles", link: "/allArticles" },
        { label: "Wallet", desc: "Your wallet", link: "/wallet" }
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
                                    { items.map(item => {
                                        return (
                                            <Link
                                                className={ `${ location.pathname === item.link ? "text-gray-800 " : "text-gray-300" } hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium` }
                                                to={ item.link }>
                                                { item.desc }
                                            </Link>
                                        )
                                    }) }
                                    <Link
                                        className="py-2 px-4 justify-end bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                                        to="/newPost">
                                        New Post
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <img className="w-10" src={ blockchainLogo } alt="blockChainLogo"/>
                                <div className="ml-2 font-mono font-bold text-2xl">
                                    Blockich
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <NavigationDropdown items={ items }/>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;