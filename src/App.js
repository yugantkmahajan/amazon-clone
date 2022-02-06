import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //it refires the code when something chnge like user, basket 
    //it runs only once when app component loads
    auth.onAuthStateChanged(authUser=>{           //it is a listner that always listen
      console.log('the user is ', authUser);

      if (authUser){
        //the user is logged in
        dispatch({
          type:'SET_USER',
          user: authUser,
        });
      } else {
      //the user is logged out
      dispatch({
        type:'SET_USER',
        user: null,
      });
    }
    });
    }, []);

  return (
    <Router>
      <div className="app">
      
        <Switch>
        <Route path="/login">
             <Login/>
          </Route>
        <Route path="/checkout">
          <Header />
             <Checkout/>
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
