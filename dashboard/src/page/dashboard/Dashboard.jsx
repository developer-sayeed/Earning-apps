import { ChartComponent } from "../../components/Chart/ChartComponent";
import InnerTop from "../../components/innerTop/InnerTop";
import "./style.scss";
import NoticeArea from "../../components/Dashboard/NoticeArea";
import UserSection from "../../components/Dashboard/UserSection";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-section">
        <div className="row">
          <div className="col-md-12">
            <InnerTop />
          </div>
          <div className="col-md-12 p-2">
            <div className="card">
              <div className="card-header text-center">
                <h1 className="fs-4 fw-normal"> 2023 Account Summary</h1>
                <p>
                  Click month income or expense column to view day wise account
                  summary
                </p>
              </div>
              <div className="card-body">
                <ChartComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
