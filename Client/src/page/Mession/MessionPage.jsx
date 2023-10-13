import React from "react";
import "./style.css";
import Header from "../../components/Header/Header";
const MessionPage = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="tab-panel tab-task" style={{}}>
        <div className="task_fresh flex_v1">
          <span>mission reset</span>
          <span className="time-span">
            <span>18</span>:<span>29</span>:<span>53</span>
          </span>
        </div>
        <div className=" taskSum">
          <div>
            <div className="total">2</div>
            <div>Today's all mission</div>
          </div>
          <div>
            <div className="less">2</div>
            <div>Today's left mission</div>
          </div>
        </div>
        <div className="tab-swap">
          <div className="tab">
            <div className="click-tab active">Processing</div>
            <div>Completed</div>
          </div>
          <div className="tab-con">
            <div className="unfinish" style={{ display: "block" }}>
              <div className="mdse-item">
                <div className="mdse-info">
                  <img src="https://m.media-amazon.com/images/I/71tpLKp8twL._AC_UL320_.jpg" />
                  <div className="mdse">
                    <div>
                      Women Crochet Vest Top Y2k Knit V Neck Sleeveless Button
                      Down Streetwear
                    </div>
                    <div>
                      <span>Price</span>
                      <span>$22.99</span>
                    </div>
                    <div>
                      <span className="money">Commission</span>
                      <span className="money">$0.10</span>
                    </div>
                    <div className="finish_tr" style={{ display: "none" }}>
                      <span>Earnings rate(%)</span>
                      <span>0.43%</span>
                    </div>
                    <div className="finish_tr" style={{ display: "none" }}>
                      <span>Complete time</span>
                      <span className="finishTime" />
                    </div>
                    <button className="finish_btn">Go to finish</button>
                  </div>
                </div>
              </div>
              <div className="mdse-item">
                <div className="mdse-info">
                  <img src="https://m.media-amazon.com/images/I/71EWR45qunL._MCnd_AC_UL320_.jpg" />
                  <div className="mdse">
                    <div>
                      Bikini Top for Women Swimsuit V Neck Ribbed Adjustable
                      Spaghetti Straps Bathing Suit
                    </div>
                    <div>
                      <span>Price</span>
                      <span>$23.99</span>
                    </div>
                    <div>
                      <span className="money">Commission</span>
                      <span className="money">$0.10</span>
                    </div>
                    <div className="finish_tr" style={{ display: "none" }}>
                      <span>Earnings rate(%)</span>
                      <span>0.42%</span>
                    </div>
                    <div className="finish_tr" style={{ display: "none" }}>
                      <span>Complete time</span>
                      <span className="finishTime" />
                    </div>
                    <button className="finish_btn">Go to finish</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="finish" style={{ display: "block" }} />
          </div>
        </div>
        <div id="box_pro" style={{ display: "none" }}>
          <div className="parentBox">
            <div className="contantBox" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessionPage;
