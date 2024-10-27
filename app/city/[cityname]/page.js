import WeatherCard from "@/app/components/WeatherCard";

export default async function City({ params }) {
    const city = params.cityname
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`

    let request = await fetch(queryURL)
    let data = await request.json()

    console.log(data)

    return (
        <main className="flex justify-center items-center">
            <WeatherCard 
                city={city}
                currentTemp={data.main.temp}
                highTemp={data.main.temp_max}
                lowTemp={data.main.temp_min}
                cloudiness={data.clouds.all}
                humidity={data.main.humidity}
                windSpeed={data.wind.speed}
                weatherType={data.weather[0].main}
            />
        </main>
    )
}
