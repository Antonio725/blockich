import { useState } from "react";
import { ethers } from "ethers";


function WalletBalance() {
    
    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    }

    return (

        <div className="justify-center">  
            <button  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" onClick={() => getBalance()}> Show my balance</button>
            <h3 className="text-m"> Balance: {balance}</h3>
        </div>
        

    );

};

export default WalletBalance;