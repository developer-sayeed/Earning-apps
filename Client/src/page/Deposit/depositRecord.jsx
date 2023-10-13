import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";

const DepositRecord = () => {
  return (
    <>
      <div className="team-header">
        <Link to={"/profile"}>
          <AiOutlineLeft />
        </Link>
        <h2>Deposit Record</h2>
        <p></p>
      </div>
      <div className="tab-panel tab-feed">
        <div className="table">
          <div className="tr-item">
            <div className="flex_v4 record-item">
              <div>Time</div>
              <div>2023-09-28 03:51:35</div>
            </div>
            <div className="flex_v4 record-item">
              <div>Amount</div>
              <div>$100.00</div>
            </div>
            <div className="flex_v4 record-item">
              <div>order number</div>
              <div>p5n7d98z5368zxnt61</div>
            </div>
            <div className="flex_v4 record-item">
              <div>Result</div>
              <div>Success</div>
            </div>
          </div>
          <div className="tr-item">
            <div className="flex_v4 record-item">
              <div>Time</div>
              <div>2023-09-28 03:51:35</div>
            </div>
            <div className="flex_v4 record-item">
              <div>Amount</div>
              <div>$150.00</div>
            </div>
            <div className="flex_v4 record-item">
              <div>order number</div>
              <div>p5n7d98z5368zxnt61</div>
            </div>
            <div className="flex_v4 record-item">
              <div>Result</div>
              <div>Success</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositRecord;
