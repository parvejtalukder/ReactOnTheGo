import React from "react";
const SearchBook = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend bg-blue-950 h-auto px-4 rounded-xl">Beta</legend>
                    <div className="join">
                        <input type="text" className="input join-item border-0 border-transparent selection:border-0" placeholder="Country Name"  id="inputName"/>
                        <button className="btn join-item border-1 border-transparent" id="inputBtn">Search</button>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default SearchBook;