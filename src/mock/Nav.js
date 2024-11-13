import { FaHome } from "react-icons/fa";
import { Home, SearchIcon } from "../assets/Icons";

export const NavData = [
  // {
  //   id: 0,
  //   icon: <SearchIcon />,
  //   event:"clicked"
  // },
  {
    id: 1,
    title: "Home",
    icon: <Home />,
    apiid: "home",
    path: "/home",
  },
  {
    id: 2,
    title: "Top Headlines",
    icon: <FaHome />,
    apiid: "top headlines",
    path: "/top-headlines",
  },
  {
    id: 3,
    title: "Current Affairs",
    icon: <FaHome />,
    apiid: "current affairs",
    path: "/current-affairs",
  },
  {
    id: 4,
    title: "Sports",
    icon: <FaHome />,
    apiid: "sports",
    path: "/sport",
  },
  {
    id: 5,
    title: "Technology",
    icon: <FaHome />,
    apiid: "technology",
    path: "/technology",
  },
  {
    id: 6,
    title: "Notifications",
    icon: <FaHome />,
    apiid: "notifications",
    path: "/notifications",
  },
];
