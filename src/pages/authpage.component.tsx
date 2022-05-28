import { ReactElement } from "react";
import AuthForm from "../components/auth/authform.component";

import AuthIllustration from '../assets/photo/auth-illustration.jpg';

function AuthPage(): ReactElement {
    return (
        <div className="flex md:flex-row flex-col-reverse w-screen">
            <AuthForm />
            <div className="flex-1 grid place-items-center">
                <img 
                    className="w-2/3 sm:w-1/2 md:w-1/3"
                    src={AuthIllustration} 
                    alt="Authentication Illustration" 
                />
            </div>
        </div>
    )
}

export default AuthPage;