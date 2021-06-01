import Link from "next/link";
import Logo from "./ui/Logo";

function Layout({ children }) {
    return (
        <div className="container mx-auto px-2 py-2">
            <Logo />
            {children}
        </div>
    );
}

export default Layout;
