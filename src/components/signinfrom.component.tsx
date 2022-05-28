import { ReactElement } from "react";
import FormInput from "./chuncks/forminput.component";
import Button from "./chuncks/button.component";

function  SignInForm(): ReactElement {
    return (
        <form className="flex flex-col justify-center mx-auto gap-8">
            <div className="flex flex-col gap-2">
                <FormInput name="email" type="email"/>
                <FormInput name="password" type="password"/>
            </div>

            <div className="flex flex-col">
                <Button type="submit">Sign In</Button>
                <p className="m-auto">or</p>
                <Button type="auth">Log in With Google</Button>
            </div>
        </form>
    )
}

export default SignInForm;