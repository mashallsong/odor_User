import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import AdminSetting from "./Pages/AdminSetting";
import Registration from "./Pages/Registration";
import Management from "./Pages/Management";



function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminSetting" element={<AdminSetting />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 