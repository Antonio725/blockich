import React from "react";
import WalletBalance from "../wallet/WalletBalance";

const HomePage = () => {
  return (
    <div className="md:px-4 pb-4 bg-gray-50 justify-center">
      <div className="w-full md:w-4/5 mx-auto">
        {!window.ethereum ? (
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">You are not signed in!</span>
              <span className="block text-indigo-500">Get started.</span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <a
                  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  href="https://metamask.io/download.html"
                >
                  Download Metamask
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">Metamask detected!</span>
              <span className="block text-indigo-500" />
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <WalletBalance />
              </div>
            </div>
          </div>
        )}
        <hr className="mt-6" />
        <h3 className="mt-6 text-center text-gray-500">Recent Posts</h3>
        <div className="bg-lightblue py-20 px-4">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-center">
            <dl className="w-full">
              <div className="flex items-start space-x-4 md:space-x-8 ">
                <div className="shadow-sm text-blue-700 text-l md:text-2xl font-semibold rounded-full h-6 w-10 md:h-12 md:w-20 flex items-center justify-center bg-blue-100">
                  LV
                </div>
                <div>
                  <dt className="mb-4">
                    <h3 className="text-xl font-semibold">
                      Academic Research Paper 1
                    </h3>
                    <hr className="mt-3" />
                  </dt>
                  <dd className="mb-3">
                    <p>
                      Running existing machine learning projects in Valohai is
                      very simple! Integration only requires adding a
                      valohai.yaml configuration file. Moving projects in and
                      out of Valohai is easy – the integration is only the
                      configuration file.
                    </p>
                  </dd>
                  <div className="flex justify-end mb-16">
                    <div className="ml-8 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Comment
                    </div>
                    <div className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-8 ">
                <div className="shadow-sm text-blue-700 text-l md:text-2xl font-semibold rounded-full h-6 w-10 md:h-12 md:w-20 flex items-center justify-center bg-blue-100">
                  LV
                </div>
                <div>
                  <dt className="mb-4">
                    <h3 className="text-xl font-semibold">
                      Academic Research Paper 2
                    </h3>
                    <hr className="mt-3" />
                  </dt>
                  <dd className="mb-3">
                    <p>
                      Running existing machine learning projects in Valohai is
                      very simple! Integration only requires adding a
                      valohai.yaml configuration file. Moving projects in and
                      out of Valohai is easy – the integration is only the
                      configuration file.
                    </p>
                  </dd>
                  <div className="flex justify-end mb-16">
                    <div className="ml-8 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Comment
                    </div>
                    <div className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-8 ">
                <div className="shadow-sm text-blue-700 text-l md:text-2xl font-semibold rounded-full h-6 w-10 md:h-12 md:w-20 flex items-center justify-center bg-blue-100">
                  LV
                </div>
                <div>
                  <dt className="mb-4">
                    <h3 className="text-xl font-semibold">
                      Academic Research Paper 3
                    </h3>
                    <hr className="mt-3" />
                  </dt>
                  <dd className="mb-3">
                    <p>
                      Running existing machine learning projects in Valohai is
                      very simple! Integration only requires adding a
                      valohai.yaml configuration file. Moving projects in and
                      out of Valohai is easy – the integration is only the
                      configuration file.
                    </p>
                  </dd>
                  <div className="flex justify-end mb-16">
                    <div className="ml-8 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Comment
                    </div>
                    <div className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
