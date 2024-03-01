import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
