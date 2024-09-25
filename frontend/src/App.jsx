import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Appbar } from "./components/Appbar";
import { Balance } from "./components/Balance";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Balance />
        <Users />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
