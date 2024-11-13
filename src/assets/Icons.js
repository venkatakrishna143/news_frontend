import { styled } from "@mui/material";
import { FiHome,FiSearch } from "react-icons/fi";

export const Home = styled(FiHome)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));


export const SearchIcon = styled(FiSearch)(({ theme }) => ({
  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {},
}));
