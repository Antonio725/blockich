import React, { useState } from "react";

export const PreviewCommentBox = ({ className, onSubmit }) => {
  const [content, setContent] = useState("");

  return (
    <div className={className}>
      <div className="mb-2">
        <span className="text-lg text-gray-600 font-semibold">
          Leave a comment
        </span>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
          placeholder="Enter your comment here"
        />
      </div>
      <div className="flex w-full justify-end">
        <button
          onClick={() => onSubmit(content)}
          className="px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full"
        >
          Comment
        </button>
      </div>
    </div>
  );
};
