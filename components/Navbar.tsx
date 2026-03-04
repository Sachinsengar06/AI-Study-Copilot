"use client";

import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch, LuUser } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="flex items-center py-2 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
      
      {/* Search */}
      <div className="flex flex-1 items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2 transition-colors">
        <LuSearch className="text-xl text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full outline-none bg-transparent text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-end gap-4 ml-6">
        
        {/* Notification */}
        <div className="text-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors text-gray-700 dark:text-gray-300">
          <IoMdNotificationsOutline />
        </div>

        {/* Profile */}
        <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-2 py-1 transition-colors">
          <button className="text-2xl bg-blue-100 dark:bg-blue-900/40 rounded-full p-2">
            <LuUser className="text-blue-700 dark:text-blue-400" />
          </button>
        </div>

      </div>
    </div>
  );
}