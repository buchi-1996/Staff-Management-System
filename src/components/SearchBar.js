import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: 500,
  height: 45,
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(4),
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  right: 0,
  borderLeft: "1px solid transparent",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#444",
  height: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1.7em + ${theme.spacing(4)})`,
    width: "100% !important",
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        fullWidth={true}
        autoComplete="true"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
