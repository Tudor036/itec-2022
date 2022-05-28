import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface CampusLevelButtonProps {
    name: string,
    id: number
}

/**
 * 
 * @param name - Name of the floor
 * @param id - id of level which links to floor map
 * @returns The link element which on click displays the map of level
 */
function CampusLevelButton({name, id}: CampusLevelButtonProps): ReactElement {
    return (
        <Link to={`/${id}`} key={id}>
            <h3>{name}</h3>
        </Link>
    )
}

export default CampusLevelButton;