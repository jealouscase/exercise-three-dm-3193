
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faBolt, faSun, faSnowflake, faWind, faCloudRain } from "@fortawesome/free-solid-svg-icons";

// https://openweathermap.org/weather-conditions

export default function WeatherIcon({ weatherType, width }) {
    switch (weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} width={width} />
        case 'stormy':
            return <FontAwesomeIcon icon={faBolt} width={width} />
        case 'sunny':
            return <FontAwesomeIcon icon={faSun} width={width} />
        case 'snowing':
            return <FontAwesomeIcon icon={faSnowflake} width={width} />
        case 'windy':
            return <FontAwesomeIcon icon={faWind} width={width} />
        case 'Rain':
            return <FontAwesomeIcon icon={faCloudRain} width={width} />
        default:
            return <FontAwesomeIcon icon={faCloud} width={width} />
    }
}