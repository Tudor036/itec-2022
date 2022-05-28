import React, { ReactElement } from "react";
import Header from "../components/header.component";
import SearchContainer from "../components/searchcontainer.component";
import SearchForm from "../components/searchform.component";

function SearchPage(): ReactElement {
    return (
        <div className="w-screen h-screen">
            <Header />
            <SearchContainer />
        </div>
    )
}

export default SearchPage;