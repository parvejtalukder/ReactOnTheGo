import React from "react";

const Country = ({country}) => {
    console.log(country.name.common)
    const nameBook = country.name;
    const flagInfo = country.flags;
    return (
        <div>
            <img src={flagInfo.flags.png} alt={flagInfo.flags.alt}></img>
            <h2>Name: {nameBook.common}</h2>
        </div>
    )
}

export default Country;