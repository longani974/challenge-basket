import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";

function ListeDesJoueurs() {
    const [listeDesJoueurs, setListeDesJoueurs] = useState([]);

    useEffect(() => {
        setListeDesJoueurs(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    useEffect(() => {
        localStorage.setItem("joueurs", JSON.stringify(listeDesJoueurs));
    }, [listeDesJoueurs]);

    function supprimerJoueur(id) {
        setListeDesJoueurs(
            listeDesJoueurs.filter((joueur) => joueur.id !== id)
        );
    }

    if (!listeDesJoueurs.length)
        return (
            <>
                <p>Vous n'avez pas encore ajouté de joueurs ou joueuses.</p>
                <Link href="ajouter-athlete">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Ajouter un/une athlète
                        </Button>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Button
                            bgColor="bg-purple-400"
                            bgColorHover="bg-purple-600"
                        >
                            Revenir à l'accueil
                        </Button>
                    </a>
                </Link>
            </>
        );

    return (
        <div>
            <ul>
                {listeDesJoueurs.map((joueur, index) => {
                    const bgIndex = index % 2 === 0 ? 100 : 200;

                    return (
                        <Link key={joueur.id} href={`/joueur/${joueur.id}`}>
                            <a>
                                <li
                                    className={`bg-purple-${bgIndex} py-2 px-2 flex justify-between`}
                                >
                                    <p>
                                        {index + 1} {joueur.nom} {joueur.prenom}
                                    </p>
                                    <button
                                        className="bg-white text-red-700 rounded-full w-6 h-6"
                                        onClick={() =>
                                            supprimerJoueur(joueur.id)
                                        }
                                    >
                                        X
                                    </button>
                                </li>
                            </a>
                        </Link>
                    );
                })}
            </ul>

            <Link href="/">
                <a>
                    <Button
                        bgColor="bg-purple-400"
                        bgColorHover="bg-purple-600"
                    >
                        Revenir à l'accueil
                    </Button>
                </a>
            </Link>
        </div>
    );
}

export default ListeDesJoueurs;
