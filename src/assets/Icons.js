import { styled } from "@mui/material";
import {
  FiHome,
  FiSearch,
  FiX,
  FiFileText,
  FiUserCheck,
  FiCloud,
  FiBell,
  FiActivity,
  FiHeadphones,
  FiDollarSign,
  FiSliders,
  FiPlus,
  FiMenu,
  FiSettings,
  FiPower,
  FiMail,
  FiEye,
  FiEyeOff,
  FiLink,
  FiLink2,
} from "react-icons/fi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

export const Home = styled(FiHome)(({ theme }) => ({
  fontSize: "22px",
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const SearchIcon = styled(FiSearch)(({ theme }) => ({
  //  Responsive
  fontSize: "24px",
  cursor: "pointer",
  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Close = styled(FiX)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Sport = styled(FiUserCheck)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Technology = styled(FiCloud)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Notification = styled(FiBell)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Business = styled(FiDollarSign)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Entertainment = styled(FiHeadphones)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Health = styled(FiActivity)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Science = styled(FiSliders)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Add = styled(FiPlus)(({ theme }) => ({
  fontSize: "22px",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const MenuBars = styled(FiMenu)(({ theme }) => ({
  fontSize: "28px",
  color: "white",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const CloseMenu = styled(FiX)(({ theme }) => ({
  fontSize: "28px",
  color: "white",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const SavedNews = styled(FaBookmark)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const UnSavedNews = styled(FaRegBookmark)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Settings = styled(FiSettings)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Login = styled(FiPower)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const Mail = styled(FiMail)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const EyeOpen = styled(FiEye)(({ theme }) => ({
  //  Responsive
  cursor:"pointer",

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const EyeClose = styled(FiEyeOff)(({ theme }) => ({
  cursor:"pointer",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const NewTab = styled(FiLink2)(({ theme }) => ({
  cursor:"pointer",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));
