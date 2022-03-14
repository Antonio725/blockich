import React, { useEffect, useState } from "react";
import "../../App.css";
import { PostShortInfo } from "../PostShortInfo";
import { PostRepository } from "../Shared/Repository/PostRepository";

const AllPostsPage = () => {
  const postRepository = new PostRepository();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [fetchedPosts] = await Promise.all([await postRepository.getPosts()]);
    setPosts(fetchedPosts);
  };

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div id="all-articles">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">All Articles</span>
        </h2>
      </div>
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-center">
        <dl className="w-full">
          <hr className="mt-8" />
          {posts.map((post) => (
            <PostShortInfo key={post.getId()} post={post} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AllPostsPage;
