"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleDropdown = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-start space-x-10">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-200 text-gray-600 px-3 py-2 rounded-md font-semibold">
          De
        </div>
        <span className="text-gray-700 font-medium">Demo</span>
      </div>

      <ul className="flex space-x-6">
        <li className="relative">
          <button
            onClick={() => handleDropdown("master")}
            className="flex items-center space-x-1 text-gray-700 font-medium hover:text-gray-900"
          >
            <span>MASTER DATA</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          {openDropdown === "master" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
              <li>
                <button
                  onClick={() => handleNavigation("/masterdata/employee")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                >
                  EMPLOYEE
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/masterdata/supplier")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                >
                  SUPPLIER
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/masterdata/items")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                >
                  ITEMS
                </button>
              </li>
            </ul>
          )}
        </li>

        <li className="relative">
          <button
            onClick={() => handleDropdown("report")}
            className="flex items-center space-x-1 text-gray-700 font-medium hover:text-gray-900"
          >
            <span>REPORT</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          {openDropdown === "report" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
              <li>
                <button
                  onClick={() => handleNavigation("/report/report")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                >
                  REPORT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/report/dashboard")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-gray-700"
                >
                  DASHBOARD
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* <button className="bg-transparent text-transparent border-transparent px-4 py-2 rounded-md text-sm font-medium">
        REPORT
      </button> */}
    </nav>
  );
}
