import { ReactElement } from "react";

interface InputProps {
    type: "text" | "email" | "password",
    name: string | undefined,
}

function  FormInput(props: InputProps): ReactElement {
    return (
        <label
            className="flex justify-between gap-4 items-center" 
            htmlFor={props.name}>{props.name}: 
            <input 
                className="border-b-2 border-blue-300 focus:outline-0"
                type={props.type} 
                name={props.name} 
                id={props.name}
            />
        </label>
    )
}

export default FormInput;