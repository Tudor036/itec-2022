import { ReactElement } from "react";
import FormInput from "../chuncks/forminput.component";

function SearchForm(): ReactElement {
    return (
        <form className="flex flex-row justify-between items-center gap-4">
            <FormInput type="text" name="search"/>
            <button type="submit">
                {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
            </button>
        </form>
    )
}

export default SearchForm;