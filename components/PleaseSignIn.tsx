import { ReactNode } from "react";
import { useUser } from "../lib/User";
import SignIn from "./SignIn";

const PleaseSignIn = ({ children }: { children: ReactNode }) => {
    const me = useUser();
    if (!me) return <SignIn />;
    return children;
};

export default PleaseSignIn;