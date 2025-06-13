import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/userLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {User Layout router common layout that display on every page like herader and footer section will common for all pages  } */}
          <Route path="/" element={<UserLayout />}></Route>

          {/* Admin Layout router */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
