import { ReactElement } from "react";
import FormInput from "./chuncks/forminput.component";
import Button from "./chuncks/button.component";

function  SignInForm(): ReactElement {
    return (
        <form className="flex flex-col justify-center mx-auto">
            <FormInput name="email" type="email"/>
            <FormInput name="password" type="password"/>

            <Button type="submit">Sign In</Button>
        </form>
    )
}

export default SignInForm;