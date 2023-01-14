import React from "react";
import { Card, CardActionArea, CardActions, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import { Box, Stack } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const DashboardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Dashboard = () => {
  const theme = useTheme();

  return (
    <div>
      <h3 style={{ padding: "20px 0" }}>DashBoard / Attendance</h3>
      <Paper
        elevation={0}
        sx={{
          background: `${theme.palette.primary.main}`,
          padding: "50px 30px",
          borderRadius: "30px",
        }}
      >
        <DashboardContainer>
          <h2 style={{paddingBottom: 20}}>Good Morning Buchi</h2>
          <p style={{textAlign: 'center', lineHeight: 2, fontWeight: 'light'}}>
            Don’t Judge each other by the harvest you reap but by the seed you
            plant - <br /> <strong>- Walter White</strong>
          </p>
          <h2 style={{fontWeight: 'bold', fontSize: 40, paddingTop: 30}}>9:45 <span style={{fontWeight: '200'}}>am</span></h2>
          <p>Monday, 1st May 2023 </p>
          <Box pt={5}>
            <Stack direction="row" spacing={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <RestoreOutlinedIcon sx={{fontSize: '50px'}}/>
                <p>-- --</p>
                <p>Clock in</p>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <RestoreOutlinedIcon sx={{fontSize: '50px'}}/>
                <p>-- --</p>
                <p>Clock Out</p>
              </Box>
            </Stack>
          </Box>
          <Card
            elevation={0}
            sx={{
              height: "80px",
              width: "100px",
              margin: "30px auto",
              opacity: 0.9,
              borderRadius: "20px",
              backgroundImage: 'url(../../vector.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              outline: '2px dashed #000',
              outlineOffset: 5
            }}
          >
            <CardActionArea sx={{ height: "inherit", width: 'inherit' }}>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4>Check in</h4>
              </CardActions>
            </CardActionArea>
          </Card>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Stack direction="row" spacing={.5}><LocationOnIcon /> <h4>Location</h4></Stack>
            <p style={{paddingTop: 8, fontWeight: '400'}}>Within Office Environment</p>
          </Box>

        </DashboardContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
