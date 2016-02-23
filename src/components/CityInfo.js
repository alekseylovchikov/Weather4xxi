import React, { Component } from 'react';

export default class CityInfo extends Component {
	render() {
		return (
			<div className="panel panel-primary">
			  <div className="panel-heading">
			    <h3 className="panel-title">City: {this.props.city}</h3>
			  </div>
			  <div className="panel-body">
			    <h4>Weather: {this.props.temp} C</h4>
			    <a href="#" className="btn btn-warning">Add To List</a>
			  </div>
			</div>
		);
	}
}