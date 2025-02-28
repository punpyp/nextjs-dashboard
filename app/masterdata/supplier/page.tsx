// "use client";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// import axios from "axios";

// // Main Supplier Management Page
// const SupplierPage = () => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "john_doe",
//       name: "John Doe",
//       email: "john@example.com",
//       role: "Admin",
//       position: "Manager",
//       isActive: true,
//     },
//     {
//       id: 2,
//       username: "jane_doe",
//       name: "Jane Doe",
//       email: "jane@example.com",
//       role: "User",
//       position: "Developer",
//       isActive: false,
//     },
//     {
//       id: 3,
//       username: "joey_doe",
//       name: "Joey Doe",
//       email: "joey@example.com",
//       role: "User",
//       position: "Developer",
//       isActive: false,
//     },
//     {
//       id: 4,
//       username: "janey_doe",
//       name: "Janey Doe",
//       email: "janey@example.com",
//       role: "Admin",
//       position: "Developer",
//       isActive: true,
//     },
//   ]);

//   const [activeStatus, setActiveStatus] = useState("all");

//   // Handle search query change
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
//     setSearchQuery(event.target.value);

//   // Filtered users based on active status and search query
//   const filteredUsers = users.filter((user) => {
//     // Convert the search query to lowercase for case-insensitive search
//     const lowercasedQuery = searchQuery.toLowerCase();

//     // Match against multiple fields: name, email, role, or username
//     const matchesSearch =
//       (user.name && user.name.toLowerCase().includes(lowercasedQuery)) ||
//       (user.email && user.email.toLowerCase().includes(lowercasedQuery)) ||
//       (user.username &&
//         user.username.toLowerCase().includes(lowercasedQuery)) ||
//       (user.role && user.role.toLowerCase().includes(lowercasedQuery));

//     // Filter by active status
//     const matchesStatus =
//       activeStatus === "all"
//         ? true
//         : activeStatus === "active"
//         ? user.isActive
//         : !user.isActive;

//     // Return true if both search and status match
//     return matchesSearch && matchesStatus;
//   });

//   // For ADD SUPPLIER button click
//   const handleAddSupplierClick = () => {
//     router.push("/masterdata/supplier/addsupplier"); // Navigate to the addsupplier page
//   };

//   return (
//     <div className="p-4">
//       {/* Title and Add Supplier Button */}
//       <div className="flex justify-between items-center ml-20 mt-20">
//         <h1 className="text-3xl font-bold">Supplier Management</h1>
//         <button
//           onClick={handleAddSupplierClick} // Use handleAddSupplierClick to navigate
//           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
//         >
//           ADD SUPPLIER
//         </button>
//       </div>

//       {/* Search Bar and Status Filter */}
//       <div className="mt-6 flex items-center justify-between ml-20 mt-[50px]">
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-96 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <FaSearch className="text-white" />
//           </button>
//         </div>

//         {/* Status Filter Buttons */}
//         <div className="inline-flex border border-gray-300 rounded-md overflow-hidden mr-20">
//           <button
//             className={`px-4 py-2 ${
//               activeStatus === "all"
//                 ? "bg-gray-400 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveStatus("all")}
//           >
//             All
//           </button>
//           <button
//             className={`px-4 py-2 ${
//               activeStatus === "active"
//                 ? "bg-gray-400 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveStatus("active")}
//           >
//             Active
//           </button>
//           <button
//             className={`px-4 py-2 ${
//               activeStatus === "inactive"
//                 ? "bg-gray-400 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//             onClick={() => setActiveStatus("inactive")}
//           >
//             Inactive
//           </button>
//         </div>
//       </div>

//       {/* User Table */}
//       <div className="max-w-7xl mx-auto mt-10">
//         <table className="min-w-full table-auto border-collapse border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 text-center font-bold">Employee Code</th>
//               <th className="p-2 text-center font-bold">Name</th>
//               <th className="p-2 text-center font-bold">IsActive</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-blue-50">
//                 <td className="p-2 text-center">{user.id}</td>
//                 <td className="p-2 text-center">{user.name}</td>
//                 <td className="p-2 text-center">
//                   {user.isActive ? "Yes" : "No"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SupplierPage;

"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";

// Main Supplier Management Page
const SupplierPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [activeStatus, setActiveStatus] = useState("all");

  // Fetch suppliers from API
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get(
          "https://sicl-dev.outsystemscloud.com/PORequest/rest/API/GetSupplier",
          {
            headers: {
              Authorization: "P@ssw0rd",
            },
          }
        );
        console.log(response.data);

        if (response.data && response.data.length > 0) {
          const suppliers = response.data.map((supplier: any) => ({
            id: supplier.Id,
            name: supplier.Name,
            isActive: supplier.IsActive,
          }));
          setUsers(suppliers);
        } else {
          console.log("No suppliers found in response.");
        }
      } catch (error) {
        console.error("Error fetching suppliers", error);
      }
    };

    fetchSuppliers();
  }, []);

  // Handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

  // Filtered users based on active status and search query
  const filteredUsers = users.filter((user) => {
    // Convert the search query to lowercase for case-insensitive search
    const lowercasedQuery = searchQuery.toLowerCase();

    // Match against multiple fields: name, email, role, or username
    const matchesSearch =
      user.name && user.name.toLowerCase().includes(lowercasedQuery);

    // Filter by active status
    const matchesStatus =
      activeStatus === "all"
        ? true
        : activeStatus === "active"
        ? user.isActive
        : !user.isActive;

    // Return true if both search and status match
    return matchesSearch && matchesStatus;
  });

  // For ADD SUPPLIER button click
  const handleAddSupplierClick = () => {
    router.push("/masterdata/supplier/addsupplier"); // Navigate to the addsupplier page
  };

  return (
    <div className="p-4">
      {/* Title and Add Supplier Button */}
      <div className="flex justify-between items-center ml-20 mt-20">
        <h1 className="text-3xl font-bold">Supplier Management</h1>
        <button
          onClick={handleAddSupplierClick} // Use handleAddSupplierClick to navigate
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
        >
          ADD SUPPLIER
        </button>
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
              <th className="p-2 text-center font-bold">IsActive</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-blue-50">
                <td className="p-2 text-center">{user.id}</td>
                <td className="p-2 text-center">{user.name}</td>
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

export default SupplierPage;
