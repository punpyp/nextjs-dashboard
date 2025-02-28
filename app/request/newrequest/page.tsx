"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewRequestList = () => {
  interface Item {
    itemCode: string;
    itemName: string;
    unit: string;
    quantity: string;
    price: string;
    amount: string;
    itemCategory: string;
    selectedItem: string;
  }

  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({
    itemCode: "",
    itemName: "",
    unit: "",
    quantity: "",
    price: "",
    itemCategory: "",
    selectedItem: "",
    amount: "",
  });
  const [comment, setComment] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddItem = () => {
    if (Object.values(newItem).some((value) => value === "")) return;
    setItems([...items, newItem]);
    setNewItem({
      itemCode: "",
      itemName: "",
      unit: "",
      quantity: "",
      price: "",
      itemCategory: "",
      selectedItem: "",
      amount: "",
    });
    setIsPopupVisible(false);
  };

  const handleRemoveItem = (index: number): void => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const router = useRouter();

  const handleCancel = () => {
    router.push("/request");
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">New Request List</h1>
      <div>
        <label className="block text-sm font-medium mb-1">
          Requester Name: xxxxxxxxx
        </label>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Supplier Code
            </label>
            <input type="text" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Supplier Name
            </label>
            <input type="text" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Request Date
            </label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsPopupVisible(true)}
          >
            + Add Item
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Item Code</th>
              <th className="p-2">Item Name</th>
              <th className="p-2">Unit</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Price</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.itemCode}</td>
                <td className="p-2">{item.itemName}</td>
                <td className="p-2">{item.unit}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <label className="block text-sm font-medium mt-4 mb-1">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>

        <div className="mt-4 flex justify-between items-center">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[450px]">
            <h2 className="text-lg font-bold mb-4">Add Item</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Item Category
              </label>
              <select
                name="itemCategory"
                value={newItem.itemCategory}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              >
                <option value=""></option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Selected Item
              </label>
              <select
                name="selectedItem"
                value={newItem.selectedItem}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                disabled={!newItem.itemCategory} // Prevents selection until category is chosen
              >
                <option value=""></option>
                {newItem.itemCategory === "C1" && (
                  <>
                    <option value="I1">I1</option>
                    <option value="I2">I2</option>
                  </>
                )}
                {newItem.itemCategory === "C2" && (
                  <>
                    <option value="I3">I3</option>
                    <option value="I4">I4</option>
                  </>
                )}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={newItem.quantity}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Price: xxxx
              </label>
              <label className="block text-sm font-medium mb-1">
                Amount: xxxx
              </label>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsPopupVisible(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddItem}
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

export default NewRequestList;
