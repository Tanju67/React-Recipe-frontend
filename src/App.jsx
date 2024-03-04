import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Provider } from "./shared/context/APIRequest-context";
import SearchMealPage from "./Pages/SearchMealPage";
import MainPage from "./Pages/MainPage";
import { FilterProvider } from "./shared/context/filterRequestContext";
import MealDetailPage from "./Pages/MealDetailPage";

function App() {
  return (
    <Provider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/main" element={<MainPage />}>
              <Route index element={<SearchMealPage />} />
              <Route path=":id" element={<MealDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </Provider>
  );
}

export default App;
