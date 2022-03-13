import {
  getFilesFromPath,
  Web3Storage,
} from "web3.storage/dist/bundle.esm.min.js";

export async function putFile(files) {
  const client = new Web3Storage({
    token: import.meta.env.VITE_WEB3STORAGE_TOKEN,
  });

  // const file = getFilesFromPath(path);
  // console.log(file);
  // const file = [new File(["hello world"], "hello.txt", { type: "text/plain" })];

  return await client.put(files);
}
