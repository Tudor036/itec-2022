import { ReactElement } from "react";

interface ButtonProps {
    type: "auth" | "submit",
    children: string | ReactElement
}

function Button(props: ButtonProps): ReactElement {
    const type = props.type == "auth" ? "button" : props.type;
    
    return (
        <button
            className="grid place-items-center p-2 border-2 rounded-md border-blue-500"
            type={type}
        >
            {props.children}
        </button>
    )
}

export default Button;

