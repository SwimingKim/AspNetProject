import React, { useEffect, useState } from 'react'

interface WeatherForecastsState {
    isLoading: boolean;
    forecasts: WeatherForecast[];
}

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

const ForecastTable = ({ isLoading, forecasts }: WeatherForecastsState) => {
    if (isLoading) return <p><em>Loading...</em></p>

    return (
        <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast: WeatherForecast) =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>

    );
}

const FetchData = () => {

    const initialState: WeatherForecastsState = {
        isLoading: true,
        forecasts: []
    }
    const [state, setState] = useState(initialState)
    const { isLoading, forecasts } = state;

    useEffect(() => {
        setState({
            ...state,
            isLoading: true,
        })

        const t = setTimeout(() => {
            popluateWeatherData()
        }, 1000)

    }, [])

    async function popluateWeatherData() {
        const response = await fetch("weatherforecast")
        const data = await response.json()
        setState({
            ...state,
            isLoading: false,
            forecasts: data
        })
    }

    return (
        <>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            <ForecastTable isLoading={isLoading} forecasts={forecasts} />
        </>
    )
}
export default FetchData;