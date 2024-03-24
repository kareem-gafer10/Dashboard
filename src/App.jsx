import { useContext, useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { DarkModeContext } from "./context/DarkModeContext";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [show, setShow] = useState(false);


  const toggleMenu=(()=>{
    setShow(!show)
  })




  return (
    <div className={!darkMode ? "light" : "dark "}>
      <div className="md:flex min-h-full bg-indigo-200 dark:bg-slate-900 w-full">
        <div className=" hidden md:flex" >
          <Sidebar toggleMenu={toggleMenu} show={show} />
        </div>
        
        <div>
          <Main toggleMenu={toggleMenu} show={show} />
        </div>
      </div>
    </div>
  );
};

export default App;
