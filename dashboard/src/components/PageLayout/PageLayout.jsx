import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./style.scss";

const PageLayout = () => {
  return (
    <>
      <div className="mainLayout">
        <div className="sidebar-menu">
          <Sidebar />
        </div>
        <div className="main-content">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
