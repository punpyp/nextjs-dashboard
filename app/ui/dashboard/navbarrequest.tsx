"use client";

import { useRouter } from "next/navigation";

export default function NavbarRequest() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-start space-x-10">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 text-gray-600 px-3 py-2 rounded-md font-semibold">
          De
        </div>
        <span className="text-gray-700 font-medium">PO</span>
      </div>

      <ul className="flex space-x-6">
        <li className="relative">
          <span>Requests</span>
        </li>
      </ul>
    </nav>
  );
}
