import { useEffect, useRef } from "react";
import Button from "../ui/Button";

function AjouterScore({
    toggleMontrerAjouterScore,
    nom,
    prenom,
    id,
    nomEpreuve,
}) {
    const score = useRef();

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
                if (!joueur.epreuves[nomEpreuve]) {
                    joueur.epreuves[nomEpreuve] = [statsJoueur];
                } else if (joueur.epreuves[nomEpreuve])
                    joueur.epreuves[nomEpreuve].push(statsJoueur);
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
            <div className="bg-white w-5/6 h-5/6 px-4 py-4 relative z-10 rounded-xl">
                <h2 className="text-center">{nom + " " + prenom}</h2>
                <label className="px-2" htmlFor="score">
                    Score:
                </label>
                <form onSubmit={confirmerScore}>
                    <input
                        type="number"
                        id="score"
                        placeholder={0}
                        ref={score}
                        className="border border-purple-700 rounded-full px-3 py-2"
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
            </div>

            <div
                onClick={toggleMontrerAjouterScore}
                className="w-full h-full bg-gray-900 opacity-50 absolute top-0 left-0"
            ></div>
        </div>
    );
}

export default AjouterScore;
