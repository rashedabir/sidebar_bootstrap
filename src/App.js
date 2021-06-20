import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div>
      <Sidebar active={active} />
      <Header active={active} setActive={setActive} />
      <div
        className={
          active
            ? "content_active page-content p-5 mt-5"
            : "page-content p-5 mt-5 content"
        }
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
