import Link from "next/link";
import { useEffect, useState } from "react";

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
                        <button className="w-full bg-purple-600 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-500S focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50">
                            Ajouter un/une athlète
                        </button>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <button className="w-full bg-purple-400 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-500S focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                            Revenir à l'accueil
                        </button>
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
                        <li
                            key={joueur.id}
                            className={`bg-purple-${bgIndex} py-2 px-2 flex justify-between`}
                        >
                            <p>
                                {index + 1} {joueur.nom} {joueur.prenom}
                            </p>
                            <button
                                className="bg-white text-red-700 rounded-full w-6 h-6"
                                onClick={() => supprimerJoueur(joueur.id)}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ul>

            <Link href="/">
                <a>
                    <button className="w-full bg-purple-400 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-500S focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        Revenir à l'accueil
                    </button>
                </a>
            </Link>
        </div>
    );
}

export default ListeDesJoueurs;
