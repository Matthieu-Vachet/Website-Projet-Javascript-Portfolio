
// Afficher le score de l'utilisateur dans la console
function afficherResultat (scores, nbMotsProposes){
    console.log("Votre score est de " + scores + " points sur " + nbMotsProposes);
}

//Choix entre mots ou phrases
function choisirPhrasesOuMots () {
    // Tant que l'utilisateur n'a pas saisie "mots" ou "phrases" on lui redemande de saisir un choix
    let choix = prompt("Choisir la liste: Mots ou Phrases? ");
while (choix !== "Mots" && choix !== "Phrases") {
    choix = prompt("Choisir la liste: Mots ou Phrases? ");
}
return choix;
}

//Lance la boucle de jeu (demande a l'utilisateur d'écrire tout les Mots ou Phrases, le score et incrémenté a chaque mot saisie)
function lancerBoucleDeJeu(listePropositions) {
    let scores = 0;
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande a l'utilisateur de saisir le mot correspondant a l'indice i
        let motUtilisateur = prompt("Entrez le mot: " + listePropositions[i])
        if (motUtilisateur == listePropositions[i]) {
            // si le mot saisi par l'utilisateur est correct, on incrémente le score
            scores++;
            alert("Vous avez gagné 1 point !");
        } else {
            alert("Vous n'avez pas gagné de point !");
        }
    }
    return scores;
}

// Lance le jeu
function lancerJeu () {
    // Initialisation des variables
    let choix = choisirPhrasesOuMots();
    let scores = 0;
    let nbMotsProposes = 0;

    // on détermine la liste des mots ou des phrases a proposer a l'utilisateur
    if (choix === "Mots") {
       scores = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length;      
    } else {
       scores = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length;
    }

    afficherResultat(scores, nbMotsProposes);
}





