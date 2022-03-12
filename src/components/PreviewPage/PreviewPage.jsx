import React from "react";
import { useParams } from "react-router";
import { DocumentPreviewer } from "./DocumentPreviewer";
import { PreviewPostDetails } from "./PreviewPostDetails";
import { PreviewComment } from "./PreviewComment";
import { PreviewCommentBox } from "./PreviewCommentBox";

export const PreviewPage = () => {
  const { postId } = useParams();

  return (
    <div className="md:px-4 py-4 lg:px-28 bg-gray-50 justify-center h-max">
      <div className="flex justify-between w-full mb-4">
        <span className="text-2xl font-semibold sm:text-3xl">About</span>
        <a
          className="px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full"
          href={"https://pdcrodas.webs.ull.es/fundamentos/EmersonNature.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
      <PreviewPostDetails />
      <hr className="mt-4 my-6" />
      <DocumentPreviewer
        className="h-screen"
        source={"https://pdcrodas.webs.ull.es/fundamentos/EmersonNature.pdf"}
        // source={null}
      />
      <hr className="mt-6 mb-3" />
      <span className="text-2xl font-semibold sm:text-3xl pb-4">Comments</span>
      <div className="my-4 pb-16">
        <PreviewComment />
        <PreviewComment />
        <PreviewComment />
        <PreviewComment />
        <PreviewCommentBox />
      </div>
    </div>
  );
};

export default PreviewPage;
