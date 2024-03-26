import { IoCalendarOutline } from "react-icons/io5";
import profile from "../assets/profile.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import Charts from "./Charts";
import Card from "./Card";
import Client from "./Client";
import Date from "./Date";
import CopyWright from "./CopyWright";
import Table from "./Table";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Main = ({ toggleMenu, show }) => {
  return (
    <div className=" dark:bg-slate-950 h-full text-slate-200 transition-all ease-in-out duration-500 overflow-hidden">
      <div className=" flex justify-between items-center px-7 py-4">
        <h2
          className="text-indigo-950 font-bold text-sm md:text-2xl dark:text-transparent bg-clip-text
         dark:bg-gradient-to-l from-indigo-800 to-pink-800"
        >
          IT Skills Academy
        </h2>

        <div className="flex items-center gap-4 cursor-pointer text-slate-950 dark:text-indigo-200">
          <IoCalendarOutline />
          <IoNotificationsOutline />
          <MdMarkEmailUnread />
          <img src={profile} className="rounded-full w-7 h-7 bg-white" />
        </div>

        <div
          className="md:hidden text-slate-950 dark:text-slate-200"
          onClick={toggleMenu}
        >
          {show ? (
            <HiMenuAlt1 className="text-3xl cursor-pointer transition-all" />
          ) : (
            <HiMenuAlt3 className="text-3xl cursor-pointer transition-all" />
          )}
        </div>

        <div className=" flex md:hidden">
          <ResponsiveMenu show={show} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className=" w-auto md:w-[70%] ">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 m-4 ">
            <Card />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-4  gap-4 m-4">
            <Client title="New Clients" value="64" percentage="+69%" />
            <div className=" md:col-span-3 row-span-2 bg-white dark:bg-slate-900/50 overflow-hidden">
              <Charts />
            </div>
            <Client
              title="Invoice Overdue"
              value="9"
              percentage="+19%"
              red="red"
            />
          </div>

          <div className="m-4">
            <h2 className="text-indigo-950 dark:text-slate-400 font-bold text-2xl my-4">
              Recent Transactions
            </h2>

            <Table />
          </div>
        </div>

        <div className=" w-auto md:w-[30%] bg-indigo-200 dark:bg-slate-950/20 ">
          <div className="flex flex-col m-4">
            <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 mb-4 rounded-md shadow-lg">
              <div>
                <p className="font-bold text-indigo-950 dark:text-slate-400">
                  Formation status
                </p>
                <p className="text-xs font-bold text-indigo-500 dark:text-slate-400">
                  In progress
                </p>
              </div>

              <div className="h-4 w-full bg-slate-200 dark:bg-gray-200 rounded-lg">
                <div className="h-4 bg-indigo-500 dark:bg-slate-900 w-[30%] rounded-lg"></div>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-bold text-indigo-950 dark:text-slate-400">
                  Estimated Processing
                </p>
                <span className="font-semibold text-indigo-900 dark:text-slate-400 text-sm">
                  4-5 business days
                </span>
              </div>

              <div>
                <button
                  className="bg-gradient-to-tr from-pink-900 to-indigo-900 
               p-4 text-white w-full rounded-xl"
                >
                  View Status
                </button>
              </div>
            </div>

            <Date />

            <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 m-4 rounded-lg shadow-lg">
              <div>
                <p className="font-bold text-indigo-950 dark:text-slate-400">
                  Board Meeting
                </p>
                <p className="text-xs font-bold text-indigo-500">
                  March 5th 2024
                </p>
              </div>

              <h4 className="font-semibold text-indigo-950 dark:text-slate-400 text-sm">
                You have been invited to attend a meeting of board of directors
              </h4>
            </div>

            <CopyWright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
