import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineRight, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import Header from "../../components/Header/Header";

const TeamPage = () => {
  return (
    <>
      <Header />
      <div className="Team-section">
        <div className="team-top">
          <div>Invite code</div>
          <div className="table-tr">
            <span className="ckey">u353459hjzj1</span>
            <span className="copy">Copy</span>
          </div>
          <div>Referral link</div>
          <div className="table-tr">
            <span className="ckey_url">
              https://amazon.com.sa/#ckey=u353459hjzj1
            </span>
            <span className="copy">Copy</span>
          </div>
        </div>
        <div className="table_v0" id="team_table">
          <div className="tr-div">
            <div className="team-item">
              <div>0</div>
              <div>team size</div>
            </div>
            <div className="team-item">
              <div>$0</div>
              <div>team recharge</div>
            </div>
            <div className="team-item">
              <div>$0</div>
              <div>team withdraw</div>
            </div>
          </div>
          <div className="tr-div">
            <div className="team-item">
              <div>0</div>
              <div>new team</div>
            </div>
            <div className="team-item">
              <div>0</div>
              <div>first recharge</div>
            </div>
            <div className="team-item">
              <div>0</div>
              <div>first withDraw</div>
            </div>
          </div>
        </div>
        <div className="teamSection" id="team_detail">
          <div className="Relation-item">
            <Link to={"/team/team1"}>
              <span>Team A</span>
              <span>
                <AiOutlineRight />
              </span>
            </Link>
            <div className="info">
              <div className="left">
                <span>
                  <AiOutlineUsergroupAdd />
                </span>
                <sapn>team size</sapn>
                <sapn>10</sapn>
              </div>
              <div className="right">
                <span>
                  <BiMoney />
                </span>
                <sapn>Rebate</sapn>
                <sapn>$10</sapn>
              </div>
            </div>
          </div>
          <div className="Relation-item">
            <Link to={"/team/team2"}>
              <span>Team B</span>
              <span>
                <AiOutlineRight />
              </span>
            </Link>
            <div className="info">
              <div className="left">
                <span>
                  <AiOutlineUsergroupAdd />
                </span>
                <sapn>team size</sapn>
                <sapn>10</sapn>
              </div>
              <div className="right">
                <span>
                  <BiMoney />
                </span>
                <sapn>Rebate</sapn>
                <sapn>$10</sapn>
              </div>
            </div>
          </div>
          <div className="Relation-item">
            <Link to={"/team/team3"}>
              <span>Team C</span>
              <span>
                <AiOutlineRight />
              </span>
            </Link>
            <div className="info">
              <div className="left">
                <span>
                  <AiOutlineUsergroupAdd />
                </span>
                <sapn>team size</sapn>
                <sapn>10</sapn>
              </div>
              <div className="right">
                <span>
                  <BiMoney />
                </span>
                <sapn>Rebate</sapn>
                <sapn>$10</sapn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
