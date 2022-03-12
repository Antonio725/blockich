import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import SocialNetwork from "../../abis/Test.json";

function AccountAddress() {
  const [account, setAccount] = useState();

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setAccount(account);

    const add = "0xd3ff4d5d8e1d28062644ee8251f40c88d8d6ff60";

    const test = new ethers.Contract(add, SocialNetwork.abi, provider);
    console.log(test);

    const postCount = await test.postCount();

    console.log("POST IS COUNT:", postCount.toString());

    for (let i = 1; i <= postCount; i++) {
      const post = await test.posts(i);

      // treba spremit u state da se mogu manipulisat
      console.log(post[1].toString());
    }

    // test.createPost()
    // const postCount = await test.methods.postCount().call()
    // this.setState({ postCount })
    // console.log(' POST COUNT IS: ', postCount)

    console.log("AKKAUNT ADDRESS : ", account);
  };

  return (
    <div className="justify-center">
      <h3 className="text-m">{account}</h3>
    </div>
  );
}

export default AccountAddress;
