import Link from "next/link";
import Button from "../components/ui/Button";

function ChoisirUneEpreuve() {
    return (
        <div>
            <Link href="/epreuve/1">
                <a>
                    <Button bgColor="bg-green-400" bgColorHover="bg-green-600">
                        Marine Johannes
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/2">
                <a>
                    <Button
                        bgColor="bg-yellow-400"
                        bgColorHover="bg-yellow-600"
                    >
                        Evan Fournier
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/3">
                <a>
                    <Button bgColor="bg-blue-400" bgColorHover="bg-blue-600">
                        Nicolas Batum
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/4">
                <a>
                    <Button bgColor="bg-pink-400" bgColorHover="bg-pink-600">
                        Sandrine Gruda
                    </Button>
                </a>
            </Link>
            <br />
            <br />
            <br />
            <Link href="/">
                <a>
                    <Button
                        bgColor="bg-purple-600"
                        bgColorHover="bg-purple-700"
                    >
                        Revenir à l'accueil
                    </Button>
                </a>
            </Link>
        </div>
    );
}

export default ChoisirUneEpreuve;
