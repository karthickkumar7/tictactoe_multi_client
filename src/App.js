import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/auth/Auth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<h1>404 Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
