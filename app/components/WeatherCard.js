import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({ 
    city, 
    currentTemp, 
    highTemp,
    lowTemp,
    cloudiness,
    humidity,
    windSpeed,
    weatherType,
}) => {
    const background = `linear-gradient(1800deg, white, ${cloudiness}%, grey)`

    return (
        <div className='border-2 border-black p-8 flex gap-8' style={{ background }} >
            <div className='text-center flex flex-col gap-2'>
                <WeatherIcon weatherType={weatherType} width={100} />
                <p className='text-xl font-medium'>{currentTemp}°F</p>
            </div>
            <div>
                <p className='text-2xl font-bold'>{city}</p>
                <div>
                    <p>High Temperature: {highTemp}°F</p>
                    <p>Low Temperature: {lowTemp}°F</p>
                    <p>Cloudiness: {cloudiness}%</p>
                    <p>Humidity: {humidity}g/kg</p>
                    <p>Wind Speed: {windSpeed}mph</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;