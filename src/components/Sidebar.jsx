import youtube from "../assets/youtube.png";
import control from "../assets/control.png";
import { useContext } from "react";
import { menuList } from "../assets/data";
import { DarkModeContext } from "../context/DarkModeContext";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const Sidebar = ({toggleMenu,show}) => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);



  const displayLinks = menuList.map((links) => {
    const { title, src, gap } = links;
    return (
      <li
        className={`${gap ? "mt-9" : "mt-2"}
      flex items-center gap-x-4 p-2 overflow-hidden text-center hover:bg-blue-800 rounded-md transition-all ease-in-out duration-300`}
        key={title}
      >
        <img src={src} alt={title} />
        <span className="text-white">{title}</span>
      </li>
    );
  });

  return (
    <div
      className={`flex flex-col min-h-screen  p-4   shadow-lg 
       relative transition-all ease-in-out duration-500 h-full bg-indigo-600 dark:bg-slate-950/50
     ${show ? "w-16 md:w-20" : "w-56"}`}
    >
      <div
        onClick={toggleMenu}
        className=" absolute -right-4 cursor-pointer border-2 border-dark-purple rounded-full"
      >
        <img className="w-6" src={control} alt="control" />
      </div>

      <div className="flex items-center gap-x-4 overflow-hidden">
        <img
          className={`w-10 transition-all ease-in-out duration-700 ${
            !show && " rotate-[360deg]"
          }`}
          src={youtube}
          alt="youtube"
        />
        {!show && <h3 className="text-white font-bold text-2xl ">YouTube</h3>}
      </div>

      <ul className=" mt-10 cursor-pointer">{displayLinks}</ul>

      <div className=" cursor-pointer p-1 mt-10" onClick={toggleDarkMode}>
        {darkMode ? (
          <BiSolidSun className=" text-2xl text-amber-500" />
        ) : (
          <BiSolidMoon className=" text-2xl text-slate-200" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;


