import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Customer from "./Pages/Customer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import Setting from "./Pages/Setting";



function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 