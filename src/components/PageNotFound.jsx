import React from "react";
import pageNotFoundImage from "../assets/images/page_not_found.svg";

const PageNotFound = () => {
  return (
    <div className="flex-row justify-around md:px-4 pb-4 pt-4 text-center bg-gray-50 h-screen select-none">
      <img
        className="w-1/2 m-auto"
        src={pageNotFoundImage}
        alt="pageNotFoundImage"
      />
      <span className="text-4xl">Page not found!</span>
    </div>
  );
};

export default PageNotFound;
