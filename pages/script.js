document.getElementById("submit-btn").addEventListener("click", function () {
    const reponse = {
        q1: "b",
        q2: "c",
        q3: "c",
        q4: "a",
        q5: "a",
        q6: "b",
        q7: "a",
        q8: "a",
        q9: "c",
        q10: "a"
    };

    let score = 0;
    const totalQuestions = Object.keys(reponse).length;

    // Réinitialiser les styles des réponses précédentes
    document.querySelectorAll("input[type='radio']").forEach(input => {
        input.parentElement.style.backgroundColor = "transparent"; // Supprime la couleur précédente
    });

    // Vérification des réponses
    for (let question in reponse) {
        const reponsePersonne = document.querySelector(`input[name="${question}"]:checked`);
        if (reponsePersonne) {
            if (reponsePersonne.value === reponse[question]) {
                // Réponse correcte : bouton coloré en vert
                reponsePersonne.parentElement.style.backgroundColor = "lightgreen";
                score++;
            } else {
                // Réponse incorrecte : bouton coloré en rouge
                reponsePersonne.parentElement.style.backgroundColor = "lightcoral";
            }
        }
    }

    // Afficher le score
    const result = document.getElementById("result");
    result.textContent = `Votre score : ${score} / ${totalQuestions}`;
    result.style.fontWeight = "bold";
});

    /* Vérificationss */

function validerFormulaire() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const genreHomme = document.getElementById('homme').checked;
    const genreFemme = document.getElementById('femme').checked;
    const dateNaissance = document.getElementById('dateNaissance').value;
    const description = document.getElementById('description').value;

    if (!nom) {
        alert("Veuillez entrer votre nom.");
        return false;
    }
    if (!prenom) {
        alert("Veuillez entrer votre prénom.");
        return false;
    }
    if (!genreHomme && !genreFemme) {
        alert("Veuillez sélectionner votre sexe.");
        return false;
    }
    if (!dateNaissance) {
        alert("Veuillez entrer votre date de naissance.");
        return false;
    }
    if (!email) {
        alert("Veuillez entrer votre email.");
        return false;
    }
    if (!description) {
        alert("Veuillez entrer une description.");
        return false;
    }

    alert("Formulaire envoyé avec succès !");
    return true;
}



