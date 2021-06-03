import Link from "next/link";
import React, { useRef } from "react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

function AjouterAthlete() {
    const nomRef = useRef();
    const prenomRef = useRef();

    const inputStyle =
        "border-2 border-purple-700 rounded-full px-3 py-2 focus:outline-none";

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

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
            epreuves: {},
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
            <motion.h1
                className="text-xl mb-2"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                Entrez les informations du joueur ou de la joueuse.
            </motion.h1>
            <form onSubmit={handleSubmit}>
                <motion.span
                    className="flex flex-col"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
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
                </motion.span>

                <Button bgColor="bg-purple-600" bgColorHover="bg-purple-700">
                    Ajouter
                </Button>
            </form>
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
            <Link href="/liste-des-joueurs">
                <a>
                    <Button
                        bgColor="bg-purple-400"
                        bgColorHover="bg-purple-600"
                    >
                        Liste des joueurs/joueuses
                    </Button>
                </a>
            </Link>
        </>
    );
}

export default AjouterAthlete;
