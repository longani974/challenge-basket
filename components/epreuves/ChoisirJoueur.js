import Link from "next/link";
import Button from "../ui/Button";

function ChoisirJoueur({ listeDesJoueurs }) {
    function choisirJoueur(nom, prenom, id) {
        alert("prenom:" + prenom + " nom:" + nom + " id:" + id);
    }
    return (
        <div>
            <h2>Choisir un/une participant(e):</h2>
            <>
                <ul>
                    {listeDesJoueurs.map((joueur, index) => {
                        const bgIndex = index % 2 === 0 ? 100 : 200;

                        return (
                            <li
                                onClick={() =>
                                    choisirJoueur(
                                        joueur.nom,
                                        joueur.prenom,
                                        joueur.id
                                    )
                                }
                                key={joueur.id}
                                className={`bg-purple-${bgIndex} py-2 px-2 flex justify-between`}
                            >
                                <p>
                                    {index + 1} {joueur.nom} {joueur.prenom}
                                </p>
                            </li>
                        );
                    })}
                </ul>
                <Link href="/ajouter-athlete">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Ajouter un/une athlète
                        </Button>
                    </a>
                </Link>
            </>
        </div>
    );
}

export default ChoisirJoueur;
