import { IconType } from "react-icons";
import { BsThreeDotsVertical } from "react-icons/bs";

interface CardProps {
  title: string;
  description: string;
  sideText?: string;
  buttonText?: string;
  Icon: IconType;
  label?: string;
  date?: string;
  iconBg: string;
  iconColor: string;
}
export default function Card({
  title,
  description,
  sideText,
  buttonText,
  Icon,
  label,
  date,
  iconBg,
  iconColor,
}: CardProps) {
  return (
    <div className="
      bg-white 
      dark:bg-gray-800 
      rounded-lg 
      p-4 
      shadow-sm 
      w-full
      transition-colors
    ">
      
      <header className="flex justify-between items-center">
        <div className={`p-2 rounded-md ${iconBg}`}>
          <Icon className={`text-xl ${iconColor}`} />
        </div>

        {sideText ? (
          <p className="text-gray-500 dark:text-gray-400">
            {sideText}
          </p>
        ) : (
          <div className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <BsThreeDotsVertical className="text-gray-600 dark:text-gray-300" />
          </div>
        )}
      </header>

      <div>
        <h1 className="text-3xl font-bold pt-5 text-gray-900 dark:text-white">
          {title}
        </h1>

        <p className="text-gray-500 dark:text-gray-400">
          {description || date}
        </p>
      </div>

      <footer className="flex justify-between items-end mt-4">
        {label && (
          <p className="
            text-gray-600 
            dark:text-gray-300 
            border 
            border-gray-300 
            dark:border-gray-600 
            rounded-full 
            px-3 
            py-1 
            text-sm
          ">
            {label}
          </p>
        )}

        {buttonText && (
          <button className="
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            rounded-md 
            px-3 
            py-1 
            text-sm 
            transition
          ">
            {buttonText}
          </button>
        )}
      </footer>

    </div>
  );
}
