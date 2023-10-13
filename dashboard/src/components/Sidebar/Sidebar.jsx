import { useState } from "react";
import user from "../../assets/img/user.png";

import "./style.scss";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  return (
    <>
      <div className="dashboard-menu">
        <div className="login-user">
          <div className="user-logo">
            <img src={user} alt="" />
          </div>
          <div className="user-info">
            <h3>Abu Sayeed</h3>
            <h3>Admin</h3>
          </div>
        </div>
        <div className="main-menu">
          <ul>
            {SidebarData?.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
