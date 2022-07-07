// routes
import Routers from "./routes/Routers";
// theme
import ThemeProvider from "./theme";
// components
// import ScrollToTop from "./components/ScrollToTop";
// import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <ThemeProvider>
      {/* <ScrollToTop /> */}
      {/* <BaseOptionChartStyle /> */}
      <Routers />
    </ThemeProvider>
  );
};
export default App;
