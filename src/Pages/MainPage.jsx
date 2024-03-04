import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../shared/UIElements/navbar/MainNavigation";

function MainPage() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default MainPage;
