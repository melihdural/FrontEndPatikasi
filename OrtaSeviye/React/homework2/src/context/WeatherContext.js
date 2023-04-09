import citiesJSON from "../db/cities_turkey.json"
import {createContext, useContext, useState} from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState(citiesJSON.find((item) => item.id === 6));

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const values = {
        city,
        setCity,
        citiesJSON,
        days,
        weather,
        setWeather,
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);