import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  borderRadius: 40,
  backgroundColor: alpha(theme.palette.common.white, 0.40),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: 500,
  padding: '0 20px',
  height: 42,
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(4),
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingRight: '10px',
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  borderRight: "1px solid transparent",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#444",
  height: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // paddingRight: `calc(1.7em + ${theme.spacing(.5)})`,
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
