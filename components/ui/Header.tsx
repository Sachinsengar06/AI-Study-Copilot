interface HeaderProps{
    title:string;
    subtitle:string;
    headingType?:string;
}
export default function Header({title, subtitle,headingType}:HeaderProps){
    return(
        <div className="mb-8">
        <h1 className={`${headingType=="small"?"text-xl":"text-3xl"} font-bold text-gray-900 dark:text-white mb-2`}>{title}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    )
}