import { ReactElement } from "react";

interface CampusCardProps {
    campusId: number,
    campusName: string,
    campusLocation: string
}

function SearchCard({campusId, campusName, campusLocation }: CampusCardProps): ReactElement {
    return (
        <div>
            <div>
                <img src="" />
                <div>
                    <h1>{campusName}</h1>
                    <h1>{campusLocation}</h1>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;