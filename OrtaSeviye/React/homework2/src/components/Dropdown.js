import {useWeather} from "../context/WeatherContext";
function Dropdown() {
    const { city, setCity, citiesJSON } = useWeather();

    const handleChange = (e) => {
        citiesJSON.filter((item)=> {
            if(item.name === e.target.value){
                setCity(item);
            }
        })
    }

    return(
        <div>
            <select
            name={"cities"}
            value={city.name}
            onChange={handleChange}
            >
                {citiesJSON.map((item, i) => {
                    return(
                        <option value={item.name} key={i}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}

export default Dropdown