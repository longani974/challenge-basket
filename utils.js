export function transformerTitreEnCleObjet(titreEpreuve) {
    const nom = [...titreEpreuve].map((caractere) => {
        if (caractere === " ") return (caractere = "_");
        return caractere.toLowerCase();
    });
    return nom.join("");
}

export function transformerIdEnTitreEpreuve(id) {
    let titre;

    switch (+id) {
        case 1:
            titre = "Marine Johannes";
            break;
        case 2:
            titre = "Evan Fournier";
            break;
        case 3:
            titre = "Nicolas Batum";
            break;
        case 4:
            titre = "Sandrine Gruta";
            break;

        default:
            console.error(`Cet Id: ${id}, n'est pas valide`);
            break;
    }
    return titre;
}
