import { useEffect, useState } from "react";
import { transformerIdEnTitreEpreuve } from "../../utils";

function CardStats({ data, epreuveId }) {
    const [moyenneEpreuve, setMoyenneEpreuve] = useState(0);
    const epreuve = transformerIdEnTitreEpreuve(epreuveId);

    useEffect(() => {
        if (data) {
            // prettier-ignore
            setMoyenneEpreuve(moyennePourUneEpreuveEquipe(epreuveId));
        }
    }, [data]);

    function moyennePourUneEpreuveEquipe(epreuveId) {
        let pointsTotal = 0;
        let nbEpreuves = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i].epreuves[epreuveId]) {
                for (let j = 0; j < data[i].epreuves[epreuveId].length; j++) {
                    pointsTotal =
                        pointsTotal +
                        Number(data[i].epreuves[epreuveId][j].score);
                    nbEpreuves++;
                }
            }
        }

        if (pointsTotal === 0 && nbEpreuves === 0) return 0;

        const moyenne = pointsTotal / nbEpreuves;

        return Number.isInteger(moyenne) ? moyenne : moyenne.toFixed(2);
    }

    return (
        <div className="text-center bg-purple-100 rounded-xl py-2 w-32">
            <p className="text-xs">Moy. équipe</p>
            <p className="text-sm">{epreuve}</p>
            <p className="text-xl">{moyenneEpreuve}</p>
        </div>
    );
}

export default CardStats;
