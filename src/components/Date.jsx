import { Dates } from "../assets/data";

const Date = () => {
  const DateList = Dates.map(({ id, icon, title, date }) => (
    <div
      key={id}
      className="text-indigo-900 dark:text-slate-400 bg-white dark:bg-slate-900/50 m-4 p-2
    rounded-md flex items-center gap-5 "
    >
      <div className="flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950">
        {icon}
      </div>

      <div>
        <p className="font-semibold  text-sm">{title}</p>
        <p className="text-indigo-500 text-xs">{date}</p>
      </div>
    </div>
  ));

  return <>{DateList}</>;
};

export default Date;
