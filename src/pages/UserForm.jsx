import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, formData)
        .then(() => navigate("/"));
    } else {
      axios.post("https://jsonplaceholder.typicode.com/users", formData)
        .then(() => navigate("/"));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          {id ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
