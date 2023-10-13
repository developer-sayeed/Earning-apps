import { AiFillMail, AiOutlineUser } from "react-icons/ai";
import { BiSolidPhoneCall, BiWorld } from "react-icons/bi";

import user from "../../assets/img/user.png";
const UserSection = () => {
  return (
    <>
      <div className="userSection">
        <div className="header text-center">
          <img src={user} alt="" />
          <h2>Abusayeed</h2>
          <p>Admin</p>
        </div>
        <div className="Content">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>
                  <AiOutlineUser />
                </td>
                <td>Full Name</td>
                <td>MD Abu Sayeed Riday</td>
              </tr>
              <tr>
                <td>
                  <AiFillMail />
                </td>
                <td>Email</td>
                <td>admin@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <BiSolidPhoneCall />
                </td>
                <td>Phone</td>
                <td>0571858601</td>
              </tr>
              <tr>
                <td>
                  <BiWorld />
                </td>
                <td>Address</td>
                <td>Jeddah KSA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserSection;
