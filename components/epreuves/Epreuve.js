import Link from "next/link";
import { useEffect, useState } from "react";
import { transformerTitreEnCleObjet } from "../../utils";
import Button from "../ui/Button";
import AjouterScore from "./AjouterScore";
import ChoisirJoueur from "./ChoisirJoueur";
import TitreEpreuve from "./TitreEpreuve";

function Epreuve({ titreEpreuve }) {
    const [listeDesJoueurs, setListeDesJoueurs] = useState([]);
    const [montrerAjouterScore, setMontrerAjouterScore] = useState(false);
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [id, setId] = useState();

    const nomEpreuve = transformerTitreEnCleObjet(titreEpreuve);

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
            <TitreEpreuve>{titreEpreuve}</TitreEpreuve>
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
                    nomEpreuve={nomEpreuve}
                />
            ) : null}
            <Link href="/choisir-une-epreuve">
                <a>
                    <Button
                        bgColor="bg-purple-600"
                        bgColorHover="bg-purple-700"
                    >
                        Changer d'épreuve
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

export default Epreuve;
