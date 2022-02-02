import React from "react";
import ProfilePagePostTable from "./ProfilePageArticleTable/ProfilePageArticleTable";
import { data } from "../../data/ProfilePageTableData";

const ProfilePage = () => {

    return (
        <div className="px-4 pb-4 bg-gray-50 justify-center">
            <div className="w-4/5 mx-auto">
                <div className="relative h-56 bg-gradient-to-r from-green-400 to-blue-500">
                    <div
                        className="absolute shadow-sm text-blue-700 text-7xl font-semibold rounded-full h-48 w-48 flex items-center justify-center bg-blue-100 -bottom-24 left-8">
                        LV
                    </div>
                </div>
                <div className="flex justify-between pl-56 pt-8">
                    <div className="text-gray-400 font-semibold text-xl">
                        @LukaVojnovic
                    </div>
                    <div className="flex">
                        <div
                            className="ml-8 px-4 py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                            Posts: 14
                        </div>
                        <div
                            className="ml-2 px-4 py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
                            Reviews: 10
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="text-lg text-gray-900 text-2xl font-semibold uppercase">Posts</div>
                    <ProfilePagePostTable data={data} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
