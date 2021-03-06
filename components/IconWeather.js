import {useEffect, useState} from 'react';

function IconWeather({icon}) {
	
	let [svg, setSvg] = useState('');
	
	
	useEffect(() => {
		const setIcon = () => {
			if (icon === '01d') {
				setSvg('day.svg')
			}
			if (icon === '01n') {
				setSvg('night.svg')
			}
			if (icon === '02d') {
				setSvg('cloudy-day-1.svg')
			}
			if (icon === '02n') {
				setSvg('cloudy-night-1.svg')
			}
			if (icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {
				setSvg('cloudy.svg')
			}
			if (icon === '09d' || icon === '09n') {
				setSvg('rainy-6.svg')
			}
			if (icon === '10d' || icon === '10n') {
				setSvg('rainy-3.svg')
			}
			if (icon === '11d' || icon === '11n') {
				setSvg('thunder.svg')
			}
			if (icon === '13d' || icon === '13n') {
				setSvg('snowy-5.svg')
			}
			if (icon === '50d' || icon === '50n') {
				setSvg('cloudy.svg')
			}
		}
		setIcon();
	}, [icon])
	
	
	return (
		<div>
			<img src={`../components/weather-icons/${svg}`} width="110" height="110" alt=""/>
		</div>
	);
}

export default IconWeather
