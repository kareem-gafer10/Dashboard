import { CiMenuKebab } from "react-icons/ci";
import { Cards } from "../assets/data";

const Card = () => {
  const displayCard = Cards.map(({ id, icon, price, desc }) => (
    <div key={id} className="bg-white dark:bg-slate-900/50 p-4 rounded-md">
      <div className="flex justify-between items-center">
        <span className="text-4xl text-indigo-950 dark:text-slate-400">
          {icon}
        </span>
        <div className="flex items-center justify-center w-10 h-10  dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full cursor-pointer">
          <CiMenuKebab className="text-slate-950 dark:text-slate-300" />
        </div>
      </div>

      <p className="font-extrabold text-4xl sm:text-2xl md:text-lg lg:text-xl text-indigo-950  dark:text-slate-400 my-8">
        {price}
      </p>

      <span className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
        {desc}
      </span>
    </div>
  ));

  return <>{displayCard}</>;
};

export default Card;
