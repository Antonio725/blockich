import { ethers } from "ethers";
import SocialNetwork from "../../../abis/Test.json";
import { Comment } from "../Model/Comment";

export class CommentRepository {
  async getComments() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      SocialNetwork.abi,
      provider
    );
    const commentCount = await contract.commentCount();

    const comments = [];
    for (let i = 1; i <= commentCount; i++) {
      const comment = await contract.comments(i);
      comments.push(comment);
    }
    return comments.map(
      (comment) =>
        new Comment(
          comment.id._hex,
          comment.walletAddress,
          comment.postId._hex,
          comment.content
        )
    );
  }

  async createComment(content, authorId, postId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      SocialNetwork.abi,
      signer
    );
    await contract.createComment(postId, authorId, content);
  }
}
