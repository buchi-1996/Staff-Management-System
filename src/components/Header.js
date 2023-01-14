import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
    <AppBar position="static" elevation={false}>
      <Toolbar sx={{justifyContent: 'space-between', height: '10vh', gap: 4}}>
            
              {/* Logo */}
              {/* Search Bar */}
              {/* Notification Icon */}
              {/* User Profile */}
              <Box display="flex" alignItems="center" flexGrow={1} gap={2}>
                <Typography variant="h4" marginRight={{sm: 10, md: 20}}>Logo</Typography>
                <SearchBar />
              </Box>
              <Box display="flex" alignItems="center" gap={4}>
                <NotificationsNoneOutlinedIcon />
                <Avatar src="" alt="RC" />
              </Box>
           
      </Toolbar>
    </AppBar>
  );
};

export default Header;
