"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SupplierPage = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    requesterName: "",
    approverName: "",
    supplierCode: "",
    startDate: "",
    endDate: "",
  });

  const [users, setUsers] = useState([
    {
      requesterno: 1,
      supcode: "SUP001",
      supname: "Supplier A",
      amount: 1000,
      status: true,
    },
    {
      requesterno: 2,
      supcode: "SUP002",
      supname: "Supplier B",
      amount: 1500,
      status: false,
    },
    {
      requesterno: 3,
      supcode: "SUP003",
      supname: "Supplier C",
      amount: 2000,
      status: true,
    },
    {
      requesterno: 4,
      supcode: "SUP004",
      supname: "Supplier D",
      amount: 2500,
      status: false,
    },
  ]);

  interface Filters {
    requesterName: string;
    approverName: string;
    supplierCode: string;
    startDate: string;
    endDate: string;
  }

  interface User {
    requesterno: number;
    supcode: string;
    supname: string;
    amount: number;
    status: boolean;
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters: Filters) => ({ ...prevFilters, [name]: value }));
  };

  //   const filteredUsers = users.filter((user) => {
  //     return (
  //       user.supname
  //         .toLowerCase()
  //         .includes(filters.requesterName.toLowerCase()) &&
  //       user.supcode.toLowerCase().includes(filters.supplierCode.toLowerCase())
  //     );
  //   });

  const filteredUsers = users.filter((user) => {
    const matchesRequester = user.supname
      .toLowerCase()
      .includes(filters.requesterName.toLowerCase());
    const matchesApprover = user.supname
      .toLowerCase()
      .includes(filters.approverName.toLowerCase());
    const matchesSupplierCodeOrName =
      user.supcode.toLowerCase().includes(filters.supplierCode.toLowerCase()) ||
      user.supname.toLowerCase().includes(filters.supplierCode.toLowerCase());

    return matchesRequester && matchesApprover && matchesSupplierCodeOrName;
  });

  const handleAddSupplierClick = () => {
    router.push("/request/newrequest");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center ml-20 mt-20">
        <h1 className="text-3xl font-bold">Request List</h1>
        <button
          onClick={handleAddSupplierClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
        >
          NEW REQUEST
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg mb-4 mt-10">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Requester Name
            </label>
            <input
              type="text"
              name="requesterName"
              value={filters.requesterName}
              onChange={handleFilterChange}
              //   placeholder="Search by requester name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Approver Name
            </label>
            <input
              type="text"
              name="approverName"
              value={filters.approverName}
              onChange={handleFilterChange}
              //   placeholder="Search by approver name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Supplier Code - Name
            </label>
            <input
              type="text"
              name="supplierCode"
              value={filters.supplierCode}
              onChange={handleFilterChange}
              //   placeholder="Search by supplier code or name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Request Start Date from
            </label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <table className="min-w-full table-auto border-collapse border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-center font-bold">Request No.</th>
              <th className="p-2 text-center font-bold">Supplier Code</th>
              <th className="p-2 text-center font-bold">Supplier Name</th>
              <th className="p-2 text-center font-bold">Total Amount</th>
              <th className="p-2 text-center font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.requesterno} className="hover:bg-blue-50">
                <td className="p-2 text-center">{user.requesterno}</td>
                <td className="p-2 text-center">{user.supcode}</td>
                <td className="p-2 text-center">{user.supname}</td>
                <td className="p-2 text-center">${user.amount}</td>
                <td className="p-2 text-center">
                  {user.status ? "Active" : "Inactive"}
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
