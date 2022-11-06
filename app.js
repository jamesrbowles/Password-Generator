const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn = document.getElementById('btn');
const firstResult = document.getElementById('results');
const secondResult = document.getElementById('results2');


btn.addEventListener('click', function() {
    let randomOne = "";
    for (i = 0; i < 15; i++) {      
        randomOne += characters[getRandom()];
        firstResult.textContent = randomOne;
    } 
    let randomTwo = "";
    for (j = 0; j < 15; j++) {
        randomTwo += characters[getRandom()];
        secondResult.textContent = randomTwo;
    }
})

function getRandom() {
    return Math.floor(Math.random() * characters.length);
}