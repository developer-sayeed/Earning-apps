import * as AiIcons from "react-icons/ai";
import { BiMoney, BiSitemap } from "react-icons/bi";
import { PiMoney, PiMoneyLight } from "react-icons/pi";
import { TbZoomMoney } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiNotebook, GiPayMoney } from "react-icons/gi";

import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "User",
    icon: <RiIcons.RiAdminFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    children: [
      {
        title: "Vip User",
        path: "/user/activeuser",
        icon: <BiSitemap />,
      },
      {
        title: "inactive User",
        path: "/user/inactiveuser",
        icon: <BiSitemap />,
      },
    ],
  },
  {
    title: "User Deposit",
    icon: <TbZoomMoney />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    children: [
      {
        title: "Pending Deposit",
        path: "/pending-deposit",
        icon: <PiMoneyLight />,
      },
      {
        title: "Approved Deposits",
        path: "/approved-deposits",
        icon: <PiMoney />,
      },
    ],
  },
  {
    title: "PayOut",
    icon: <GiPayMoney />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    children: [
      {
        title: "Pending Payout",
        path: "/pending-payout",
        icon: <BiMoney />,
      },
      {
        title: "Approved Payout",
        path: "/approved-payout",
        icon: <BiMoney />,
      },
      {
        title: "Reject Payout",
        path: "/reject-payout",
        icon: <BiMoney />,
      },
    ],
  },
  {
    title: "Report",
    icon: <GiNotebook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    children: [
      {
        title: "UniLevel Bonus",
        path: "/uniLevelBonus",
        icon: <BiMoney />,
      },
      {
        title: "Payout Settings",
        path: "/payoutSettings",
        icon: <MdAdminPanelSettings />,
      },
      {
        title: "Deposit Wallet",
        path: "/depositWallet",
        icon: <BiMoney />,
      },
    ],
  },
  {
    title: "Setting",
    icon: <AiIcons.AiOutlineSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    children: [
      {
        title: "UniLevel Bonus",
        path: "/uniLevelBonus",
        icon: <BiMoney />,
      },
      {
        title: "Payout Settings",
        path: "/payoutSettings",
        icon: <MdAdminPanelSettings />,
      },
      {
        title: "Deposit Wallet",
        path: "/depositWallet",
        icon: <BiMoney />,
      },
    ],
  },
];
