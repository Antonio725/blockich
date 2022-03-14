import { ethers } from "ethers";
import SocialNetwork from "../../../abis/Test.json";
import { Post } from "../Model/Post";
export class PostRepository {
  async getPosts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      "0x0c52555b34cfc05308400361e412c9c296e6dcf3",
      SocialNetwork.abi,
      provider
    );
    const postCount = await contract.postCount();

    const posts = [];
    for (let i = 1; i <= postCount; i++) {
      const post = await contract.posts(i);
      posts.push(post);
    }

    return posts.map(
      (post) =>
        new Post(
          post.id._hex,
          post.author,
          post.title,
          post.description,
          post.fileName,
          post.url
        )
    );
  }
}
