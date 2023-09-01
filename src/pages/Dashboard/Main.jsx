import React from "react";
import DashBoardLayout from "./DashBoardLayout";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Main = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DashBoardLayout>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          </Box>
        </DashBoardLayout>
      </Box>
    </>
  );
};

export default Main;
