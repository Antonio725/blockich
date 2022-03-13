import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import SocialNetwork from "../../abis/Test.json";

function AccountAddress() {
  const [account, setAccount] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setAccount(account);

    const add = "0x0c52555b34cfc05308400361e412c9c296e6dcf3";

    const test = new ethers.Contract(add, SocialNetwork.abi, provider);
    console.log("CONTRACT", test);

    const postCount = await test.postCount();

    console.log("POST IS COUNT:", postCount.toString());

    const arr = [];
    for (let i = 1; i <= postCount; i++) {
      const post = await test.posts(i);
      arr.push(post);
      // treba spremit u state da se mogu manipulisat
      console.log(post[1].toString());
    }

    setPosts(arr);

    console.log("AKKAUNT ADDRESS : ", account);
  };

  return (
    <div className="justify-center">
      <h3 className="text-m">{account}</h3>
      {posts.map((item) => {
        return (
          <h2>
            {item[2]}-{item[3]}
          </h2>
        );
      })}
    </div>
  );
}

export default AccountAddress;
