import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Cars from './components/cars/Cars';
import ShowDetails from './components/details/ShowDetails';
import Booking from './components/booking/Booking';
// ------------------------------------------------------------
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Cars} />
          <Route path="/details" component={ShowDetails} />
          <Route path="/booking" component={Booking} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;