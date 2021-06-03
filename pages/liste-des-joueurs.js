import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

function ListeDesJoueurs() {
    const [listeDesJoueurs, setListeDesJoueurs] = useState([]);

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: "100%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

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
            <motion.ul
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                {listeDesJoueurs.map((joueur, index) => {
                    const bgIndex = index % 2 === 0 ? 100 : 200;

                    return (
                        <Link key={joueur.id} href={`/joueur/${joueur.id}`}>
                            <a>
                                <li
                                    className={`bg-purple-${bgIndex} py-2 px-2 flex justify-between cursor-pointer`}
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
            </motion.ul>

            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
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
            </motion.div>
        </div>
    );
}

export default ListeDesJoueurs;
