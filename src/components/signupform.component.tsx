import { ReactElement } from "react";
import Button from "./chuncks/button.component";
import FormInput from "./chuncks/forminput.component";

function SignUpForm(): ReactElement {
    
    return (
        <form className="flex flex-col justify-center mx-auto gap-8">
            <div className="flex flex-col gap-2">
                <FormInput name="username" type="text"/>
                <FormInput name="email" type="email"/>
                <FormInput name="password" type="password"/>
                <FormInput name="confirm-password" type="password"/>
            </div>

            <div className="flex flex-col">
                <Button type="submit">Sign Up</Button>
                <p className="m-auto">or</p>
                <Button type="auth">Log in With Google</Button>
            </div>
        </form>
    )
}

export default SignUpForm;