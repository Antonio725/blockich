import { Account } from "../Model/Account";

export class AccountRepository {
  async getAccount() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return new Account(account[0]);
  }
}
