import { useContext } from "react";
import { menuList } from "../assets/data";
import youtube from "../assets/youtube.png";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { DarkModeContext } from "../context/DarkModeContext";

const ResponsiveMenu = ({ show }) => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  const displayLinks = menuList.map((links) => {
    const { title, src} = links;
    return (
      <li
        className=" 
      flex items-center gap-x-4 p-2  text-center hover:bg-blue-800 rounded-md transition-all ease-in-out duration-300"
        key={title}
      >
        <img src={src} alt={title} />
        <span className="text-white">{title}</span>
      </li>
    );
  });

  return (
    <div
      className={`fixed top-0  bg-indigo-600 dark:bg-slate-950  h-full w-[60%] transition-all duration-1000
     md:hidden shadow-md rounded-r-xl  px-8  pt-2 flex flex-col justify-between z-50
     ${show ? "left-0" : " -left-full"}  `}
    >
      <div>
        <div className="flex items-center gap-x-4 mt-2">
          <img className="w-10 " src={youtube} alt="youtube" />
          <h3 className="text-white font-bold text-2xl ">YouTube</h3>
        </div>

        <nav className=" mt-9">
          <ul className=" space-y-4 text-xl">{displayLinks}</ul>
        </nav>

        <div className=" cursor-pointer p-1 mt-3" onClick={toggleDarkMode}>
          {darkMode ? (
            <BiSolidSun className=" text-2xl text-amber-500" />
          ) : (
            <BiSolidMoon className=" text-2xl text-slate-200" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;


