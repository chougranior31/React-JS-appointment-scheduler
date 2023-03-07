import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Maps from "./Pages/Maps/Maps";
import Tables from "./Pages/Tables/Tables";

function App() {
  return (
    <>
      {/* <Layout> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/table" element={<Tables />} />
        </Routes>
      </div>
      {/* </Layout> */}
    </>
  );
}

export default App;
