import { ReactElement } from "react";
import Button from "./chuncks/button.component";
import FormInput from "./chuncks/forminput.component";

function SignUpForm(): ReactElement {
    
    return (
        <form className="flex flex-col justify-center mx-auto">
            <FormInput name="username" type="text"/>
            <FormInput name="email" type="email"/>
            <FormInput name="password" type="password"/>
            <FormInput name="confirm-password" type="password"/>

            <Button type="submit">Sign Up</Button>
        </form>
    )
}

export default SignUpForm;