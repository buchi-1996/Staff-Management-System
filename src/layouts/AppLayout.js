import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../components/SearchBar";
import {
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardActionArea,
  CardActions,
  Paper,
  Typography,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useTheme } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import TuneIcon from "@mui/icons-material/Tune";
import HouseIcon from "@mui/icons-material/House";
import styled from "@emotion/styled";

const SideBarItems = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingTop: 60,
}));

const LayoutContainer = styled("div")(({ theme }) => ({
  minHeight: "100%",
  background: "#fff",
  borderRadius: "30px",
  padding: "20px",
  [theme.breakpoints.up("sm")]: {
    padding: "20px 50px",
  },
}));

const drawerWidth = 200;

const AppLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  console.log(theme.palette.secondary);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "inherit",
      }}
    >
      <Toolbar>
        <h3>Company Logo</h3>
      </Toolbar>
      <SideBarItems>
        <List>
          {[
            { text: "Attendance", Icon: PersonOutlineOutlinedIcon },
            { text: "Log History", Icon: RestoreOutlinedIcon },
            { text: "Leave request", Icon: FlightTakeoffOutlinedIcon },
            { text: "Messages", Icon: MailIcon },
          ].map(({ text, Icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: "15px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box mt="auto">
          <Divider />

          <Paper
            elevation={0}
            sx={{
              height: "60px",
              maxWidth: "80px",
              margin: "30px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.9,
              borderRadius: "20px",
            }}
          >
            <Typography>11:23am</Typography>
          </Paper>
          <Card
            elevation={0}
            sx={{
              height: "60px",
              maxWidth: "80px",
              margin: "30px auto",
              opacity: 0.9,
              borderRadius: "20px",
            }}
          >
            <CardActionArea sx={{ height: "inherit" }}>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </CardActions>
            </CardActionArea>
          </Card>
        </Box>
      </SideBarItems>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={false}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <SearchBar />
          <Box display="flex" alignItems="center" gap={3} ml={2}>
            <IconButton>
            <Badge color="notificationAlert" variant="dot">
              <NotificationsNoneOutlinedIcon />
            </Badge>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Paper elevation={0} sx={{borderRadius: '50px', padding: '5px 3px 5px 12px'}}>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>Buchi</Typography>
              <Avatar src="" alt="RC" sx={{width: 30, height: 30}}/>
            </Box>
            </Paper>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="maitbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: `${theme.palette.primary.main}`,
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: `${theme.palette.primary.main}`,
        }}
      >
        <Toolbar />
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 5px",
            display: { xs: "block", sm: "none" },
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ paddingLeft: "30px", paddingRight: "30px", height: "70px" }}
          >
            <BottomNavigationAction
              sx={{ minWidth: "70px" }}
              label="Home"
              icon={<HouseIcon />}
            />
            <BottomNavigationAction
              sx={{ minWidth: "70px" }}
              label="History"
              icon={<RestoreOutlinedIcon />}
            />
            <BottomNavigationAction
              sx={{ minWidth: "70px" }}
              label="Request"
              icon={<FlightTakeoffOutlinedIcon />}
            />
            <BottomNavigationAction
              sx={{ minWidth: "70px" }}
              label="Message"
              icon={<MailIcon />}
            />
            <BottomNavigationAction
              sx={{ minWidth: "70px" }}
              label="Settings"
              icon={<TuneIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Box>
  );
};

export default AppLayout;
