import Link from "next/link";
import { useEffect, useState } from "react";
import ChoisirJoueur from "../../../components/epreuves/ChoisirJoueur";
import TitreEpreuve from "../../../components/epreuves/TitreEpreuve";

function MarineJohannes() {
    const [listeDesJoueurs, setListeDesJoueurs] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("joueurs"))
            setListeDesJoueurs(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    return (
        <div>
            <TitreEpreuve>Marine Johannes</TitreEpreuve>
            <ChoisirJoueur listeDesJoueurs={listeDesJoueurs} />
        </div>
    );
}

export default MarineJohannes;
