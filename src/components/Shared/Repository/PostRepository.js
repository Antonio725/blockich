import { ethers } from "ethers";
import SocialNetwork from "../../../abis/Test.json";
import { Post } from "../Model/Post";
import { Web3Storage } from "web3.storage";

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

  async createPost(data, files) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const add = "0x0c52555b34cfc05308400361e412c9c296e6dcf3";

    const contract = new ethers.Contract(add, SocialNetwork.abi, signer);
    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNhNGY3ZDZkOUY5NjMyNzBmOTk3NTNBOUM5NDIxNkNFRmM0ZTY5MWUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDcwMDIwODk1MDYsIm5hbWUiOiJ0ZXN0In0.rs3qyzIQa33JhfurEsmo8G5ihkU_gfcTpInmP7YRIw0",
    });

    const fileId = await client.put(files);

    await contract.createPost(
      data.title,
      data.description,
      files[0].name,
      fileId
    );
  }
}
