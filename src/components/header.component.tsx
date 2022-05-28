import { ReactElement } from "react";
import SearchForm from "./searchform.component";

function Header(): ReactElement {
    return (
        <header className="grid place-items-center w-screen h-8 p-4">
            <SearchForm />
        </header>
    )
}

export default Header;