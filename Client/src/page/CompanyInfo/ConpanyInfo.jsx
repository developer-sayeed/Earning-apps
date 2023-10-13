import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import "./style.css";

const ConpanyInfo = () => {
  return (
    <>
      <div className="team-header">
        <Link to={"/"}>
          <AiOutlineLeft />
        </Link>
        <h2>Company Profile</h2>
        <span></span>
      </div>
      <div className="main-content">
        <p>
          Good news, Mall at Amazon now provides the following benefits to
          encourage each member to develop his or her own team. When your team
          reaches 40 people or above VIP1, you can apply to become the regional
          agent of Mall at Amazon, and the company will give you a monthly
          salary. . Regional agent’s monthly fixed salary: US$1,800, and
          reimbursement of member dinner expenses once a month! (Reimbursement
          limit is $300) When your team reaches more than 50 VIP1 people, you
          can apply to become the municipal agent of Mall at Amazon, and the
          company will pay you a monthly salary. Fixed monthly salary for
          municipal agents: US$5,000, with monthly reimbursement of team
          members’ expenses! (Reimbursement limit is $1,000) When your team
          reaches more than 100 VIP1 people, you can apply to become the local
          national agent of Mall at Amazon, and the company will pay you a
          monthly salary. National agent’s monthly fixed salary: US$10,000, and
          monthly membership dues reimbursement! (Reimbursement limit is $2,000)
          Upgrading agents can not only get 13% of the team's recharge rebate
          reward. You can also get the platform’s outstanding agent award every
          month! If you become a regional agent, you will have the opportunity
          to be selected as a monthly quality agent and receive additional
          rewards of up to $18,888. Our company will select high-quality agents
          on the 30th of every month. Gold agents can get a reward of US$8,888.
          Platinum agents can get a reward of US$12,888. Diamond agents can get
          a reward of US$18,888. To apply for rewards, please contact online
          customer service:
        </p>
      </div>
    </>
  );
};

export default ConpanyInfo;
