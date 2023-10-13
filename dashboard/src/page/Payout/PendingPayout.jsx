import { PiStudentFill } from "react-icons/pi";
import { BiLaptop } from "react-icons/bi";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
const PendingPayout = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "TrxId",
      selector: (row) => row.trxId,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <div className="actions">
            <button className="btn btn-sm bg-success-light btn-outline-info">
              <i className="fe fe-pencil">View</i>
            </button>
            &nbsp;
            <button className="btn btn-sm bg-success-light btn-outline-warning">
              <i className="fe fe-pencil">Edit</i>
            </button>
            &nbsp;
            <button className="btn btn-sm bg-danger-light btn-outline-danger">
              <i className="fe fe-trash">Delete</i>
            </button>
          </div>
        </>
      ),
    },
  ];

  const data = [
    {
      name: "Abu Sayeed",
      email: "abusayeedriday@gmail.com",
      amount: "300",
      date: "2023-05-12",
      trxId: "jhuyyigyhg8h",
      status: "Approved",
    },
    {
      name: "Abu Sayeed",
      role: "VIP 3",
      email: "abusayeedriday@gmail.com",
      amount: "300",
      date: "2023-05-12",
      trxId: "jhuyyigyhg8h",
      status: "Approved",
    },
    {
      name: "Abu Sayeed",
      role: "VIP 3",
      email: "abusayeedriday@gmail.com",
      amount: "300",
      date: "2023-05-12",
      trxId: "jhuyyigyhg8h",
      status: "Approved",
    },
  ];

  return (
    <>
      <div className="student-section p-4 shadow-sm mt-4">
        {/* Breadcumb Section */}
        <div className="breadcumb-section">
          <div className="row align-items-center">
            <div className="col-6 d-flex align-items-center breadcumb-left ">
              <span>
                <PiStudentFill />
              </span>
              <h2>Pending Payout</h2>
            </div>
            <div className="col-6 text-end  breadcumb-right">
              <ul className="d-flex justify-content-end align-items-center gap-2">
                <li>
                  <Link to={"/"}>DASHBOARD</Link>
                </li>
                /
                <li>
                  <span>
                    <BiLaptop />
                  </span>
                  Withdrawal
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="student-body">
              <DataTable
                className="shadow-sm main-table"
                columns={columns}
                data={data ? data : ""}
                selectableRows
                highlightOnHover
                pagination
                responsive
                pointerOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingPayout;
