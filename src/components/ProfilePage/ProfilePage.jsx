import React, { useState, useEffect } from "react";
import { AccountRepository } from "../Shared/Repository/AccountRepository";
import { PostRepository } from "../Shared/Repository/PostRepository";
import { PostShortInfo } from "../PostShortInfo";

const ProfilePage = () => {
  const accountRepository = new AccountRepository();
  const postRepository = new PostRepository();
  const [account, setAccount] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [fetchedAccount, fetchedPosts] = await Promise.all([
      await accountRepository.getAccount(),
      await postRepository.getPosts(),
    ]);
    setAccount(fetchedAccount);
    setPosts(
      fetchedPosts.filter((post) => post.getAuthor() === fetchedAccount.getId())
    );
  };

  return (
    <div className="md:px-4 pb-4 bg-gray-50 justify-center min-h-screen">
      <div className="w-full md:w-4/5 mx-auto">
        <div className="relative h-24 md:h-56 bg-gradient-to-r from-green-400 to-blue-500">
          <div className="absolute shadow-sm text-blue-700 text-5xl md:text-7xl font-semibold rounded-full h-24 w-24 md:h-48 md:w-48 flex items-center justify-center bg-blue-100 -bottom-12 md:-bottom-24 left-8">
            LV
          </div>
        </div>
        <div className="flex justify-between md:pl-56 pt-12 md:pt-10 mx-4 md:mx-0">
          <div className="text-gray-400 font-semibold text-xl mt-4 md:mt-0">
            {account?.getId() ?? "-"}
          </div>
          <div className="flex items-end">
            <div className="ml-8 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
              {`Posts: ${posts.length}`}
            </div>
            <div className="ml-2 px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full">
              Reviews: 0
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-24 mx-4 md:mx-0">
          <div className="text-lg text-gray-900 text-2xl font-semibold uppercase">
            Posts
          </div>
        </div>
        <div className="w-full">
          {posts.map((post) => (
            <PostShortInfo key={post.getId()} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
