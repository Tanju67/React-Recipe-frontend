import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchMealPage from "./Pages/SearchMealPage";
import MainPage from "./Pages/MainPage";
import MealDetailPage from "./Pages/MealDetailPage";
import Footer from "./shared/UIElements/footer/Footer";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import PageNotFound from "./Pages/PageNotFound";
import MyRecipePage from "./Pages/MyRecipePage";
import { FilterProvider } from "./shared/context/filterRequestContext";
import { Provider } from "./shared/context/APIRequest-context";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Provider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/main" element={<MainPage />}>
              <Route index element={<SearchMealPage />} />
              <Route path="detail/:id" element={<MealDetailPage />} />
              {isLoggedIn && (
                <Route path="myrecipe" element={<MyRecipePage />} />
              )}
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FilterProvider>
    </Provider>
  );
}

export default App;
