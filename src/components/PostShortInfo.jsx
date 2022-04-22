import React from "react";
import { Link } from "react-router-dom";
import { generatePostPreviewLink } from "./Router/Routes";
import Jdenticon from "react-jdenticon";

export const PostShortInfo = ({ post }) => {
  return (
    <div className="flex w-full items-start space-x-4 md:space-x-8 ">
      <Jdenticon
        size="48"
        value={post?.getAuthor()?.toLowerCase() ?? "unknown address"}
      />
      <div className="w-full">
        <dt className="mb-4">
          <h3 className="text-xl font-semibold">{post.getTitle()}</h3>
          <hr className="mt-3" />
        </dt>
        <dd className="mb-3">
          <p>{post.getDescription()}</p>
        </dd>
        <div className="flex justify-end mb-16">
          <Link
            className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full"
            to={generatePostPreviewLink(post.getId())}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
