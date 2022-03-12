import React from "react";
import notLikedIcon from "../../assets/icons/heart.svg";

export const PreviewComment = ({ comment, numberOfLikes, isLiked }) => {
  // todo: replace all hardcoded data with live data
  return (
    <div className="flex items-start space-x-4 w-full h-min my-8">
      <div className="shadow-sm text-blue-700 text-l md:text-2xl font-semibold rounded-full h-6 w-10 md:h-12 md:w-20 flex items-center justify-center bg-blue-100">
        LV
      </div>
      <div>
        <div className="mb-3 font-light">
          Running existing machine learning projects in Valohai is very simple!
          Integration only requires adding a valohai.yaml configuration file.
          Moving projects in and out of Valohai is easy – the integration is
          only the configuration file.
        </div>
        <div className="flex justify-end space-x-4">
          <img className="w-4" src={notLikedIcon} alt="likeIcon" />
          <span className="font-light text-sm">231 Likes</span>
        </div>
      </div>
    </div>
  );
};
