import PageLayout from "../components/PageLayout/PageLayout";
import ChangeFundPassword from "../page/Auth/ChangeFundPassword";
import ChangePassword from "../page/Auth/ChangePassword";
import ConpanyInfo from "../page/CompanyInfo/ConpanyInfo";
import DepositPage from "../page/Deposit/DepositPage";
import DepositRecord from "../page/Deposit/depositRecord";
import Homepage from "../page/Home/Homepage";
import MessionPage from "../page/Mession/MessionPage";
import Profile from "../page/Profile/Profile";
import TeamOne from "../page/Team/TeamOne";
import TeamPage from "../page/Team/TeamPage";
import TeamThree from "../page/Team/TeamThree";
import TeamTwo from "../page/Team/TeamTwo";
import VipMember from "../page/Vip/VipMember";
import Withdraw from "../page/Withdraw/Withdraw";
import WithdrawalRecord from "../page/Withdraw/WithdrawRecord";
import WithdwalMethod from "../page/Withdraw/WithdwalMethod";
import PrivateRouteGard from "./PrivateRouteGard";

// create Private router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        element: <PrivateRouteGard />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/mession",
            element: <MessionPage />,
          },
          {
            path: "/team",
            element: <TeamPage />,
          },
          {
            path: "/team/team1",
            element: <TeamOne />,
          },
          {
            path: "/team/team2",
            element: <TeamTwo />,
          },
          {
            path: "/team/team3",
            element: <TeamThree />,
          },
          {
            path: "/vip",
            element: <VipMember />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/deposit",
            element: <DepositPage />,
          },
          {
            path: "/deposit/record",
            element: <DepositRecord />,
          },
          {
            path: "/withdwal",
            element: <Withdraw />,
          },
          {
            path: "/withdwal/record",
            element: <WithdrawalRecord />,
          },
          {
            path: "/withdwalmethod",
            element: <WithdwalMethod />,
          },
          {
            path: "/changepassword",
            element: <ChangePassword />,
          },
          {
            path: "/changeFundpassword",
            element: <ChangeFundPassword />,
          },
          {
            path: "/companyinfo",
            element: <ConpanyInfo />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
