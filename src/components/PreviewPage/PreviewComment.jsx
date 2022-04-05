import React from "react";
import Jdenticon from "react-jdenticon";

export const PreviewComment = ({ comment, author }) => {
  return (
    <div className="flex items-start space-x-4 w-full h-min my-8">
      <Jdenticon size="48" value={author?.toLowerCase() ?? "unknown address"} />
      <div className="flex flex-col">
        <span>{author}</span>
        <div>
          <div className="mb-3 font-light">{comment}</div>
        </div>
      </div>
    </div>
  );
};
