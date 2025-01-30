import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">User Management Dashboard</h1>
          <div>
            <Link to="/" className="px-4 hover:underline">User List</Link>
            <Link to="/add-user" className="px-4 hover:underline">Add User</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<UserForm />} />
            <Route path="/edit-user/:id" element={<UserForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
