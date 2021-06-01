import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <a>
                <h1 className="text-center text-xl font-bold uppercase text-purple-900 bg-purple-100 mb-4 py-2 rounded-lg">
                    Challenge Basket U13
                </h1>
            </a>
        </Link>
    );
}

export default Logo;
