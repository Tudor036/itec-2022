import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface CampusCardProps {
    campusId: number,
    campusName: string,
    campusLocation: string
}

function SearchCard({campusId, campusName, campusLocation }: CampusCardProps): ReactElement {
    
    return (
        <div>
            <img src="" alt="" />
            <div>
                <div>
                    <h1>{campusName}</h1>
                    <h1>{campusLocation}</h1>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;