import {
  blueIcon,
  calender,
  card,
  CWealth,
  Fixed,
  greenIcon,
  home,
  lock,
  me,
  redIcon,
  reward,
  SafeBox,
  Savings,
  security,
  Spend,
  Targets,
  Wallet,
} from "./images";

export const cardItems = [
  {
    logo: Wallet,
    cardColor: "bg-[#ffeeee]",
    title: "Wallet",
    desc: "You can deposit this amount in CWealth and earn daily interests.",
    price: "₦ 2,290,345.45",
  },
  {
    logo: CWealth,
    title: "CWealth",
    cardColor: "bg-[#eeeeff]",
    desc: "Your daily returns. You can withdraw at any time.",
    price: "₦ 2,290,345.45",
  },
  {
    cardColor: "bg-[#ddffee]",
    logo: Targets,
    title: "Targets",
    desc: "Save daily, weekly, or Monthly towards your ",
  },
  {
    cardColor: "bg-[#f8ddff]",
    logo: SafeBox,
    title: "SafeBox",
    desc: "Your daily, weekly or monthly automatic savings",
  },
  {
    cardColor: "bg-[#f2ddff]",
    logo: Fixed,
    title: "Fixed",
    desc: "Min:₦ 1,000 Tenor: 7-1000 days",
  },
  {
    cardColor: "bg-[#ddffee]",
    logo: Spend,
    title: "Spend & Save",
    desc: "Your percentage savings every time you spend or transfer.",
  },
  {
    cardColor: "bg-[#e9fff2]",
    logo: Savings,
    title: "Savings Report",
    desc: "Check out your Savings journey so far",
  },
];

export const walletCard = [
  {
    icon: redIcon,
    title: "Cashmia Card Payment",
    desc: "May 9, 2024 13:21",
    price: "-₦1,500.00",
    balance: "Balance after: ₦ 51,409.34",
  },
  {
    icon: redIcon,
    title: "Transfer to Bank",
    desc: "May 9, 2024 13:21",
    price: "-₦1,500.00",
    balance: "Balance after: ₦ 51,409.34",
  },
  {
    icon: greenIcon,
    title: "Transfer to Bank",
    desc: "May 9, 2024 13:21",
    price: "-₦1,500.00",
    balance: "Balance after: ₦ 51,409.34",
  },
  {
    icon: redIcon,
    title: "Transfer to Bank",
    desc: "May 9, 2024 13:21",
    price: "-₦1,500.00",
    balance: "Balance after: ₦ 51,409.34",
  },
  {
    icon: blueIcon,
    title: "Bank Deposit",
    desc: "May 9, 2024 13:21",
    price: "-₦1,500.00",
    balance: "Balance after: ₦ 51,409.34",
  },
];

export const financeToggleContent = [
  {
    type: "target",
    icon: security,
    title: "Achieve your targets easily",
    desc: "The Annual interest rate of CTarget is 15% which is 3 times higher than banks",
  },
  {
    type: "target",
    icon: lock,
    title: "Secure & Guaranteed",
    desc: "Your funds are protected with the same 256bit HTTPS SSL as all other banks and all deposits are insured by NDIC.",
  },
  {
    type: "target",
    icon: calender,
    title: "Good returns ",
    desc: "₦300,000 and below, 15% p. a. Over ₦300,000, the first ₦300,000  at 15% p. a. the remaining balance at 6% p.a. ",
  },

  {
    type: "safeBox",
    icon: Spend,
    title: "Deposit anytime",
    desc: "Save dally, weekly or monthly and enjoy up to four free withdrawal days yearly ",
  },
  {
    type: "safeBox",
    icon: Spend,
    title: "Good return",
    desc: "Earn 15% p.a. on balances of ₦300,000 and below. For balances over ₦300,000, you will earn 15% p.a. on the first ₦300,000 and 6% p.a. on the remaining balance. ",
  },
  {
    type: "safeBox",
    icon: Spend,
    title: "Secure & Guaranteed",
    desc: "Your funds are protected with the same 256bit HTTPS SSL as all other banks and all deposits are insured by NDIC.",
  },

  {
    type: "fixed",
    icon: Spend,
    title: "Lock funds ",
    desc: " Create your unique savings plan with duration between 7 and 1000 days. Choose to lock funds and earn Interest today, Immediately.  ",
  },
  {
    type: "fixed",
    icon: Spend,
    title: "Good return",
    desc: "Earn 18% p.a. on balances of ₦300,000 and below. For balances over ₦300,000, you will earn 18% p.a. on the first ₦300,000 and 9% p.a. on the remaining balance.  ",
  },
  {
    type: "fixed",
    icon: Spend,
    title: "Secure & Guaranteed",
    desc: "Secured by the Central Bank of Nigeria Guarantee that the return will be repaid",
  },
];

export const bottomBarItems = [
  {
    icon: home,
    title: "Home",
    route: "/",
  },
  {
    icon: reward,
    title: "Reward",
    route: "reward",
  },
  {
    icon: me,
    title: "Finance",
    route: "finance",
  },
  {
    icon: card,
    title: "Card",
    route: "card",
  },
  {
    icon: me,
    title: "Me",
    route: "me",
  },
];
