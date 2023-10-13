import "./style.css";
import { RiCustomerService2Line } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <div className="iocn">
          <RiCustomerService2Line />
        </div>
      </div>
    </>
  );
};

export default Header;
