import React, { Component } from 'react';

export default class SearchCity extends Component {
	onSubmit(e) {
		e.preventDefault();

		let city = this.refs.city.value.trim();

		if (!city) {
			$('#emptyCity').modal('show');
			return;
		}

		this.props.onSubmitForm(city);
		this.refs.city.value = "";
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<h4>Find city</h4>
					<p><input type="text" ref="city" className="form-control" placeholder="Type city" /></p>
					<p><button className="btn btn-success">Search</button></p>
				</form>
			</div>
		);
	}
}