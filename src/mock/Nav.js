import { FaHome } from "react-icons/fa";
import { Business, CurrentA, Entertainment, Health, Home, Notification, Science, SearchIcon, Sport, Technology ,} from "../assets/Icons";

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
    authenticatedpath:"/user"
  },
  {
    id: 2,
    title: "Sports",
    icon: <Sport />,
    apiid: "sports",
    path: "/sports",
    authenticatedpath:"/user"
  },
  {
    id: 3,
    title: "Health",
    icon: <Health />,
    apiid: "health",
    path: "/heath",
    authenticatedpath:"/user"
  },
  {
    id: 4,
    title: "Science",
    icon: <Science />,
    apiid: "science",
    path: "/science",
    authenticatedpath:"/user"
  },
   
  {
    id: 5,
    title: "Business",
    icon: <Business />,
    apiid: "business",
    path: "/business",
    authenticatedpath:"/user"
  },
  {
    id: 6,
    title: "Entertainment",
    icon: <Entertainment />,
    apiid: "entertainment",
    path: "/entertainment",
    authenticatedpath:"/user"
  },
  {
    id: 7,
    title: "Technology",
    icon: <Technology />,
    apiid: "technology",
    path: "/technology",
    authenticatedpath:"/user"
  },
  {
    id: 8,
    title: "Notifications",
    icon: <Notification />,
    apiid: "notifications",
    path: "/notifications",
    authenticatedpath:"/user"
  },
];
