import { Route, Routes } from "react-router-dom";
import "./App.css";
import Agenda from "./Pages/Dashboard/Agenda/Agenda";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      {/* <Layout> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/agenda" element={<Agenda />} />
          </Route>
        </Routes>
      </div>
      {/* </Layout> */}
    </>
  );
}

export default App;
