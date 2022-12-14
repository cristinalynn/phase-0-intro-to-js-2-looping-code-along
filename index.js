// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts);

const names=["Guadalupe", "Ollie", "Aki"];
function writeCards(array, event) {
    let completedCards = []
    for(let i = 0; i < array.length; i++) {
        
        completedCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        console.log(completedCards);
    }
    return completedCards;
}

writeCards(names, "Suprise")

function countDown(i) {
    while (i > 0) {
        console.log(i--);
    } 
    console.log(i)
}
countDown(10)
