import React, { useState, useEffect} from 'react'
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme,GlobalStyles } from './theme';
import "../style.css";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Home = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    
    return (

            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <div class="home-page d-flex align-items-center justify-content-center">
             <div className="home-div">
                 <h3 className="pb-4">Welcome</h3>
                 <h2>Devesh</h2>
                 <button className="togg" onClick={() => themeToggler()}>Change Theme</button>
                 <h2 className="text-capitalize h4 p-2"> {`Happy, to see you back`}</h2>
             </div>
         </div>        
      </StyledApp>
    </ThemeProvider>
    )
}

export default Home
