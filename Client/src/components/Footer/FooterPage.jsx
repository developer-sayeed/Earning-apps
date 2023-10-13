import { AiOutlineHome, AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { PiNotebook } from "react-icons/pi";
import { RiVipCrown2Line } from "react-icons/ri";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <>
      <div className="footer-area">
        <ul>
          <li>
            <Link to="/">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to={"/mession"}>
              <PiNotebook />
              Mession
            </Link>
          </li>
          <li>
            <Link to={"/team"}>
              <AiOutlineTeam />
              Team
            </Link>
          </li>
          <li>
            <Link to={"/vip"}>
              <RiVipCrown2Line />
              VIP
            </Link>
          </li>
          <li>
            <Link to={"/profile"}>
              <AiOutlineUser />
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterPage;
