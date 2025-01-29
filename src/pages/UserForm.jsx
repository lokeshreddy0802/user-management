import React, { useEffect, useState } from "react";
import { addUser, updateUser, getUsers } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
    const [user, setUser] = useState({ name: "", email: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchUserDetails();
        }
    }, [id]);

    // Fetch user details for editing
    const fetchUserDetails = async () => {
        const users = await getUsers();
        const foundUser = users.find(u => u.id === parseInt(id));
        if (foundUser) setUser(foundUser);
    };

    // Handle input change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateUser(parseInt(id), user);
        } else {
            await addUser(user);
        }
        navigate("/");
    };

    return (
        <div>
            <h2>{id ? "Edit" : "Add"} User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserForm;
