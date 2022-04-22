import React, { useState, useEffect } from "react";
import "./AuthenticateForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../Firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { AccountRepository } from "../Shared/Repository/AccountRepository";

const AuthenticateForm = () => {
  const accountRepository = new AccountRepository();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedAccount = await accountRepository.getAccount();
    setAccount(fetchedAccount);
  };

  const [startDate, setStartDate] = useState(new Date());

  const [state, setState] = useState({
    name: "",
    level: "",
    place: "",
    year: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const addUser = async () => {
    const uuid = uid();
    const user = {
      address: account.getId(),
      role: "guest",
      hasApplied: false,
    };
    await set(ref(db, `user-${uuid}`), user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addUser();
  };

  return (
    <div className="w-2/5 mx-auto">
      <div className="text-2xl text-indigo-500 font-bold mt-12 mb-8">
        Apply to become a Member of Blockich!
      </div>
      <div className="shadow-md px-8 py-4 bg-gray-50 rounded-md">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="">
            <label
              className="text-gray-700 font-semibold"
              htmlFor="id_for_name"
            >
              Name
            </label>
            <input
              type="text"
              value={state.name}
              onChange={(event) => handleChange(event)}
              id="id_for_name"
              className="mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              name="name"
              placeholder="Enter title"
            />

            <label
              className="text-gray-700 font-semibold"
              htmlFor="id_for_level"
            >
              Education Level
            </label>
            <input
              type="text"
              value={state.level}
              onChange={(event) => handleChange(event)}
              id="id_for_level"
              className="mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              name="level"
              placeholder="Education Level"
            />
            <label
              className="text-gray-700 font-semibold"
              htmlFor="id_for_place"
            >
              Place of Graduation
            </label>
            <input
              id="id_for_place"
              value={state.place}
              onChange={(event) => handleChange(event)}
              className="mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              name="place"
              placeholder="Enter Description"
            />

            <label
              className="text-gray-700 font-semibold"
              htmlFor="id_for_year"
            >
              Year of Graduation
            </label>
            <DatePicker
              className="mb-5"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <label
              className="text-gray-700 font-semibold"
              htmlFor="id_for_file"
            >
              Upload Diploma
            </label>
            <input
              type="file"
              onChange={(event) => handleChange(event)}
              id="id_for_file"
              className="w-full mt-2 newPostFile"
              name="file"
              placeholder="Enter Description"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 mt-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthenticateForm;
