import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChangeFundPassword = () => {
  return (
    <>
      <div className="withdwalSection">
        <div className="team-header">
          <Link to={"/profile"}>
            <AiOutlineLeft />
          </Link>
          <h2>Change Transaction password</h2>
          <span></span>
        </div>
        <div className="deposit-Body">
          <div className="full-table">
            <form action="" onSubmit={() => alert("Coming Soon..")}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Please enter Old Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="New Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="trxid"
                  placeholder="Confirm Password"
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

export default ChangeFundPassword;
