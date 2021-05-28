import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

    return (
        <div>
            <p>{joueur ? `${joueur.nom} ${joueur.prenom}` : null}</p>
        </div>
    );
}

export default joueur;
