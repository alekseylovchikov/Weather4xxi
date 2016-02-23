import React, { Component } from 'react';

export default class CityListItem extends Component {
	render() {
		return (
			<li className="list-group-item">{this.props.city}: temp: {this.props.temp} C <span className="pull-right"><a href="#">Delete</a></span></li>
		);
	}
}