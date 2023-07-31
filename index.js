//helloh
function messageAre(array){

    const rand = Math.random()*array.length | 0;
    const rValue = array[rand];
    return rValue;
    

}

const area = ["La première étape est de dire que tu peux.", "Si tu traverses l’enfer, continue.", "“Impossible” est pour ceux qui ne veulent pas vraiment.",  "Essaye encore. Échoue de nouveau. Échoue mieux.", "Le fou se questionne, le sage demande.", "Rêve sans peur. Aime sans limite.", "Pas de pression, pas de diamants."]
const rValue = messageAre(area);

console.log(rValue)









