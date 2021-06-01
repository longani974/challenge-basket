import Link from "next/link";
import Button from "../components/ui/Button";
import { couleurSelonEpreuve, transformerIdEnTitreEpreuve } from "../utils";

function ChoisirUneEpreuve() {
    return (
        <div>
            <Link href="/epreuve/1">
                <a>
                    <Button
                        bgColor={`bg-${couleurSelonEpreuve(1)}`}
                        bgColorHover="bg-green-600"
                    >
                        {transformerIdEnTitreEpreuve(1)}
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/2">
                <a>
                    <Button
                        bgColor={`bg-${couleurSelonEpreuve(2)}`}
                        bgColorHover="bg-yellow-600"
                    >
                        {transformerIdEnTitreEpreuve(2)}
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/3">
                <a>
                    <Button
                        bgColor={`bg-${couleurSelonEpreuve(3)}`}
                        bgColorHover="bg-blue-600"
                    >
                        {transformerIdEnTitreEpreuve(3)}
                    </Button>
                </a>
            </Link>
            <Link href="/epreuve/4">
                <a>
                    <Button
                        bgColor={`bg-${couleurSelonEpreuve(4)}`}
                        bgColorHover="bg-pink-600"
                    >
                        {transformerIdEnTitreEpreuve(4)}
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
