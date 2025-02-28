"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface Item {
  Id: number;
  Code: string;
  Name: string;
  CategoryId: number;
  Price: number;
  Unit: number;
  IsActive: boolean;
  CreateBy?: number;
  CreateOn?: string;
  UpdateBy?: number;
  UpdateOn?: string;
}

const ItemPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeStatus, setActiveStatus] = useState("all");

  // This object matches the structure in your example
  const [newItem, setNewItem] = useState<Item>({
    Id: 0,
    Code: "",
    Name: "",
    CategoryId: 0,
    Price: 0.0,
    Unit: 0,
    IsActive: false,
    CreateBy: 0,
    CreateOn: "2014-12-31T23:59:59.938Z",
    UpdateBy: 0,
    UpdateOn: "2014-12-31T23:59:59.938Z",
  });

  // ====================== 1) GET ITEMS ======================
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Item[]>(
        "https://sicl-dev.outsystemscloud.com/PORequest/rest/API/GetItem",
        {
          headers: {
            Authorization: "P@ssw0rd", // Your provided header
          },
        }
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
      alert("An error occurred while fetching items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ====================== 2) SEARCH FUNCTION ======================
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.Id.toString().includes(query) ||
      item.Code.toLowerCase().includes(query) ||
      item.Name.toLowerCase().includes(query) ||
      item.CategoryId.toString().includes(query) ||
      item.Price.toString().includes(query) ||
      item.Unit.toString().includes(query) ||
      (item.IsActive ? "active" : "inactive").includes(query)
    );
  });

  // ====================== 3) MODAL HANDLERS ======================
  const handleAddItem = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset newItem fields to defaults
    setNewItem({
      Id: 0,
      Code: "",
      Name: "",
      CategoryId: 0,
      Price: 0.0,
      Unit: 0,
      IsActive: false,
      CreateBy: 0,
      CreateOn: "2014-12-31T23:59:59.938Z",
      UpdateBy: 0,
      UpdateOn: "2014-12-31T23:59:59.938Z",
    });
  };

  // ====================== 4) FORM INPUT CHANGE ======================
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setNewItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ====================== 5) POST (SAVE) NEW ITEM ======================
  const handleSubmit = async () => {
    // Simple validation checks
    if (!newItem.Code || !newItem.Name) {
      alert("Code and Name are required.");
      return;
    }

    try {
      // Convert fields that are numeric
      const payload: Item = {
        ...newItem,
        Id: Number(newItem.Id),
        CategoryId: Number(newItem.CategoryId),
        Price: Number(newItem.Price),
        Unit: Number(newItem.Unit),
        // Keep IsActive, CreateBy, CreateOn, etc. as is, or parse if needed
      };

      const response = await axios.post(
        "https://sicl-dev.outsystemscloud.com/PORequest/rest/API/PostItem",
        payload,
        {
          headers: {
            Authorization: "P@ssw0rd", // Your provided header
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Optimistically update local list
        setItems((prevItems) => [...prevItems, payload]);
        handleCloseModal();
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("An error occurred while adding the item.");
    }
  };

  // ====================== 6) RENDER COMPONENT ======================
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center ml-20 mt-20">
        <h1 className="text-3xl font-bold">Items Management</h1>
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
        >
          ADD ITEM
        </button>
      </div>

      {/* Search bar */}
      <div className="mt-6 flex items-center justify-between ml-20 mt-[50px]">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder=""
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

      {/* Table */}
      <div className="max-w-7xl mx-auto mt-10">
        {loading ? (
          <div className="text-center">Loading items...</div>
        ) : (
          <table className="min-w-full table-auto border-collapse border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-center font-bold">Id</th>
                <th className="p-2 text-center font-bold">Code</th>
                <th className="p-2 text-center font-bold">Name</th>
                <th className="p-2 text-center font-bold">CategoryId</th>
                <th className="p-2 text-center font-bold">Price</th>
                <th className="p-2 text-center font-bold">Unit</th>
                <th className="p-2 text-center font-bold">IsActive</th>
                {/* If you need to show CreateOn, UpdateOn, etc., add more <th> here */}
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.Id} className="hover:bg-blue-50">
                  <td className="p-2 text-center">{item.Id}</td>
                  <td className="p-2 text-center">{item.Code}</td>
                  <td className="p-2 text-center">{item.Name}</td>
                  <td className="p-2 text-center">{item.CategoryId}</td>
                  <td className="p-2 text-center">{item.Price}</td>
                  <td className="p-2 text-center">{item.Unit}</td>
                  <td className="p-2 text-center">
                    {item.IsActive ? "Yes" : "No"}
                  </td>
                  {/* If you need to display CreateOn or UpdateOn, do so here */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal for Add Item */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-auto">
            <h2 className="text-xl font-bold mb-4">Add Item</h2>

            {/* ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Id</label>
              <input
                name="Id"
                value={newItem.Id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
              />
            </div>

            {/* Code */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Code</label>
              <input
                name="Code"
                value={newItem.Code}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                name="Name"
                value={newItem.Name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
              />
            </div>

            {/* CategoryId */}
            <div className="mb-4">
              <label className="block text-sm font-medium">CategoryId</label>
              <input
                name="CategoryId"
                value={newItem.CategoryId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
                name="Price"
                value={newItem.Price}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
                step="0.01"
              />
            </div>

            {/* Unit */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Unit</label>
              <input
                name="Unit"
                value={newItem.Unit}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
              />
            </div>

            {/* IsActive */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="IsActive"
                checked={newItem.IsActive}
                onChange={handleInputChange}
                className="w-5 h-5"
              />
              <label className="ml-2 text-sm font-medium">Is Active</label>
            </div>

            {/* (Optional) CreateOn, UpdateOn, etc.
                You can add more fields if you want them to be user-editable.
                Otherwise, leave them as defaults or hidden.
            */}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={handleCloseModal}
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

export default ItemPage;
