"use client";

import Link from "next/link";
import {
  LuBrain,
  LuLayoutDashboard,
  LuSettings,
  LuBook,
} from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FiBookOpen } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `
    flex items-center gap-2 rounded-md p-3 transition-colors
    ${
      pathname === path
        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }
  `;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors">

      {/* Header */}
      <header className="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
        <LuBrain className="text-2xl text-blue-600 dark:text-blue-400" />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          AI Study Copilot
        </h1>
      </header>

      {/* Navigation */}
      <div className="flex flex-col gap-2 mt-2 p-3">
        <Link href="/dashboard" className={linkStyle("/dashboard")}>
          <LuLayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>

        <Link href="/notes" className={linkStyle("/notes")}>
          <FiBookOpen className="w-5 h-5" />
          My Notes
        </Link>

        <Link href="/study" className={linkStyle("/study")}>
          <LuBook className="w-5 h-5" />
          Study
        </Link>

        <Link href="/analytics" className={linkStyle("/analytics")}>
          <AiOutlineLineChart className="w-5 h-5" />
          Analytics
        </Link>

        <Link href="/setting" className={linkStyle("/setting")}>
          <LuSettings className="w-5 h-5" />
          Settings
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 px-3 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/uploadNotes"
          className="w-full flex gap-2 items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg rounded-md py-3 px-2 transition-colors"
        >
          <MdOutlineFileUpload className="text-2xl" />
          Upload Notes
        </Link>
      </footer>
    </div>
  );
}