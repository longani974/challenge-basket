import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { transformerTitreEnCleObjet } from "../../utils";

function joueur() {
    const [data, setData] = useState(null);
    const [joueur, setJoueur] = useState(null);

    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    useEffect(() => {
        if (data) {
            setJoueur(
                ...data.filter((joueur) => {
                    return joueur.id === +id;
                })
            );
        }
    }, [data, id]);

    function meilleurScore(epreuve) {
        const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let meilleurScore = 0;

        if (joueur && joueur.epreuves[cleEpreuve]) {
            joueur.epreuves[cleEpreuve].forEach((data) => {
                if (+data.score > meilleurScore) meilleurScore = data.score;
            });
        }
        return meilleurScore;
    }

    function dernierScore(epreuve) {
        const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let date = 0;
        let dernierScore = "X";

        if (joueur && joueur.epreuves[cleEpreuve]) {
            joueur.epreuves[cleEpreuve].forEach((data) => {
                if (+data.date > date) {
                    date = data.date;
                    dernierScore = data.score;
                }
            });
        }

        return dernierScore;
    }

    function scoreMoyen(epreuve) {
        const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let scoreTotal = 0;
        let nbDeSession = 0;

        if (joueur && joueur.epreuves[cleEpreuve]) {
            joueur.epreuves[cleEpreuve].forEach((data) => {
                scoreTotal += +data.score;
                nbDeSession++;
            });
        }

        if (scoreTotal === 0 && nbDeSession === 0) return "X";

        const scoreMoyen = scoreTotal / nbDeSession;

        return scoreMoyen.toFixed(1);
    }

    return (
        <div>
            <p className="text-xl text-center mb-3">
                {joueur ? `${joueur.nom} ${joueur.prenom}` : null}
            </p>
            <table className="table-fixed bg-purple-100">
                <thead className="bg-purple-200">
                    <tr>
                        <th>Marine Johannes</th>
                        <th>Evan Fournier</th>
                        <th>Nicolas Batum</th>
                        <th>Sandrine Gruda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="bg-purple-400" colSpan="4">
                            Meilleurs Scores
                        </th>
                    </tr>
                </tbody>

                <tbody>
                    <tr className="text-center">
                        <td className="text-center">
                            {meilleurScore("Marine Johannes")}
                        </td>
                        <td className="text-center">
                            {meilleurScore("Evan Fournier")}
                        </td>
                        <td className="text-center">
                            {meilleurScore("Nicolas Batum")}
                        </td>
                        <td className="text-center">
                            {meilleurScore("Sandrine Gruda")}
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th className="bg-purple-400" colSpan="4">
                            Derniers Scores
                        </th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="text-center">
                            {dernierScore("Marine Johannes")}
                        </td>
                        <td className="text-center">
                            {dernierScore("Evan Fournier")}
                        </td>
                        <td className="text-center">
                            {dernierScore("Nicolas Batum")}
                        </td>
                        <td className="text-center">
                            {dernierScore("Sandrine Gruda")}
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th className="bg-purple-400" colSpan="4">
                            Score Moyen
                        </th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="text-center">
                            {scoreMoyen("Marine Johannes")}
                        </td>
                        <td className="text-center">
                            {scoreMoyen("Evan Fournier")}
                        </td>
                        <td className="text-center">
                            {scoreMoyen("Nicolas Batum")}
                        </td>
                        <td className="text-center">
                            {scoreMoyen("Sandrine Gruda")}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link href="/liste-des-joueurs">
                <a>
                    <Button
                        bgColor="bg-purple-600"
                        bgColorHover="bg-purple-700"
                    >
                        Liste des joueurs/joueuses
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
        </div>
    );
}

export default joueur;
