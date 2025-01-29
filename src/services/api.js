import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Sample user list
let users = [
    { id: 1, name: "Aarav Sharma", email: "aarav.sharma@gmail.com" },
    { id: 2, name: "Neha Verma", email: "neha.verma@gmail.com" },
    { id: 3, name: "Rohan Gupta", email: "rohan.gupta@gmail.com" },
    { id: 4, name: "Sanya Iyer", email: "sanya.iyer@gmail.com" },
    { id: 5, name: "Vikram Mehta", email: "vikram.mehta@gmail.com" },
    { id: 6, name: "Priya Nair", email: "priya.nair@gmail.com" },
    { id: 7, name: "Aditya Malhotra", email: "aditya.malhotra@gmail.com" },
    { id: 8, name: "Kavya Reddy", email: "kavya.reddy@gmail.com" },
    { id: 9, name: "Arjun Das", email: "arjun.das@gmail.com" },
    { id: 10, name: "Meera Chatterjee", email: "meera.chatterjee@gmail.com" }
];

// Fetch all users
export const getUsers = async () => {
    return users;
};

// Add a new user with a unique ID
export const addUser = async (user) => {
    const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    user.id = maxId + 1; // Assign next available ID
    users.push(user);
    return users; // Return updated user list
};

// Edit a user
export const updateUser = async (id, updatedUser) => {
    users = users.map(user => user.id === id ? { ...user, ...updatedUser } : user);
    return users;
};

// Delete a user and immediately reassign IDs
export const deleteUser = async (id) => {
    users = users.filter(user => user.id !== id);

    // Reassign IDs to maintain sequence
    users = users.map((user, index) => ({ ...user, id: index + 1 }));

    return users; // Return updated user list
};
