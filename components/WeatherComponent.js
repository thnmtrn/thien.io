import {useEffect, useState} from 'react'
import {appId, apiKeyAlgolia, apiKey} from '../environment';
import AlgoliaPlaces from 'algolia-places-react';
import CurrentWeather from "./CurrentWeather";
import ErrorMessageWeather from "./ErrorMessageWeather";

function WeatherComponent() {
	let [error, setError] = useState(false)
	let [currentWeather, setCurrentWeather] = useState({
		temp: '1',
		feels_like: '-1',
		description: 'snowing',
		icon: '50d',
		name: 'Hartford, CT',
		lat: 20.67,
		lon: -103.7
	});
	
	let [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&appid=${apiKey}&units=metric`);
	
	useEffect(() => {
		const getWeather = async () => {
			try {
				let res = await fetch(url);
				res = await res.json();
				let {description, icon} = res.weather[0];
				let {temp, feels_like} = res.main;
				setCurrentWeather({
					temp,
					feels_like,
					description,
					icon,
					name: `${res.name}, ${res.sys.country}`,
					lat: res.coord.lat,
					lon: res.coord.lon
				});
			} catch (e) {
				setError(true);
			}
		};
		getWeather();
	}, [url])
	
	return (
		<div className="text-white mt-32">
			{error && <ErrorMessageWeather/>}
			<div className="places-input text-gray-800 mt-5">
				<AlgoliaPlaces
					placeholder='Write an address here'
					onChange={({suggestion}) => setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${apiKey}&units=metric`)}
					options={{appId, apiKey: apiKeyAlgolia, aroundLatLngViaIP: false}}
				/>
			</div>
			<div className="container mx-auto font-sans md:w-128 max-w-lg rounded-lg overflow-hidden bg-gray-900 shadow-lg mt-8">
				<CurrentWeather weather={currentWeather}/>
			</div>
		</div>
	);
}

export default WeatherComponent;