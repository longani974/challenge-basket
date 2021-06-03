import Link from "next/link";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function ChoisirJoueur({
    listeDesJoueurs,
    toggleMontrerAjouterScore,
    joueurChoisi,
}) {
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

    function choisirJoueur(nom, prenom, id) {
        toggleMontrerAjouterScore();

        joueurChoisi(nom, prenom, id);
    }

    return (
        <div>
            <motion.h2
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                Choisir un/une participant(e):
            </motion.h2>
            <>
                <motion.ul
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {listeDesJoueurs.map((joueur, index) => {
                        const bgIndex = index % 2 === 0 ? 100 : 200;

                        return (
                            <li
                                onClick={() =>
                                    choisirJoueur(
                                        joueur.nom,
                                        joueur.prenom,
                                        joueur.id
                                    )
                                }
                                key={joueur.id}
                                className={`bg-purple-${bgIndex} py-2 px-2 flex justify-between cursor-pointer`}
                            >
                                <p>
                                    {index + 1} {joueur.nom} {joueur.prenom}
                                </p>
                            </li>
                        );
                    })}
                </motion.ul>
                <Link href="/ajouter-athlete">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Ajouter un/une athlète
                        </Button>
                    </a>
                </Link>
            </>
        </div>
    );
}

export default ChoisirJoueur;
