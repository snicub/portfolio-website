import { useState } from "react";

import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";


const App = () => {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <LightModeIcon /> : <DarkModeIcon />; // Icons imported from `@material-ui/icons`
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={() => setTheme(!theme)}
        >
          {icon}
        </IconButton>

        <Intro />
        <About />
        <ProductList />
        <Contact />
      </Paper>
    </ThemeProvider>
  );
};

export default App;

export const light = {
  palette: {
    type: "light",
  },
};
export const dark = {
  palette: {
    type: "dark",
  },
};
