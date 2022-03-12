import React from "react";

export const DocumentPreviewer = ({ source = null, className = "" }) => {
  if (!source) {
    return (
      <div className={className}>
        <div className="flex bg-gray-200 h-full w-full">
          <span className="m-auto">Unable to display the document</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
        src={`https://docs.google.com/viewer?url=${source}&embedded=true`}
        title="file"
        width="100%"
        height="100%"
        className="rounded"
      />
    </div>
  );
};
