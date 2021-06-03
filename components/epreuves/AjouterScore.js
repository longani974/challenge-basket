import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function AjouterScore({
    toggleMontrerAjouterScore,
    nom,
    prenom,
    id,
    idEpreuve,
}) {
    const score = useRef();

    const variantsModal = {
        hidden: {
            opacity: 0,
            x: -1000,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: 1000,
        },
    };
    const variantsBG = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 0.5,
        },
    };

    useEffect(() => {
        return (score.current.value = null);
    }, []);

    function confirmerScore() {
        if (!score.current.value) score.current.value = 0;
        if (score.current.value < 0 || score.current.value > 21) return;

        const listeDesJoueurs = [
            ...JSON.parse(localStorage.getItem("joueurs")),
        ];

        const statsJoueur = {
            date: Date.now(),
            score: score.current.value,
        };

        const updatedListeDesJoueurs = miseAJourScore(
            listeDesJoueurs,
            statsJoueur
        );

        localStorage.setItem("joueurs", JSON.stringify(updatedListeDesJoueurs));

        toggleMontrerAjouterScore();
    }

    function miseAJourScore(listeDesJoueurs, statsJoueur) {
        const listeMiseAJour = listeDesJoueurs.map((joueur) => {
            if (joueur.id === id) {
                if (!joueur.epreuves[idEpreuve]) {
                    joueur.epreuves[idEpreuve] = [statsJoueur];
                } else if (joueur.epreuves[idEpreuve])
                    joueur.epreuves[idEpreuve].push(statsJoueur);
                return joueur;
            }
            return joueur;
        });
        return listeMiseAJour;
    }

    return (
        <div
            className={` w-full h-full absolute top-0 left-0 flex items-center justify-center`}
        >
            <motion.div
                className="bg-white  max-w-md w-5/6 h-5/6 px-4 py-4 relative z-10 rounded-xl"
                variants={variantsModal}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2 className="text-center font-bold mb-4">
                    {nom + " " + prenom}
                </h2>
                <form onSubmit={confirmerScore}>
                    <label className="px-2" htmlFor="score">
                        Score:
                    </label>
                    <br />
                    <input
                        type="number"
                        id="score"
                        placeholder={0}
                        ref={score}
                        className="border-2 border-purple-700 rounded-full px-3 py-2 focus:outline-none focus:border-4 text-right"
                    />
                </form>
                <div className="flex w-full gap-3">
                    <span
                        className="w-full"
                        onClick={toggleMontrerAjouterScore}
                    >
                        <Button bgColor="bg-red-400" bgColorHover="bg-red-600">
                            Annuler
                        </Button>
                    </span>
                    <span className="w-full" onClick={confirmerScore}>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Confirmer
                        </Button>
                    </span>
                </div>
            </motion.div>
            <motion.div
                onClick={toggleMontrerAjouterScore}
                className="w-full h-full bg-gray-900 absolute top-0 left-0"
                variants={variantsBG}
                initial="hidden"
                animate="visible"
                exit="hidden"
            ></motion.div>
        </div>
    );
}

export default AjouterScore;
