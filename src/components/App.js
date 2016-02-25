// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Libs
let geocoderProvider = 'google';
let httpAdapter = 'http';
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);

// Components
import SearchCity from './SearchCity';
import CityListItem from './City';
import CityInfo from './CityInfo';

export default class App extends Component {
	constructor(props) {
		super(props);
		
		let lon, lat;
		
		geocoder.reverse({ lat: 58, lon: 33 }, function(err, res) {
		    console.log(res);
		});

		this.state = {
			// lon: parseFloat(lon),
			// lat: parseFloat(lat),
			lon: 37,
			lat: 55,
			city: '',
			temp: null
		};
		
	}
	
	getWeatherByCityName() {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.props.apiKey}&lang=ru&units=metric`,
			dataType: 'json',
			success: function(data) {
				if (data.cod == '404') {
					console.log(data);
					alert(data.message);
					this.setState({
						city: 'Moscow'
					});
					
					this.getWeatherByCityName();
				} else {
					this.setState({
						temp: data.main.temp,
						city: data.name
					});
					
					this.getWeatherByCityName();
				}
			}.bind(this),
			error: function(xhr, status, error) {
				// alert('error:', error);
			}
		});
	}

	getWeatherByGeoposition() {
		let weHaveSuccess = false;
		console.log('get weather by current position:', this.state.lon, this.state.lat);

		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.props.apiKey}&lang=ru&units=metric`,
			dataType: 'json',
			success: function(data) {
				weHaveSuccess = true;

				if (data.cod == '404') {
					this.getWeatherByCityName();
					console.log('error');
				} else {
					this.setState({
						temp: data.main.temp,
						city: data.name
					});
				}
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({
					lon: 37,
					lat: 55
				});
				
				alert(error);
			},
			complete: function() {
				if (!weHaveSuccess) {
					alert('City its not correct!');
				} else {
					console.log('complete: ', this.state.lon, this.state.lat);
				}
			}
		});
	}

	handleFormSubmit(city) {
		this.setState({ city: city }, function() {
			this.getWeatherByCityName();	
		});
	}

	componentWillMount() {
		this.getWeatherByGeoposition();
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<SearchCity onSubmitForm={this.handleFormSubmit.bind(this)} />
					<CityInfo city={this.state.city} temp={this.state.temp} />
				</div>
				<div className="col-md-6">
					<h4>Added city</h4>
					<ul className="list-group">
                        <li className="list-group-item">Borovichi <span className="pull-right"><a href="#">Delete</a></span></li>
                        <li className="list-group-item">Moscow <span className="pull-right"><a href="#">Delete</a></span></li>
                        <li className="list-group-item">SpB <span className="pull-right"><a href="#">Delete</a></span></li>
                        <li className="list-group-item">Sochi <span className="pull-right"><a href="#">Delete</a></span></li>
					</ul>
				</div>
			</div>
		);
	}
}

App.propTypes = { apiKey: React.PropTypes.string };
App.defaultProps = { apiKey: 'ec6f6d31cbbd4a70207a854f166df01c' };