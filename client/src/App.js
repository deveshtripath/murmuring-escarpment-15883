import React, {useEffect, createContext, useReducer, useContext} from 'react'
import {  Route,Switch,Router,BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import 'react-toastify/dist/ReactToastify.css';
import { initialState, reducer } from './reducer/userReducer';

import Navbar from "./componenets/navbar";
import Home from "./componenets/Home";
import Signin from "./componenets/Signin";
import Signup from "./componenets/Signup";
import Contact from "./componenets/contact";
export const UserContext = createContext();


const Routing = () => {

   const { state, dispatch } = useContext(UserContext);

    const getUserName = async () => {
        try {
            const response = await fetch('/getUserDetails', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }); 
            console.log(response);
            const data = await response.json();
            console.log(`My Home data Login `+data.name);
            if (data) {
                dispatch({ type: 'USER', payload:data });
              console.log(`login ka useffect ` + data);
            }
        } catch (error) {
            console.log(`My Home page error `+error);
          }
    }
    useEffect(() => {
      getUserName();
    }, []);


  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/signin">
                <Signin />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/signup">
                <Signup />
            </Route>
      </Switch>
    </BrowserRouter>
  )
}

const App = () => {
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
    
        <Navbar />
        <Routing />
        
      
       </UserContext.Provider>
    </>
  )
}

export default App;
