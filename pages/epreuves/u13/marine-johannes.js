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
    const [id, setId] = useState();

    useEffect(() => {
        if (localStorage.getItem("joueurs"))
            setListeDesJoueurs(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    function toggleMontrerAjouterScore() {
        setMontrerAjouterScore((previewState) => !previewState);
    }

    function joueurChoisi(nom, prenom, id) {
        setNom(nom);
        setPrenom(prenom);
        setId(id);
    }

    return (
        <div>
            <TitreEpreuve>Marine Johannes</TitreEpreuve>
            <ChoisirJoueur
                listeDesJoueurs={listeDesJoueurs}
                toggleMontrerAjouterScore={toggleMontrerAjouterScore}
                joueurChoisi={joueurChoisi}
            />
            {montrerAjouterScore ? (
                <AjouterScore
                    toggleMontrerAjouterScore={toggleMontrerAjouterScore}
                    nom={nom}
                    prenom={prenom}
                    id={id}
                />
            ) : null}
        </div>
    );
}

export default MarineJohannes;
