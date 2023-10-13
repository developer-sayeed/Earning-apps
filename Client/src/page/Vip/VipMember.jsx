import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const VipMember = () => {
  return (
    <>
      <div className="vip-header" style={{}}>
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <span className="title">VIP Details</span>
        <span className="action">
          <Link to="/">View Detiles</Link>
        </span>
      </div>

      <div
        className="tab-panel tab-vip"
        style={{ paddingBottom: "50px", background: "#f3f4f5" }}
      >
        <div className="full-table vip-table task-list">
          <div className="vip-item curVip active">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 0</span>
                  <span> $0</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span> 2</span>
                </div>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$0.50</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$1.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$0.80</div>
                <div>
                  <span>3</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 1</span>
                  <span> $100.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$0.50</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$5.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$1825.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 2</span>
                  <span> $200.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$1.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$10.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$3650.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 3</span>
                  <span> $400.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$2.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$20.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$7300.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 4</span>
                  <span> $800.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$4.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$40.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$14600.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 5</span>
                  <span> $1200.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$6.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$60.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$21900.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 6</span>
                  <span> $2000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$10.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$100.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$36000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 7</span>
                  <span> $6000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$20.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$200.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$73000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>

          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 8</span>
                  <span> $9000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$30.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$300.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$109500.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 9</span>
                  <span> $15000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button
                  onClick={() => {
                    alert("Vip Coming Soon");
                  }}
                  className="join"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://i.ibb.co/x6ntKBG/vip-with-crown-composition-1284-36184-removebg-preview.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$50.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$500.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$182500.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VipMember;
