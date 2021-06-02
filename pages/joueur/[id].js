import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import {
    couleurSelonEpreuve,
    transformerIdEnTitreEpreuve,
    transformerTitreEnCleObjet,
} from "../../utils";

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
        // const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let meilleurScore = 0;

        if (joueur && joueur.epreuves[epreuve]) {
            joueur.epreuves[epreuve].forEach((data) => {
                if (+data.score > meilleurScore) meilleurScore = data.score;
            });
        }
        return meilleurScore;
    }

    function dernierScore(epreuve) {
        // const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let date = 0;
        let dernierScore = "X";

        if (joueur && joueur.epreuves[epreuve]) {
            joueur.epreuves[epreuve].forEach((data) => {
                if (+data.date > date) {
                    date = data.date;
                    dernierScore = data.score;
                }
            });
        }

        return dernierScore;
    }

    function scoreMoyen(epreuve) {
        // const cleEpreuve = transformerTitreEnCleObjet(epreuve);
        let scoreTotal = 0;
        let nbDeSession = 0;

        if (joueur && joueur.epreuves[epreuve]) {
            joueur.epreuves[epreuve].forEach((data) => {
                scoreTotal += +data.score;
                nbDeSession++;
            });
        }

        if (scoreTotal === 0 && nbDeSession === 0) return "X";

        const scoreMoyen = scoreTotal / nbDeSession;

        return scoreMoyen.toFixed(1);
    }

    function dernieresSession(nbSessions) {
        let dataReunies;
        let dataTriéesParJours = null;
        const contenu = [];

        if (joueur && joueur.epreuves) {
            dataReunies = reunirData();

            dataTriéesParJours = trierDataParJour(dataReunies);

            for (let i = 0; i < dataTriéesParJours.length; i++) {
                contenu.push(
                    <tr
                        key={i}
                        className={`text-center rounded-xlbg-purple-${
                            i % 2 === 0 ? 100 : 200
                        }`}
                    >
                        <td>{scoreMoyenParJour(1, dataTriéesParJours[i])}</td>
                        <td>{scoreMoyenParJour(2, dataTriéesParJours[i])}</td>
                        <td>{scoreMoyenParJour(3, dataTriéesParJours[i])}</td>
                        <td>{scoreMoyenParJour(4, dataTriéesParJours[i])}</td>
                    </tr>
                );
            }

            return <>{contenu.map((data) => data)}</>;
        }
    }

    function reunirData() {
        let array = [];
        for (let i = 1; i < 5; i++) {
            if (joueur.epreuves[i]) {
                joueur.epreuves[i].forEach((data) =>
                    array.push({
                        day: Math.floor(data.date / (1000 * 60 * 60 * 24)),
                        score: data.score,
                        epreuve: i,
                    })
                );
            }
        }

        array.sort((a, b) => b.day - a.day);
        return array;
    }

    function trierDataParJour(dataATrier) {
        const dataTriéesParJours = [];

        for (let i = 0; i < 10; i++) {
            if (dataATrier.length) {
                const dataDeUnJour = dataATrier.filter(
                    (data) => data.day === dataATrier[0].day
                );

                dataATrier = dataATrier.slice(
                    dataDeUnJour.length,
                    dataATrier.length
                );

                dataTriéesParJours.push(dataDeUnJour);
            }
        }
        return dataTriéesParJours;
    }

    function scoreMoyenParJour(epreuve, data) {
        const tableauParEpreuve = data.filter((d) => d.epreuve === epreuve);

        let scoreTotal = 0;
        let scoreMoyen = 0;
        let scoreExiste = false;

        tableauParEpreuve.forEach((data) => {
            if (data.epreuve) {
                scoreExiste = true;
                scoreTotal += +data.score;
            }
        });

        if (!scoreExiste) return "X";

        if (scoreTotal === 0) return 0;

        scoreMoyen = scoreTotal / tableauParEpreuve.length;
        return scoreMoyen.toFixed(1);
    }

    function transformerTitreSurDeuxLignes(epreuve) {
        const titre = transformerIdEnTitreEpreuve(epreuve);

        const titreSplit = titre.split(" ");

        const prenom = titreSplit[0];
        const nom = titreSplit[1];

        return (
            <span className={`text-${couleurSelonEpreuve(epreuve)}`}>
                {prenom}
                <br />
                {nom}
            </span>
        );
    }

    return (
        <div>
            <p className="text-xl text-center mb-3">
                {joueur ? `${joueur.nom} ${joueur.prenom}` : null}
            </p>
            <table className="table-fixed w-full bg-purple-100">
                <thead className="bg-purple-200">
                    <tr>
                        <th>{transformerTitreSurDeuxLignes(1)}</th>
                        <th>{transformerTitreSurDeuxLignes(2)}</th>
                        <th>{transformerTitreSurDeuxLignes(3)}</th>
                        <th>{transformerTitreSurDeuxLignes(4)}</th>
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
                        <td className="text-center">{meilleurScore(1)}</td>
                        <td className="text-center">{meilleurScore(2)}</td>
                        <td className="text-center">{meilleurScore(3)}</td>
                        <td className="text-center">{meilleurScore(4)}</td>
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
                        <td className="text-center">{dernierScore(1)}</td>
                        <td className="text-center">{dernierScore(2)}</td>
                        <td className="text-center">{dernierScore(3)}</td>
                        <td className="text-center">{dernierScore(4)}</td>
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
                        <td className="text-center">{scoreMoyen(1)}</td>
                        <td className="text-center">{scoreMoyen(2)}</td>
                        <td className="text-center">{scoreMoyen(3)}</td>
                        <td className="text-center">{scoreMoyen(4)}</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th className="bg-purple-400" colSpan="4">
                            Dix Dernières Sessions
                        </th>
                    </tr>
                </tbody>

                <tbody>{dernieresSession()}</tbody>
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
