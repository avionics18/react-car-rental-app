import React, { Component } from 'react';
import CarItem from './CarItem';
import {connect} from 'react-redux';

class Cars extends Component {
	render() {
		return (
			<div className="container pt-5">
				<h4>Cars For Rent</h4>
				<hr/>
				<div className="row">
					{this.props.carsArray.map(eachCar=>{
						return (
							<CarItem key={eachCar.id} eachCar={eachCar} />
						)
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { carsArray: [...state.cars] }
}



export default connect(mapStateToProps, null)(Cars);