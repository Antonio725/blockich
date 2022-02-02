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
            <h3> Your balance: {balance}</h3>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => getBalance()}> Show my balance</button>
        </div>

    );

};

export default WalletBalance;