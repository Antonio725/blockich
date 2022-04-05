import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DocumentPreviewer } from "./DocumentPreviewer";
import { PreviewPostDetails } from "./PreviewPostDetails";
import { PreviewComment } from "./PreviewComment";
import { PreviewCommentBox } from "./PreviewCommentBox";
import { PostRepository } from "../Shared/Repository/PostRepository";
import { CommentRepository } from "../Shared/Repository/CommentRepository";
import { AccountRepository } from "../Shared/Repository/AccountRepository";

export const PreviewPage = () => {
  const { postId } = useParams();

  const postRepository = new PostRepository();
  const commentRepository = new CommentRepository();
  const accountRepository = new AccountRepository();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [fetchedPosts, fetchedAccount, fetchedComments] = await Promise.all([
      await postRepository.getPosts(),
      await accountRepository.getAccount(),
      await commentRepository.getComments(),
    ]);
    const wantedPost = fetchedPosts.filter((post) => post.getId() === postId);
    setPost(wantedPost[0] ?? null);
    setAccount(fetchedAccount);
    setComments(
      fetchedComments.filter((comment) => comment.getPostId() === postId)
    );
  };

  return (
    <div className="md:px-4 py-4 lg:px-28 bg-gray-50 justify-center h-max">
      <div className="flex justify-between w-full mb-4">
        <span className="text-2xl font-semibold sm:text-3xl">About</span>
        <a
          className="px-4 py-1 md:py-2 bg-indigo-600 text-white text-center text-base font-semibold shadow-md rounded-full"
          href={post?.getFileUrl() ?? null}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
      <PreviewPostDetails post={post} />
      <hr className="mt-4 my-6" />
      <DocumentPreviewer
        className="h-screen"
        source={post?.getFileUrl() ?? null}
      />
      <hr className="mt-6 mb-3" />
      <span className="text-2xl font-semibold sm:text-3xl pb-4">Comments</span>
      <div className="my-4 pb-16">
        {comments.map((comment) => (
          <PreviewComment
            key={comment.getId()}
            author={comment.getAuthorId()}
            comment={comment.getContent()}
          />
        ))}
        <PreviewCommentBox
          onSubmit={(content) =>
            commentRepository.createComment(
              content,
              account.getId(),
              post.getId()
            )
          }
        />
      </div>
    </div>
  );
};

export default PreviewPage;
