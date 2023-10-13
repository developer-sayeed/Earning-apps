import PageLayout from "../components/PageLayout/PageLayout";
import ApprovedDeposit from "../page/Deposit/ApprovedDeposit";
import PendingDeposit from "../page/Deposit/PendingDeposit";
import ApprovedPayout from "../page/Payout/ApprovedPayout";
import PendingPayout from "../page/Payout/PendingPayout";
import RejectedPayout from "../page/Payout/RejectedPAyout";

import Dashboard from "../page/dashboard/Dashboard";
import DepositWallet from "../page/setting/DepositWallet";
import PayoutSetting from "../page/setting/PayoutSetting";
import UniLevel from "../page/setting/UniLevel";
import ActiveUserPage from "../page/user/ActiveUser";
import InActiveUSer from "../page/user/InActiveUSer";

// create Private router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/",
      },
      {
        element: <ActiveUserPage />,
        path: "/user/activeuser",
      },
      {
        element: <InActiveUSer />,
        path: "/user/inactiveuser",
      },
      {
        element: <PendingDeposit />,
        path: "/pending-deposit",
      },
      {
        element: <ApprovedDeposit />,
        path: "/approved-deposits",
      },
      {
        element: <ApprovedPayout />,
        path: "/approved-payout",
      },
      {
        element: <RejectedPayout />,
        path: "/reject-payout",
      },
      {
        element: <PendingPayout />,
        path: "/pending-payout",
      },
      {
        element: <PayoutSetting />,
        path: "/payoutSettings",
      },
      {
        element: <UniLevel />,
        path: "/uniLevelBonus",
      },
      {
        element: <DepositWallet />,
        path: "/depositWallet",
      },
    ],
  },
];

// export router
export default privateRouter;
