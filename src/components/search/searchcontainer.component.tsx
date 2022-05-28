import { ReactElement, useEffect, useState } from "react";

function SearchContainer(): ReactElement {

    const [ locations, setLocations ] = useState(null);

    useEffect(() => {
        const fetchLocations = async (): Promise<void> => {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await result.json();
            
            console.log(response);
            
        }

        fetchLocations();
    })

    return (
        <div>
             
        </div>
    )
}

export default SearchContainer;