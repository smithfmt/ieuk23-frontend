import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import { useUser } from "../lib/User";
import SignOut from "./SignOut";

const Nav = () => {
    const user = useUser();
    return (
        <NavStyles>
            <Link href="/products">Products</Link>
            {
                user && (
                    <>
                        <Link href="/sell">Sell</Link>
                        <Link href="/orders">Orders</Link>
                        <Link href="/account">Account</Link>
                        <SignOut>Sign Out</SignOut>
                    </>
                )
            }
            {
                !user && (
                    <Link href="/signin">Sign In</Link>
                )
            }

        </NavStyles>
    );
};

export default Nav;