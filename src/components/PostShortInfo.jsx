import React from "react";
import { Link } from "react-router-dom";
import { generatePostPreviewLink } from "./Router/Routes";

export const PostShortInfo = ({ postId }) => {
  // todo: replace all hardcoded data with live data
  return (
    <div className="flex items-start space-x-4 md:space-x-8 ">
      <div className="shadow-sm text-blue-700 text-l md:text-2xl font-semibold rounded-full h-6 w-10 md:h-12 md:w-20 flex items-center justify-center bg-blue-100">
        LV
      </div>
      <div>
        <dt className="mb-4">
          <h3 className="text-xl font-semibold">Academic Research Paper 1</h3>
          <hr className="mt-3" />
        </dt>
        <dd className="mb-3">
          <p>
            Running existing machine learning projects in Valohai is very
            simple! Integration only requires adding a valohai.yaml
            configuration file. Moving projects in and out of Valohai is easy –
            the integration is only the configuration file.
          </p>
        </dd>
        <div className="flex justify-end mb-16">
          <Link
            className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full"
            to={generatePostPreviewLink(postId)}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
