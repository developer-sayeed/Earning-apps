import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const TeamTwo = () => {
  return (
    <>
      <div className="team-header">
        <Link to={"/team"}>
          <AiOutlineLeft />
        </Link>
        <h2>Rebate</h2>
        <p>Team B</p>
      </div>
      <div className="tab-panel tab-feed">
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <td>Sl</td>
                <td>Email</td>
                <td>Rebate</td>
                <td>VIP</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>20$</td>
                <td>VIP2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>20$</td>
                <td>VIP2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>20$</td>
                <td>VIP2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>20$</td>
                <td>VIP2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeamTwo;
