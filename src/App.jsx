import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import {
  Provider,
  RequestApiContext,
} from "./shared/context/APIRequest-context";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
