import { ethers } from "ethers";
import SocialNetwork from "../../../abis/Test.json";
import { Post } from "../Model/Post";
import { Web3Storage } from "web3.storage";

export class PostRepository {
  async getPosts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
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

  async createPost(data, files) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = import.meta.env.VITE_CONTRACT_ADDRESS;

    const contract = new ethers.Contract(address, SocialNetwork.abi, signer);
    const client = new Web3Storage({
      token: import.meta.env.VITE_WEB3STORAGE_TOKEN,
    });

    const fileId = await client.put(files);

    await contract.createPost(
      data.title,
      data.description,
      files[0].name,
      fileId,
      []
    );
  }
}
