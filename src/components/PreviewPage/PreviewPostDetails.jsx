import React from "react";

export const PreviewPostDetails = ({ name, author, description }) => {
  // todo: replace all hardcoded data with live data
  return (
    <div className="grid-cols-1 w-full mt-2">
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Name
      </div>
      <div className="text-align font-light h-full w-full p-3">Nature</div>
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Author
      </div>
      <div className="text-align font-light h-full w-full p-3">
        Ralph Waldo Emerson
      </div>
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Description
      </div>
      <div className="text-align font-light h-full w-full p-3">
        Nature is an essay written by Ralph Waldo Emerson, published by James
        Munroe and Company in 1836. In the essay Emerson put forth the
        foundation of transcendentalism, a belief system that espouses a
        non-traditional appreciation of nature.
      </div>
    </div>
  );
};
