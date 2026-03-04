"use client"

import { MdOutlinePalette } from "react-icons/md";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import {LuUser } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/ui/Header";


interface OptionCardProps {
  Icon: IconType;
  title: string;
  subtitle: string;
  heading?: string;
  buttons?: string[];
  name?: string;
  email?: string;
  onButtonClick?: (value: string) => void; 
  activeValue?: string; 
}

const OptionCard = ({
  Icon,
  title,
  subtitle,
  heading,
  buttons = [],
  name,
  email,
  onButtonClick,
  activeValue,
}: OptionCardProps) => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 shadow-sm p-6 mb-4 transition-all border border-transparent dark:border-gray-700">
      <header className="flex gap-4 mb-4 items-center">
        {/* Added flex-shrink-0 so icon never squishes */}
        <div className="shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Icon className="text-2xl text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </header>

      {name && email && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-md">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        </div>
      )}

      {buttons.length > 0 && (
        <div className="mt-4">
          {heading && (
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500 dark:text-gray-400">
              {heading}
            </h2>
          )}
          <div className="flex flex-wrap gap-3">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => onButtonClick?.(btn)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeValue === btn
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                  }
                `}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Setting() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme)
  const handleThemeChange = (value: string) => {
    // Cleaner logic: if choice doesn't match current theme, toggle
    if (value.toLowerCase() !== theme) {
      toggleTheme();
    }
  };

  return (
    <div className="px-3 py-1">
      <Header title="Setting" subtitle=" Manage your account settings and preferences."/>

      <div className="space-y-6">
        <OptionCard
          title="Profile"
          subtitle="View your account information"
          Icon={LuUser}
          name="Sachin"
          email="Sachin@gmail.com"
        />

        <OptionCard
          title="Appearance"
          subtitle="Customize how the app looks"
          Icon={MdOutlinePalette}
          heading="Theme"
          buttons={["Light", "Dark"]}
          activeValue={theme === "dark" ? "Dark" : "Light"}
          onButtonClick={handleThemeChange}
        />

        <OptionCard
          title="Language & Region"
          subtitle="Set your preferred language"
          Icon={BsGlobe}
          heading="Language"
          buttons={["English(US)"]}
          activeValue="English(US)"
        />

        <OptionCard
          title="Security"
          subtitle="Manage your password and security settings"
          Icon={GoLock}
          buttons={["Change password"]}
          onButtonClick={(val) => alert("Redirecting to password change...")}
        />
      </div>
    </div>
  );
}