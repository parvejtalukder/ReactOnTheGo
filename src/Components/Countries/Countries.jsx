import React, { use } from "react"; 
import Country from "../Country/Country";

const Countries = ({CountriesPromise}) => {
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    )
} 
export default Countries;