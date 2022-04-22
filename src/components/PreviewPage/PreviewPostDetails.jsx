import React from "react";

export const PreviewPostDetails = ({ post }) => {
  return (
    <div className="grid-cols-1 w-full mt-2">
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Name
      </div>
      <div className="text-align font-light h-full w-full p-3">
        {post?.getTitle() ?? "-"}
      </div>
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Author
      </div>
      <div className="text-align font-light h-full w-full p-3">
        {post?.getAuthor() ?? "-"}
      </div>
      <div className="bg-gray-100 font-medium text-align h-full w-full p-3 rounded">
        Description
      </div>
      <div className="text-align font-light h-full w-full p-3">
        {post?.getDescription() ?? "-"}
      </div>
    </div>
  );
};
