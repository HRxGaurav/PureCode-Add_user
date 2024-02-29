import './App.css';
import DashboardLayout from './components/sidebar/DashboardLayout';
import { CssBaseline, ThemeProvider } from "@mui/material";
import useSettings from './hooks/useSettings';
import {createCustomTheme} from './theme'
import RTL from './components/input-fields/RTL';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "./i18n";

function App() {
  const {
    settings
  } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  });


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RTL>
          <CssBaseline />
          
          <DashboardLayout />
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
