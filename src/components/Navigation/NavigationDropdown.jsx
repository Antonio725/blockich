import React, { useState } from "react";
import { useLocation } from "react-router";
import blockchainLogo from "../../assets/icons/blockchain.png"
import { Link } from "react-router-dom";

const NavigationDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const linkMap = new Map([
        ["/", "Home"],
        ["/userProfile", "User profile"],
        ["/allArticles", "All articles"],
        ["/wallet", "Wallet"]
    ])

    const location = useLocation()

    console.log(location.pathname)
    return (
        <div className="relative inline-block text-left h-16 w-full">
            <div className="w-full flex justify-between h-16 items-center">
                <button
                    type="button"
                    onClick={ () => setIsOpen(!isOpen) }
                    className={ `h-10 ml-4 border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500` }
                    id="options-menu"
                >
                    { linkMap.get(location.pathname) }
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/>
                    </svg>
                </button>
                <div className="mr-4 flex items-center md:ml-6">
                    <img className="w-10" src={ blockchainLogo } alt="blockChainLogo"/>
                    <div className="ml-2 font-mono font-bold text-2xl">
                        Blockich
                    </div>
                </div>
            </div>

            { (props.forceOpen || isOpen) && (
                <div
                    className="absolute left-4 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <div
                        className={ `py-1 ${ props.withDivider ? "divide-y divide-gray-100" : "" }` }
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        { props.items.map((item) => {
                            return (
                                <Link
                                    key={ item.label }
                                    to={ item.link || "#" }
                                    className={ `${
                                        item.icon ? "flex items-center" : "block"
                                    } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600` }
                                    role="menuitem"
                                >
                                    { item.icon }

                                    <span className="flex flex-col">
                                        <span>{ item.label }</span>
                                        { item.desc && <span className="text-gray-400 text-xs">{ item.desc }</span> }
                                    </span>
                                </Link>
                            );
                        }) }
                        <div className="py-2 px-4 mt-4">
                            <Link
                                role="menuitem"
                                className="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                                to="/newPost">
                                New Post
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};
export default NavigationDropdown;