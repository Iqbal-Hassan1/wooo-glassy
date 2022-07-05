import { Routes, Route } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/DashboardLayout";
import MeetingLayout from "../layouts/MeetingLayout";
// all pages
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import Call from "../pages/Call";
// import Chat from "../pages/Chat";
//meeting routes
import Meeting from "../pages/Meeting";
import MeetingFrame from "../components/meeting-module/videoFrame/MeetingFrame";
//wallets routes
// import Wallet from "../pages/Wallet";

// ----------------------------------------------------------------------

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="meeting" element={<MeetingLayout />}>
          <Route index element={<Meeting />} />
          <Route path=":meetingID" element={<MeetingFrame />} />
        </Route>
        {/* <Route path="/call"></Route> */}
        {/* <Route path="/chat"></Route> */}
        {/* <Route path="/wallet"></Route> */}
      </Route>
      {/* <Route path="*" element={<NotFound />}></Route> */}
      {/* <Route path="404" element={<NotFound />}></Route> */}
    </Routes>
  );
};
export default Routers;
