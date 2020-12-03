"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    /* hier komt jouw code */
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}

    function makeThisSentence(){
        let index1 = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index1];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
}

function selectThisImage(){
    let index = randomizer(arrayLength);
    myImage.src = plaatjes[index]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1; // range between 0 and 2
  message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}



const onderwerp = ["Hij", "Remy", "Rosy"];
const werkwoord = ["werkt", "loopt", "rent"];
const restwoord = ["hard", "weg", "snel"];
    
let plaatjes = ["https://images-ext-1.discordapp.net/external/WK5kVGn4RfeddUop6cLsYZz6LNIZ-8JvhV73-BiwKrk/https/media.self.com/photos/5f490e4e4a75ee30a626683e/master/pass/woman_food_donut.jpeg", 
                "https://www.how-to-draw-funny-ca rtoons.com/images/cartoon-baby-007.jpg", 
                "https://thumbs.dreamstime.com/b/smiling-heart-cartoon-open-arms-nice-image-all-projects-love-representing-version-its-suggest-idea-40930153.jpg", 
                "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?quality=80"]
                let arrayLength = onderwerp.length;