import WeatherCard from "./components/WeatherCard";
import WeatherIcon from "./components/WeatherIcon";

export default async function Home() {
    const city = "New York"
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`

    let request = await fetch(queryURL)
    let data = await request.json()

    console.log(data)

    return (
        <div>
            <main className='text-center'>
                <h1 className='text-3xl font-bold'>Weather App</h1>
            </main>
        </div>
    )
}
