import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border hover:bg-gray-100">
                <td className="border p-3 text-center">{index + 1}</td>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3 flex justify-center gap-4">
                  <Link to={`/edit-user/${user.id}`} className="text-blue-500 font-semibold hover:underline">Edit</Link>
                  <button className="text-red-500 font-semibold hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
