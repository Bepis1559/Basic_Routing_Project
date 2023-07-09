import { ReactElement } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

export function App(): ReactElement {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      {state == "loading" ? (
        <>
          <div className="loading-spinner"></div>
          <div className="container loading">
            <Outlet />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
