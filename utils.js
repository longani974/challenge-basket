export function transformerTitreEnCleObjet(titreEpreuve) {
    const nom = [...titreEpreuve].map((caractere) => {
        if (caractere === " ") return (caractere = "_");
        return caractere.toLowerCase();
    });
    return nom.join("");
}
