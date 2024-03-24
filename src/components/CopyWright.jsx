const CopyWright = () => {
  const date = new Date().getFullYear();

  return (
    <div
      className=" bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-200 
    gap-6 p-4 m-4 rounded-lg shadow-lg "
    >
      <p>Copy Right @{date} By Kareem Gafer</p>
      <span>All Rights Reserved</span>
    </div>
  );
};

export default CopyWright;
