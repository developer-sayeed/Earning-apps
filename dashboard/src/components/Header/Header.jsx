import {
  AiOutlineBell,
  AiOutlineGlobal,
  AiOutlinePoweroff,
  AiOutlineUser,
  AiTwotoneLock,
} from "react-icons/ai";
import user from "../../assets/img/user.png";
import "./style.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="headerSection">
        <div className="row">
          <div className="col d-flex justify-content-end gap-3 align-items-center me-4">
            <div className="fortend">
              <a href="https://developersayeed.com">
                <AiOutlineGlobal />
              </a>
            </div>
            <div className="Notication">
              <a href="">
                <AiOutlineBell />
              </a>
            </div>
            <div className="user">
              <div className="dropdown">
                <a
                  href=""
                  id="userID"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={user} alt="" />
                  Abusayeed
                </a>
                <ul className="dropdown-menu" aria-labelledby="userID">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <AiOutlineUser /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <AiTwotoneLock /> Password
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <AiOutlinePoweroff /> LougOut
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
