import { Link } from "react-router-dom";
import "./style.scss";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineUserSwitch } from "react-icons/ai";

import { GiPayMoney } from "react-icons/gi";

const InnerTop = () => {
  return (
    <>
      <div className="dashboard-top">
        <div className="item-box" style={{ backgroundColor: "#ff8a65" }}>
          <Link to="">
            <div className="small-box">
              <BiWalletAlt style={{ color: "ff8a65" }} />
            </div>
            <div className="inner ">
              <h3>$ 45800 </h3>
              <p>Total Deposit </p>
            </div>
          </Link>
        </div>
        <div className="item-box" style={{ backgroundColor: "#4db6ac" }}>
          <Link to="">
            <div className="small-box ">
              <GiPayMoney style={{ color: "4db6ac" }} />
            </div>
            <div className="inner ">
              <h3>$ 4587 </h3>
              <p>Total Payout </p>
            </div>
          </Link>
        </div>
        <div className="item-box" style={{ backgroundColor: "#f06292" }}>
          <Link to="">
            <div className="small-box ">
              <AiOutlineUserSwitch style={{ color: "#f06292" }} />
            </div>
            <div className="inner ">
              <h3>44 </h3>
              <p>Today Active </p>
            </div>
          </Link>
        </div>
        <div className="item-box" style={{ backgroundColor: "#9575cd" }}>
          <Link to="">
            <div className="small-box ">
              <AiOutlineUserAdd style={{ color: "#9575cd" }} />
            </div>
            <div className="inner ">
              <h3>44 </h3>
              <p>Vip Users </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InnerTop;
