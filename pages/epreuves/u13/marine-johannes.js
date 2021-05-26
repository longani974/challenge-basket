import Link from "next/link";
import { useEffect, useState } from "react";
import AjouterScore from "../../../components/epreuves/AjouterScore";
import ChoisirJoueur from "../../../components/epreuves/ChoisirJoueur";
import TitreEpreuve from "../../../components/epreuves/TitreEpreuve";

function MarineJohannes() {
    const [listeDesJoueurs, setListeDesJoueurs] = useState([]);
    const [montrerAjouterScore, setMontrerAjouterScore] = useState(false);
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();

    useEffect(() => {
        if (localStorage.getItem("joueurs"))
            setListeDesJoueurs(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    function toggleMontrerAjouterScore() {
        setMontrerAjouterScore((previewState) => !previewState);
    }

    function joueurChoisi(nom, prenom) {
        setNom(nom);
        setPrenom(prenom);
    }

    return (
        <div>
            <TitreEpreuve>Marine Johannes</TitreEpreuve>
            <ChoisirJoueur
                listeDesJoueurs={listeDesJoueurs}
                toggleMontrerAjouterScore={toggleMontrerAjouterScore}
                joueurChoisi={joueurChoisi}
            />
            <AjouterScore
                display={montrerAjouterScore}
                toggleMontrerAjouterScore={toggleMontrerAjouterScore}
                nom={nom}
                prenom={prenom}
            />
        </div>
    );
}

export default MarineJohannes;
