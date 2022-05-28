import { ReactElement } from "react";
import FormInput from "./chuncks/forminput.component";

function SearchForm(): ReactElement {
    return (
        <form>
            <FormInput type="text" name="search-campus"/>
        </form>
    )
}

export default SearchForm;