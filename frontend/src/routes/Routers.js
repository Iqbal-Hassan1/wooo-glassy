import { Routes, Route } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/DashboardLayout";
import MeetingLayout from "../layouts/MeetingLayout";
import MeetingVideoFrameLayout from "../layouts/MeetingVideoFrameLayout";
// all pages
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import Call from "../pages/Call";
// import Chat from "../pages/Chat";

//meeting pages routes
import New from "../pages/MeetingNew";
import Join from "../pages/MeetingJoin";
import Schedule from "../pages/MeetingSchedule";
import History from "../pages/MeetingHistory";

// import MeetingFrame from "../components/meeting-module/videoFrame/MeetingFrame";
//wallets routes
// import Wallet from "../pages/Wallet";

// ----------------------------------------------------------------------

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="meeting" element={<MeetingLayout />}>
          <Route path="new" element={<New />} />
          <Route path="join" element={<Join />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="history" element={<History />} />
        </Route>
        {/* <Route path="/call"></Route> */}
        {/* <Route path="/chat"></Route> */}
        {/* <Route path="/wallet"></Route> */}
      </Route>
      <Route path=":meetingID" element={<MeetingVideoFrameLayout />}>
        {/* <Route index element={<MeetingFrame />}/> */}
      </Route>
      {/* <Route path="*" element={<NotFound />}></Route> */}
      {/* <Route path="404" element={<NotFound />}></Route> */}
    </Routes>
  );
};
export default Routers;
