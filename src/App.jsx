import React, { useEffect, useState } from "react";
import "./App.css";
import { AppRouter } from "./components/Router/AppRouter";
import { get, query, ref } from "firebase/database";
import { db } from "./Firebase";
import { AccountRepository } from "./components/Shared/Repository/AccountRepository";

function App() {
  const accountRepository = new AccountRepository();
  const [account, setAccount] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchData();
    getUsers();
  }, []);

  const fetchData = async () => {
    const fetchedAccount = await accountRepository.getAccount();
    setAccount(fetchedAccount);
  };

  const getUsers = async () => {
    const readNewLogEntries = await get(query(ref(db, "/")));
    setAllUsers(readNewLogEntries.val());
  };

  const getCurrentUserRole = () => {
    const ourUser = Object.values(allUsers).find(
      (user) => user.address === account?.getId()
    );
    return ourUser?.role || "guest";
  };

  // return <AppRouter role={getCurrentUserRole()} />;
  return <AppRouter role={"admin"} />;
}

export default App;
