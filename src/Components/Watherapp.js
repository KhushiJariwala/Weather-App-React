import React, { useEffect, useState } from 'react'
import { MdLocationOn } from 'react-icons/md';

const Weatherapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Surat");

    useEffect( () => {
        const fetchAPI = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=51e856c795cd9954945fdfa262d0b268`;
            const response = await fetch(url);
            const resJSON = await response.json();
            // console.log(resJSON);
            setCity(resJSON.main);
        }
        fetchAPI();
    },[search] )

  return (
    <section className="section">
        <div className="forbox">
            <div className="box">
                <div className="inputdata">
                    <input type="search" value={search} className="inputfeild" placeholder="Type any City"
                        onChange={ (event) => {
                            setSearch(event.target.value)
                        } } />
                </div>

                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className="info">
                            <h2 className="location">
                                <div className="locationicon"> 
                                    <MdLocationOn />
                                </div>
                                <div className="search"> {search} </div>
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <p className="max-min">
                                Max : {city.temp_max}°Cel | Min : {city.temp_min}°Cel
                            </p>
                        </div>
                    )
                }

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </div>
    </section>
  )
}

export default Weatherapp