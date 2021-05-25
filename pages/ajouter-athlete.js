import Link from "next/link";
import React, { useRef } from "react";
import Button from "../components/ui/Button";

function AjouterAthlete() {
    const nomRef = useRef();
    const prenomRef = useRef();

    const inputStyle =
        "border border-purple-700 rounded-full px-3 focus:outline-none";

    function handleSubmit(e) {
        e.preventDefault();

        if (!inputsAreValid()) return;

        ajouterUnJoueur();

        resetInput();
    }

    function inputsAreValid() {
        const nom = nomRef.current.value;
        const prenom = prenomRef.current.value;

        if (!nom || !prenom) return false;

        return true;
    }

    function ajouterUnJoueur() {
        const nouveauJoueur = {
            nom: nomRef.current.value,
            prenom: prenomRef.current.value,
            id: Date.now(),
        };

        const listeDesJoueurs = localStorage.getItem("joueurs") // Vérifie si une liste de joueurs existe déjà
            ? [...JSON.parse(localStorage.getItem("joueurs"))] // Si oui: on la copie
            : []; // Si non: on commence avec une liste vide

        listeDesJoueurs.push(nouveauJoueur);

        localStorage.setItem("joueurs", JSON.stringify(listeDesJoueurs));
    }

    function resetInput() {
        nomRef.current.value = "";
        prenomRef.current.value = "";
    }

    return (
        <>
            <h1 className="text-xl mb-2">
                Entrez les informations du joueur ou de la joueuse.
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom</label>
                <input
                    className={inputStyle}
                    type="text"
                    id="nom"
                    ref={nomRef}
                ></input>
                <label htmlFor="prenom">Prénom</label>
                <input
                    className={inputStyle}
                    type="text"
                    id="prenom"
                    ref={prenomRef}
                ></input>
                <button className="bg-purple-600 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Ajouter
                </button>
                <Link href="/">
                    <a>
                        <button className="w-full bg-purple-400 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-500S focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                            Revenir à l'accueil
                        </button>
                    </a>
                </Link>
                <Link href="/liste-des-joueurs">
                    <a>
                        <button className="w-full bg-purple-400 text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:bg-purple-500S focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                            Liste des joueurs
                        </button>
                    </a>
                </Link>
            </form>
        </>
    );
}

export default AjouterAthlete;
