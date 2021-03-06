import React from 'react'
import IconWeather from "./IconWeather";

function CurrentWeather({weather}) {
	return (
		<div className="current-weather flex items-center justify-between px-6 py-8">
			<div className="flex flex-col md:flex-row items-center">
				<div>
					<div className="text-6xl font-semibold">{weather.temp}°C</div>
					<div>Feels like {weather.feels_like}°C</div>
				</div>
				<div className="md:mx-5">
					<div className="font-semibold">{weather.description}</div>
					<div>{weather.name}</div>
				</div>
			</div>
			<IconWeather icon={weather.icon}/>
		</div>
	);
}

export default CurrentWeather