import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const DepositPage = () => {
  const [copytext, setCopytext] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(copytext);
    alert("copied");
  };
  return (
    <>
      <div className="depositSection">
        <div className="team-header">
          <Link to={"/profile"}>
            <AiOutlineLeft />
          </Link>
          <h2>Deposit</h2>
          <Link to={"/deposit/record"}>History</Link>
        </div>
        <div className="deposit-Body">
          <div className="full-table">
            <div className="pay-swap">
              <div className="titel">Recharge QR code TRC20</div>
              <img src="https://i.ibb.co/23L6cRR/download.png" />
              <div className="copy-div">
                <span className="payUrl">
                  <input
                    style={{
                      width: "50%",
                      background: "none",
                      border: "none",
                      color: "#000",
                    }}
                    type="text"
                    disabled
                    defaultValue={"TYXsDocNXMT4Jbf67kvhzzjBWkK73KyjHj"}
                    value={copytext}
                    onChange={({ target }) => {
                      setCopytext(target.value);
                    }}
                  />
                </span>
                <span className="copybtn" onClick={handleCopy}>
                  Copy
                </span>
              </div>
            </div>

            <form action="" onSubmit={() => alert("Coming Soon..")}>
              <div className="form-group">
                <label htmlFor="amount">Deposit amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Please enter the deposit amount"
                />
              </div>
              <div className="form-group">
                <label htmlFor="trxid">TxID</label>
                <input
                  type="text"
                  className="form-control"
                  id="trxid"
                  placeholder="Please enter the deposit TrxId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo">Upload Voucher</label>
                <input type="file" className="form-control" id="photo" />
              </div>
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="deposit-footer">
          <div className="note">
            <p>
              <h5>
                Before proceeding with the deposit, I kindly request that you
                review the following:
              </h5>
              <span>
                Confirm Wallet Address: Double-check that the recipient's wallet
                address provided is accurate and matches the TRC20 wallet you
                intended to deposit the funds into. Any errors in the address
                may result in the loss of funds.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositPage;
