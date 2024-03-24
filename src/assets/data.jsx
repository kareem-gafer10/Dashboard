import Dashboard from "./Chart_fill.png";
import Inbox from "./Chat.png";
import Accounts from "./User.png";
import Schedule from "./Calendar.png";
import Search from "./Search.png";
import Analytics from "./Chart.png";
import Files from "./Folder.png";
import Setting from "./Setting.png";
import { CiTimer } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { IoPieChartOutline } from "react-icons/io5";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsPersonVcard } from "react-icons/bs";

export const menuList = [
  { title: "Dashboard", src: Dashboard },
  { title: "Inbox", src: Inbox },
  { title: "Accounts", src: Accounts, gap: true },
  { title: "Schedule ", src: Schedule },
  { title: "Search", src: Search },
  { title: "Analytics", src: Analytics },
  { title: "Files ", src: Files, gap: true },
  { title: "Setting", src: Setting },
];

export const Cards = [
  {
    id: 1,
    icon: <LuWallet />,
    price: "$500,634.00",
    desc: "Your Bank Balance",
  },
  {
    id: 2,
    icon: <IoPieChartOutline />,
    price: "$200,341.00",
    desc: "Your Bank Balance",
  },
  {
    id: 3,
    icon: <LiaPeopleCarrySolid />,
    price: "$300,334.00",
    desc: "Employees working today",
  },
  {
    id: 4,
    icon: <BsPersonVcard />,
    price: "$200,600.00",
    desc: "This Week card processing",
  },
];

export const TableList = [
  {
    Person: "Alex Johnson",
    BankAccount: "82926417",
    Amount: "$4,500.00",
  },
  {
    Person: "James Smith",
    BankAccount: "90817264",
    Amount: "$7,820.00",
  },
  {
    Person: "Patricia Brown",
    BankAccount: "26483910",
    Amount: "$1,230.00",
  },
  {
    Person: "Ethan Davis",
    BankAccount: "64738290",
    Amount: "$865.00",
  },
];

export const Dates = [
  {
    id: 1,
    icon: <CiTimer />,
    title: "Run payroll",
    date: "March 7th at 9:50Pm",
  },
  {
    id: 2,
    icon: <CiTimer />,
    title: "Client meeting",
    date: "March 7th at 2:30Pm",
  },
  {
    id: 3,
    icon: <CiTimer />,
    title: "Performance review",
    date: "March 7th at 4:50Pm",
  },
  {
    id: 4,
    icon: <CiTimer />,
    title: "Training session",
    date: "March 7th at 7:50Pm",
  },
];
