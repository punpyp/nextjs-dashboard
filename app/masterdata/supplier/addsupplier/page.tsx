// "use client";

// import { useState } from "react";

// // Add User Modal Component
// const AddUserModal = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className="flex items-center gap-4">
//       <select className="w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//         <option value="">- Select Item -</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <button
//         onClick={handleOpen}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         ADD ITEM
//       </button>
//     </div>
//   );
// };

// // Main Supplier Management Page
// const SupplierPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const handleSearchChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => setSearchQuery(event.target.value);

//   return (
//     <div className="p-10 bg-white min-h-screen">
//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-8">Add New Supplier</h1>

//       {/* Form */}
//       <div className="grid grid-cols-2 gap-10">
//         {/* Left Side (Supplier Info) */}
//         <div>
//           {/* Supplier Code */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-3">
//               Supplier Code
//             </label>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Supplier Name */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-3">
//               Supplier Name
//             </label>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Is Active */}
//           <div className="flex items-center gap-3">
//             <label className="text-sm font-medium">Is Active</label>
//             <input type="checkbox" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Right Side (Item List) */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Item List</label>
//           <AddUserModal />

//           {/* Item Table */}
//           <div className="mt-5 bg-white border border-gray-300 rounded-md">
//             <div className="p-3 border-b font-semibold">
//               Items Code - Item Name
//             </div>
//             <div className="p-3 border-b">
//               Item 1 - Name 1 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 2 - Name 2 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 3 - Name 3 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 4 - Name 4 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3">
//               Item 5 - Name 5 <span className="float-right">Price</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center mt-10 gap-4">
//         <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
//           CANCEL
//         </button>
//         <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           SAVE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SupplierPage;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // ✅ Import useRouter

// // Add User Modal Component
// const AddUserModal = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className="flex items-center gap-4">
//       <select className="w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//         <option value="">- Select Item -</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <button
//         onClick={handleOpen}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         ADD ITEM
//       </button>
//     </div>
//   );
// };

// // Main Supplier Management Page
// const SupplierPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter(); // ✅ Initialize useRouter

//   const handleSearchChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => setSearchQuery(event.target.value);

//   // ✅ New function to handle cancel button click
//   const handleCancel = () => {
//     router.push("/masterdata/supplier");
//   };

//   return (
//     <div className="p-10 bg-white min-h-screen">
//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-8">Add New Supplier</h1>

//       {/* Form */}
//       <div className="grid grid-cols-2 gap-10">
//         {/* Left Side (Supplier Info) */}
//         <div>
//           {/* Supplier Code */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-3">
//               Supplier Code
//             </label>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Supplier Name */}
//           <div className="mb-5">
//             <label className="block text-sm font-medium mb-3">
//               Supplier Name
//             </label>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Is Active */}
//           <div className="flex items-center gap-3">
//             <label className="text-sm font-medium">Is Active</label>
//             <input type="checkbox" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Right Side (Item List) */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Item List</label>
//           <AddUserModal />

//           {/* Item Table */}
//           <div className="mt-5 bg-white border border-gray-300 rounded-md">
//             <div className="p-3 border-b font-semibold">
//               Items Code - Item Name
//             </div>
//             <div className="p-3 border-b">
//               Item 1 - Name 1 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 2 - Name 2 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 3 - Name 3 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3 border-b">
//               Item 4 - Name 4 <span className="float-right">Price</span>
//             </div>
//             <div className="p-3">
//               Item 5 - Name 5 <span className="float-right">Price</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center mt-10 gap-4">
//         <button
//           onClick={handleCancel} // ✅ Handle cancel button click
//           className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100"
//         >
//           CANCEL
//         </button>
//         <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           SAVE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SupplierPage;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter

// API URLs
const GET_ITEMS_API =
  "https://sicl-dev.outsystemscloud.com/PORequest/rest/API/GetItem";
const POST_SUPPLIER_API =
  "https://sicl-dev.outsystemscloud.com/PORequest/rest/API/PostSupplier";

// Fetch items API function
const fetchItems = async () => {
  try {
    const response = await fetch(GET_ITEMS_API, {
      method: "GET",
      headers: {
        Authorization: "P@ssw0rd",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

// Post supplier API function
const postSupplier = async (supplierData: any) => {
  try {
    const response = await fetch(POST_SUPPLIER_API, {
      method: "POST",
      headers: {
        Authorization: "P@ssw0rd",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplierData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting supplier:", error);
    return null;
  }
};

// Add User Modal Component
const AddUserModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center gap-4">
      <select className="w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">- Select Item -</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ADD ITEM
      </button>
    </div>
  );
};

// Main Supplier Management Page
const SupplierPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<any[]>([]); // State for items
  const [supplierData, setSupplierData] = useState({
    Code: "",
    Name: "",
    IsActive: false,
    Item: [
      {
        Id: 1234567891234567,
        Code: "",
        Name: "",
        Price: 0.1,
      },
    ],
  }); // State for supplier form data
  const router = useRouter(); // ✅ Initialize useRouter

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

  // ✅ New function to handle cancel button click
  const handleCancel = () => {
    router.push("/masterdata/supplier");
  };

  // Fetch items when the page loads
  useEffect(() => {
    const getItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };
    getItems();
  }, []);

  // Handle submit function for POST
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await postSupplier(supplierData);
    if (response) {
      console.log("Supplier created successfully:", response);
      // Handle success, maybe redirect to a different page
    }
  };

  return (
    <div className="p-10 bg-white min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Add New Supplier</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          {/* Left Side (Supplier Info) */}
          <div>
            {/* Supplier Code */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-3">
                Supplier Code
              </label>
              <input
                type="text"
                value={supplierData.Code}
                onChange={(e) =>
                  setSupplierData({ ...supplierData, Code: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Supplier Name */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-3">
                Supplier Name
              </label>
              <input
                type="text"
                value={supplierData.Name}
                onChange={(e) =>
                  setSupplierData({ ...supplierData, Name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Is Active */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Is Active</label>
              <input
                type="checkbox"
                checked={supplierData.IsActive}
                onChange={(e) =>
                  setSupplierData({
                    ...supplierData,
                    IsActive: e.target.checked,
                  })
                }
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Right Side (Item List) */}
          <div>
            <label className="block text-sm font-medium mb-2">Item List</label>
            <AddUserModal />

            {/* Item Table */}
            <div className="mt-5 bg-white border border-gray-300 rounded-md">
              <div className="p-3 border-b font-semibold">
                Items Code - Item Name
              </div>
              {items.map((item) => (
                <div key={item.Id} className="p-3 border-b">
                  {item.Code} - {item.Name}{" "}
                  <span className="float-right">{item.Price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={handleCancel} // ✅ Handle cancel button click
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierPage;
