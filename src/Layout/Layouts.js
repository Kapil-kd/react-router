import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Layouts = () => {
  return (
    <div className="layout">
      <header>
        <h1>React Router </h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Career</NavLink>
        </nav>
        </header>
        <Breadcrumbs/>
        <main>
          <Outlet />
        </main>
     
    </div>
  );
};
