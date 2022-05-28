import React, { ReactElement } from "react";
import Header from "../components/header.component";
import SearchContainer from "../components/search/searchcontainer.component";
import SearchForm from "../components/search/searchform.component";

function SearchPage(): ReactElement {
    return (
        <div className="w-screen h-screen">
            <Header />
            <SearchContainer />
        </div>
    )
}

export default SearchPage;