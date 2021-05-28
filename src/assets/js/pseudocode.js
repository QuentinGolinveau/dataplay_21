// coucou on écrit du pseudo code et puis démerdez vous <3

/* 
Pour l'affichage =>

Pour chaque graphique, dans le css, on set une height.
Imaginons le plus grand element du graph fait 100px de haut

On compare les données entre elle et on sélectionne la plus grande.
voir fonction array.every() sur mdn je pense

EX : 
valeur 1 = 45
valeur 2 = 35
valeur 3 = 20

la valeur la plus grande c'est 45

On dit à notre JS de set la taille de cet élément en fraction
Donc la valeur 1 ça sera 45/45 (100%) => 100px de haut
pour la taille de l'élément valeur 2 on applique un style ou sa taille sera  35/45 * 100%  => 77% => 77px
et ainsi de suite 

colone.style.height = calc((35/45) * 100%) => va forcer le style par dessus le style du css

du coup il faut savoir récupérer chaque colone indépendamment

function growBatons(tableauReponse, graphique, r, numberOfVisit){
    if(tableauReponse[r] !== 0){
    const batontext = document.createElement('div');
    let pourcent = (tableauReponse[r]/(numberOfVisit - 1))*100;



    batontext.setAttribute("data-color",r);
    batontext.innerHTML = tableauReponse[r] + "/" + (numberOfVisit - 1);
    graphique.appendChild(batontext);
    batontext.style.height = pourcent + "%";
    }
}
*/