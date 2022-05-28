import { ReactElement } from "react";

interface ButtonProps {
    type: "auth" | "submit",
    children: string
}

function Button(props: ButtonProps): ReactElement {
    const type = props.type == "auth" ? "button" : props.type;
    
    return (
        <button
            className=""
            type={type}
        >
            {props.children}
        </button>
    )
}

export default Button;

