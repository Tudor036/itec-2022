import { ReactElement, useEffect, useState } from "react";
import CampusLevelButton from "./campuslevelbutton.component";

interface floorTypes {
    name: string,
    id: number
}

const dataset = [
    {
        name: "floor 1",
        id: 1
    },
    {
        name: "floor 2",
        id: 2
    },
    {
        name: "floor 3",
        id: 3
    },
    {
        name: "floor 4",
        id: 4
    }
]

function CampusMenu(): ReactElement {

    const [ floors, setFloors ] = useState(dataset);

    useEffect(() => {
        const fetchBuildingFloors = async (): Promise<void> => {
            const result = await fetch('');
            const response= await result.json();

            setFloors(response);
        }

        // fetchBuildingFloors();
    })

    return (
        <aside>
            {
                floors.map((floor: floorTypes): ReactElement => (
                    <CampusLevelButton key={floor.id} name={floor.name} id={floor.id}/>
                ))
            }
        </aside>
    )
}

export default CampusMenu;