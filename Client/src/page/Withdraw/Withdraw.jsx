import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import UseAuthUserState from "../../hooks/UseAuthUserState";

const Withdraw = () => {
  const { user } = UseAuthUserState();

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setInputValue(newValue);

    // Calculate 10% of the new value
    const tenPercent = (newValue * 10) / 100;
    setResult(newValue - tenPercent);
  };

  return (
    <>
      <div className="withdwalSection">
        <div className="team-header">
          <Link to={"/profile"}>
            <AiOutlineLeft />
          </Link>
          <h2>Withdraw</h2>
          <Link to={"/withdwal/record"}>History</Link>
        </div>
        <div className="deposit-Body">
          <div className="full-table">
            <h3>Balance ${user.totalBalance}</h3>
            <form action="" onSubmit={() => alert("Coming Soon..")}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  disabled
                  value={user.withdrawalAddress}
                  placeholder="TRC20 Address"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="amount"
                  type="number"
                  min={10}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Please enter the Withdrwal amount"
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
              <div className="form-group">
                {inputValue ? (
                  <p style={{ color: "green", textAlign: "start" }}>
                    You Recived : ${result} (after 10% Reduction Tax)
                  </p>
                ) : (
                  ""
                )}
              </div>

              <button className="submit" style={{ marginTop: "0px" }}>
                Submit
              </button>
            </form>
            <div className="withdwal-footer">
              <div className="note">
                <p>
                  1. The withdrawal amount Minimum 10$ and maximum Unlimited
                  <br /> <br />
                  2. Withdraw at most once a day.
                  <br /> <br />
                  3. Withdrawal will be completed within 48 hours of working
                  time.
                  <br /> <br />
                  4.10% withdrawal Goverment fee Tax, the minimum fee is $1.
                  <br /> <br />
                  5. For example: You withdraw 10$ You can get a cash withdrawal
                  fee subsidy of 1$.
                  <br /> <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
