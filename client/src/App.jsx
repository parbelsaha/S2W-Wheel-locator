import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WheelsContextProvider } from './context/WheelsContext';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import WheeldetailPage from './routes/WheeldetailPage';

const App = () => {
    return (
       <WheelsContextProvider>
    )
     <div>
        <Router> 
            <Switch>
            <Route exact path="/"component={Home}/>
            <Route exact path="/wheels/:id/update" component={UpdatePage}/>
            <Route exact path="/wheels/:id" component={WheeldetailPage}/>
           
            </Switch>
        </Router>
    </div>
    </WheelsContextProvider>
    );
};

export default App;
