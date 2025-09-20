import React from "react";
import Header from "./Home/Header";
import Body from "./Home/Body";
import SearchBook from "./Home/Searcharea";
const AllComp = () => {
    return (
        <>
         <div className="flex flex-col gap-3.5">
            <Header></Header>
            <Body></Body>
            <SearchBook></SearchBook>
         </div>
        </>
    )
}

export default AllComp;