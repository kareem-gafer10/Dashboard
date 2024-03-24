
import { TableList } from "../assets/data";

const Table = () => {
  return (
    <table className="w-full text-sm text-center dark:text-indigo-500">
      <thead className="text-xs text-indigo-950 dark:text-slate-400 uppercase bg-gray-50 dark:bg-slate-900/50">
        <tr>
          <th className="py-3 px-4">Person</th> 
          <th className="py-3 px-4"> Bank Account</th> 
          <th className="py-3 px-4">Amount</th> 
        </tr>
      </thead>

      <tbody className="text-indigo-950 dark:text-slate-400">
        {TableList.map((transaction) => (
          <tr key={transaction.BankAccount} className="bg-white dark:bg-slate-900/50 border-b">
            <td className="py-4 px-4">{transaction.Person}</td>
            <td className="py-4 px-4">{transaction.BankAccount}</td>
            <td className="py-4 px-4">{transaction.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;