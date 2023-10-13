import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const WithdwalMethod = () => {
  return (
    <>
      <div className="withdwalSection">
        <div className="team-header">
          <Link to={"/profile"}>
            <AiOutlineLeft />
          </Link>
          <h2>Bind Withdrwal Address</h2>
          <span></span>
        </div>
        <div className="deposit-Body">
          <div className="full-table">
            <div className="bin-header">
              <div className="left">Currency Type</div>
              <div className="right">USDT</div>
              <div className="left">Network</div>
              <div className="right">TRC20</div>
            </div>
            <form action="" onSubmit={() => alert("Coming Soon..")}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Please enter TRC20 Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="trxid"
                  placeholder="Please enter the Transaction password"
                />
              </div>

              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdwalMethod;
