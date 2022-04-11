import React, { useEffect, useState } from "react";
import Jdenticon from "react-jdenticon";
import { get, query, ref, update } from "firebase/database";
import { db } from "../../Firebase";

const AdminPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allUsersRaw, setAllUsersRaw] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUserName = (address) => {
    for (const [userUid, userData] of Object.entries(allUsersRaw)) {
      if (userData.address === address) {
        return userUid;
      }
    }
    return null;
  };

  const getUsers = async () => {
    const readNewLogEntries = await get(query(ref(db, "/")));
    setAllUsers(Object.values(readNewLogEntries.val()));
    setAllUsersRaw(readNewLogEntries.val());
  };

  const approveUser = async (address) => {
    console.log(getUserName(address));
    const dbRef = ref(db, `/${getUserName(address)}`);
    update(dbRef, { role: "authenticated" })
      .then(() => {
        console.log("Data updated");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
        <span className="block">Welcome to the admin page</span>
        <span className="block text-indigo-500" />
      </h2>

      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr key={user.address}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Jdenticon
                              size="48"
                              value={user.address ?? "unknown address"}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.address}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.role}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {["guest", "notAuthenticated"].includes(user.role) && (
                          <span
                            className="py-2 px-4 justify-end bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                            onClick={() => approveUser(user.address)}
                          >
                            Approve
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
