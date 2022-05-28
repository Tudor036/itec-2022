import { ReactElement, SyntheticEvent, useState } from "react";
import Button from "./chuncks/button.component";
import SignInForm from "./signinfrom.component";
import SignUpForm from "./signupform.component";

function AuthForm(): ReactElement {
    const [ authType, setAuthType ] = useState(0);

    function changeAuthType(e: SyntheticEvent): void {
        const element = e.target as HTMLElement;
        const text: string | null = element.textContent;
        
        if(text == "Sign In") {
            setAuthType(0);
        } else {
            setAuthType(1);
        }
    }

    return (
        <div className="flex flex-col justify-center flex-1 gap-4 h-min m-auto">
            <nav className="flex flex-row justify-around mx-auto gap-4">
                <button type="button" onClick={changeAuthType}>Sign In</button>
                <button type="button" onClick={changeAuthType}>Sign Up</button>
            </nav>
            
            {
                authType == 0 ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )
            }

            <p className="m-auto">or</p>
            <Button type="auth">Log in With Google</Button>
        </div>
    )
}

export default AuthForm;