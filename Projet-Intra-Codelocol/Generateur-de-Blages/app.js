const lesBlages = document.getElementById("lesparoles");
const buttons = document.getElementById("button");
const table = [
        "La france FR nous a souvent volé nos richesses  💎 💰...vous allez aussi nous voler nos footballeur 🏃🏻?",
        "On as pas besoin d'eau 💦 potable pour eteindre un incendie 🔥.",
        "Le crocodile 🐊 n'attend pas que le 🦍 accouche ",
        "L'oiseau 🦜 sur le baobab ne doit pas oublier qu'il a porté des lunettes 🕶️ !",
]

let Lelength = table.length;

buttons.addEventListener('click',function () {
        let match = Math.floor(Math.random() * Lelength);
        lesBlages.innerHTML = table[match];
        
})
const Lepetitparagraphe = document.createElement("span");
Lepetitparagraphe.innerText = "- President BOBO";
document.body.append(Lepetitparagraphe);
Lepetitparagraphe.style.color = "white";
Lepetitparagraphe.style.marginTop = "30px";




 lesBlages.style.fontSize = "20px"
 lesBlages.style.textAlign = "center"
 lesBlages.style.color = "white"
 lesBlages.append(leTableau);

