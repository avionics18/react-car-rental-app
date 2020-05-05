import React, { Component } from 'react';
import CarItem from './CarItem';

class Cars extends Component {
	render() {
		return (
			<div className="container pt-5">
				<h4>Cars For Rent</h4>
				<hr/>
				<div className="row">
					{this.props.carsArray.map(eachCar=>{
						return (
							<CarItem key={eachCar.id} eachCar={eachCar} showDetails={this.props.showDetails} bookCar={this.props.bookCar} />
						)
					})}
				</div>
			</div>
		);
	}
}

export default Cars;