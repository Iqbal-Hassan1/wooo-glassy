import { Outlet } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
//
// import DashboardNavbar from "./DashboardNavbar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  // overflow: "hidden",
  backgroundColor: "#242424",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const DashboardLayout = () => {
  return (
    <RootStyle>
      {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};
export default DashboardLayout;
