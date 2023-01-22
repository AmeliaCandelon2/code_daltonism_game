// selectionner uniquement l'id titre
const titre = document.querySelector("#titre")


// déclarer la variable niveau et score
let niveau = 1
let score = 4

// fonction pour selectioner une case aléatoire
const getCaseRandom = () => {
    const caseIndex = Math.floor(Math.random() * 15)
    const grid=document.getElementById(`grid${caseIndex}`)
    return grid
}

//fonction qui fais changer de couleur quand on clique sur la bonne case
const green=()=>{
    // la variable cases = toutes les cases
    const cases= document.querySelectorAll(".block div")

    // itèrer à travers tous les éléments
    for (let index = 0; index < cases.length; index++) {
        const element = cases[index];

        //créer l'animation
        element.addEventListener("animationend", ()=>{
            element.classList.remove("green")
        })
        
        //effet de déclalé
        setTimeout(() => {
            // ajoute une classe
            element.classList.add("green")
        }, index*25);
    }
}


// Jouer le niveau
const playRound = () => {
    const caseRandom = getCaseRandom()

    // definir un alpha
    const alpha = 0.35 - score * 0.05
    // utiliser alpha pour changer la couleur de la case
    caseRandom.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`
    

    //fonction 
    const onclick=() => { 
        //remettre la couleur initiale de la case
        caseRandom.style.backgroundColor=""
        caseRandom.removeEventListener("click", onclick)
        alert("Bravo tu n'es pas daltonien");
        green()

        // mettre à jour le niveau et le score
        niveau++
        score = (score+0.5)
        titre.innerHTML = `Niveau ${niveau}`

        //condition de fin
        if (niveau == 7) 
        alert("Bravo tu as gagné");

        
        // round suivant
        playRound() 
    }

    //cliquer uniquement sur les bonnes cases
    caseRandom.addEventListener("click",onclick );
}

//commencer le premier round
playRound(); 




