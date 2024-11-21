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
} from "react-icons/fi";

export const Home = styled(FiHome)(({ theme }) => ({
  fontSize: "22px",
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));

export const SearchIcon = styled(FiSearch)(({ theme }) => ({
  //  Responsive

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
