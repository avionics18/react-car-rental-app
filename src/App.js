import React, { Component } from 'react';
import {v4} from 'uuid';
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

  state = {
    cars: [
      {
        id: v4(),
        model: "Hyundai Grand i10",
        veh_no: "18 D 4356",
        color: "Crimson Red",
        image: "hyundai_grand_i10.jpg",
        seat_cap: 4,
        rent_day: 350,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
          content: "The Grand i10 makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Grand i10 will still give you nearly 750 km on a single tank!"
        }
      },
      {
        id: v4(),
        model: "Ford EcoSPort",
        veh_no: "289KD 4356",
        color: "Glossy Blue",
        image: "ford_ecosport.jpg",
        seat_cap: 4,
        rent_day: 1350,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "1498cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
          content: "The Ford EcoSPort makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Ford EcoSPort will still give you nearly 550 km on a single tank!"
        }
      },
      {
        id: v4(),
        model: "Maruti Suzuki XL6",
        veh_no: "44CV 4356",
        color: "Deep Blue",
        image: "maruti_suzuki_xl6.jpg",
        seat_cap: 6,
        rent_day: 850,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "1462cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
          content: "The Maruti Suzuki XL6 makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Maruti Suzuki XL6 will still give you nearly 950 km on a single tank!"
        }
      },
      {
        id: v4(),
        model: "Lexus ES 300H",
        veh_no: "23 B 5846",
        color: "Red Mica Crystal Shine",
        image: "lexus_es_300h.jpg",
        seat_cap: 5,
        rent_day: 8850,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "2487cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at laborum sit eius dolorem soluta magnam mollitia dolorum molestias, minus. Facere dolor fuga molestiae nisi, impedit amet, perspiciatis similique illum magnam laudantium iusto. Commodi voluptate beatae exercitationem facilis officia, incidunt accusantium hic ex dolor minima fugiat repellendus ipsa maiores tempora."
        }
      },
      {
        id: v4(),
        model: "Ford Freestyle VCT",
        veh_no: "17 NT 5716",
        color: "Canyon Ridge",
        image: "ford_freestyle_vct.jpg",
        seat_cap: 5,
        rent_day: 600,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "1194cc, 3 Cylinders Inline, 4 Valves/Cylinder, DOHC",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vero, est quo asperiores debitis ipsa excepturi corporis vitae ratione minus laboriosam nostrum iure omnis facilis rerum blanditiis, consequatur ea sequi natus quae molestias expedita porro, ex fugiat. Repellendus, reprehenderit tenetur!"
        }
      },
      {
        id: v4(),
        model: "Skoda Rapid",
        veh_no: "39 O 3326",
        color: "Lapiz Blue",
        image: "skoda_rapid.jpg",
        seat_cap: 5,
        rent_day: 920,
        book_status: false,
        description: {
          type: "Petrol Car",
          engine: "1598cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora non perspiciatis, quia iusto. Doloribus distinctio repellat reprehenderit ea commodi veniam officia ipsam. Incidunt ea nulla ex aut, dolorum voluptate perspiciatis?"
        }
      }
    ],

    showCar: {},
    book_car: {}
  }

  showDetails = (element) => {
    this.setState({...this.state, showCar: element});
  }

  bookCar = (element) => {
    this.setState({...this.state, book_car: element});
  }

  updateState = (updatedCar) => {
    const arr = [...this.state.cars];
    let index;
    arr.forEach((ele,i)=>{
      if(ele.id===updatedCar.id){
        index = i;
      }
    });
    arr.splice(index, 1, updatedCar);
    const obj = {...this.state, cars: arr};
    this.setState(obj);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props => (<Cars carsArray={this.state.cars} showDetails={this.showDetails} bookCar={this.bookCar} />)} />
          <Route path="/details" render={props => (<ShowDetails eachCar={this.state.showCar} bookCar={this.bookCar} />)} />
          <Route path="/booking" render={props => (<Booking carToBook={this.state.book_car} updateState={this.updateState} />)} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;