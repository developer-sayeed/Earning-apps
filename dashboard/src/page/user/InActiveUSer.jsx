import { PiStudentFill } from "react-icons/pi";
import { BiLaptop } from "react-icons/bi";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
const InActiveUSer = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Dwon Line",
      selector: (row) => row.dwonline,
      sortable: true,
    },
    {
      name: "Balance",
      selector: (row) => row.Balance,
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
      createdAt: "1996-10-20",
      role: "VIP 3",
      dwonline: "10",
      email: "abusayeedriday@gmail.com",
      deposit: "300",
      Withdrawal: "100",
      Balance: "100",
      Earning: "200",
      status: "Active",
    },
    {
      name: "Abu Sayeed",
      createdAt: "1996-10-20",
      role: "VIP 1",
      dwonline: "10",
      email: "admin@example",
      deposit: "300",
      Withdrawal: "100",
      Balance: "100",
      Earning: "200",
      status: "Active",
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
              <h2>InActive User</h2>
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
                  InActive User
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

export default InActiveUSer;
