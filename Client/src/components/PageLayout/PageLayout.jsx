import { Outlet } from "react-router-dom";
import FooterPage from "../Footer/FooterPage";

const PageLayout = () => {
  return (
    <>
      <div className="mianBody">
        <Outlet />
        <FooterPage />
      </div>
    </>
  );
};

export default PageLayout;
