import { ReactElement, SyntheticEvent, useState } from "react";
import Button from "../chuncks/button.component";
import SignInForm from "./signinfrom.component";
import SignUpForm from "./signupform.component";

import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

function AuthForm(): ReactElement {
    const [ authType, setAuthType ] = useState<"SIGN IN" | "SIGN UP">("SIGN IN");

    return (
        <div className="flex flex-col justify-center flex-1 gap-4 h-min m-auto">
            <FormControl>
                <FormLabel>Authentication:</FormLabel>
                <RadioGroup
                    value={authType}
                    onChange={(event) => {
                        setAuthType(event.target.value.toLocaleUpperCase() as "SIGN IN" | "SIGN UP");
                    }}
                >
                    <FormControlLabel value={"SIGN IN"} control={<Radio />} label="Sign In" />
                    <FormControlLabel value={"SIGN UP"} control={<Radio />} label="Sign Up" />
                </RadioGroup>
            </FormControl>
            
            {
                authType === "SIGN IN" ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )
            }
        </div>
    )
}

export default AuthForm;