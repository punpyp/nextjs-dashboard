"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Add User Modal Component
const AddUserModal = ({ addUser }: { addUser: (user: any) => void }) => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setRole("");
    setError("");
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const newUser = {
        id: Date.now(), // Temporary unique ID for new user
        code,
        username,
        name: employeename, // Use employeename as name
        email,
        role: isAdmin ? "Admin" : role, // Set role based on isAdmin
        isActive,
        position: role, // Default value for position
      };

      addUser(newUser);
      alert("User added successfully!");
      handleClose();
    } catch (err) {
      console.error("Error adding user:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
      >
        NEW USER
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[500px]">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>

            {/* Username and Password  */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">
                  Employee Code
                </label>
                <input
                  type="text"
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium">
                  Employee Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmployeename(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Confirm Password and Email  */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Role Field with Checkboxes */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g., admin or employee"
                />
              </div>

              <div className="flex items-center space-x-8 mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    className="w-5 h-5 accent-gray-600"
                  />
                  <label className="text-sm font-medium">Is Admin</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="w-5 h-5 accent-gray-600"
                  />
                  <label className="text-sm font-medium">Is Active</label>
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Employee Management Page
const EmployeePage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [users, setUsers] = useState([
    {
      id: 1,
      code: "EMP001",
      username: "john_doe",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      position: "Manager",
      isActive: true,
    },
    {
      id: 2,
      code: "EMP002",
      username: "jane_doe",
      name: "Jane Doe",
      email: "jane@example.com",
      role: "User",
      position: "Developer",
      isActive: false,
    },
    {
      id: 3,
      code: "EMP003",
      username: "joey_doe",
      name: "Joey Doe",
      email: "joey@example.com",
      role: "User",
      position: "Developer",
      isActive: false,
    },
    {
      id: 4,
      code: "EMP004",
      username: "janey_doe",
      name: "Janey Doe",
      email: "janey@example.com",
      role: "Admin",
      position: "Developer",
      isActive: true,
    },
  ]);

  const [activeStatus, setActiveStatus] = useState("all"); // State for active status

  // Handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

  // Filtered users based on active status and search query
  const filteredUsers = users.filter((user) => {
    // Ensure the search query matches name, email, and possibly other fields (case-insensitive)
    const matchesSearch =
      (user.name &&
        user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email &&
        user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.code &&
        user.code.toLowerCase().includes(searchQuery.toLowerCase())); // added 'code' field for search

    const matchesStatus =
      activeStatus === "all"
        ? true
        : activeStatus === "active"
        ? user.isActive
        : !user.isActive;

    return matchesSearch && matchesStatus;
  });

  const addUser = (newUser: any) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4">
      {/* Title and Add User Button */}
      <div className="flex justify-between items-center ml-20 mt-20">
        <h1 className="text-3xl font-bold">Employee Management</h1>
        <AddUserModal addUser={addUser} />
      </div>

      {/* Search Bar and Status Filter */}
      <div className="mt-6 flex items-center justify-between ml-20 mt-[50px]">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-96 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaSearch className="text-white" />
          </button>
        </div>

        {/* Status Filter Buttons */}
        <div className="inline-flex border border-gray-300 rounded-md overflow-hidden mr-20">
          <button
            className={`px-4 py-2 ${
              activeStatus === "all"
                ? "bg-gray-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveStatus("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${
              activeStatus === "active"
                ? "bg-gray-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveStatus("active")}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 ${
              activeStatus === "inactive"
                ? "bg-gray-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveStatus("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="max-w-7xl mx-auto mt-10">
        <table className="min-w-full table-auto border-collapse border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-center font-bold">Employee Code</th>
              <th className="p-2 text-center font-bold">Name</th>
              <th className="p-2 text-center font-bold">Email</th>
              <th className="p-2 text-center font-bold">Position</th>
              <th className="p-2 text-center font-bold">IsActive</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr className="hover:bg-blue-50" key={user.id}>
                <td className="p-2 text-center">{user.code}</td>
                <td className="p-2 text-center">{user.name}</td>
                <td className="p-2 text-center">{user.email}</td>
                <td className="p-2 text-center">{user.position}</td>
                <td className="p-2 text-center">
                  {user.isActive ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
