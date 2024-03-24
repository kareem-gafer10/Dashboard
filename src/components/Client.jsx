
const Client = ({ title, value, percentage ,red }) => (






  <div className="bg-white dark:bg-slate-900/50 rounded-md">
    <div className="flex flex-col justify-between p-4">
      <h2 className="font-semibold text-indigo-950 dark:text-slate-400">{title}</h2>
      <div className="flex items-center justify-between my-2">
        <p className="text-5xl sm:text-xl md:text-xl lg:text-5xl font-bold text-indigo-950 dark:text-slate-400">{value}</p>
        <span  className={`flex px-2 py-1 text-xs rounded-full   items-center justify-center
         text-white ${red ? 'bg-red-500' : 'bg-green-500'}   `} >{percentage}</span>
      </div>
    </div>
  </div>
);

export default Client;
