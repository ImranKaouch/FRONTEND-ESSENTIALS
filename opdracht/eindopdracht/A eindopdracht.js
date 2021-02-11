let bezoeker= {
     voornaam:prompt("Wat is je voonaam?"),
     achternaam:prompt("Wat is je achternaam?"),
     email:prompt("Wat is je email?"),
     leeftijd:prompt ("Wat is je leeftijd?"),
     woonplaats:prompt("Wat is je woonplaats?")
};
console.log(bezoeker);
console.log(bezoeker.voornaam);




if (bezoeker.leeftijd == 16){
// Als de gebruiker (bezoeker) 16 jaar is dan wordt de achtergrond kleur van index.html een oranje-achtige kleur//
document.querySelector("body"). style.backgroundColor="rgb(197, 134, 18)"
}
else if (bezoeker.leeftijd == 17) {// Als de gebruiker (bezoeker) 17 jaar is dan wordt de achtergrond kleur van index.html een blauw-achtige kleur//
document.querySelector("body"). style.backgroundColor="rgb(32, 96, 216)"
} else if (bezoeker.leeftijd == 18) {//Als de gebruiker (bezoeker) 18 jaar dan wordt de achtergrond kleur van index.html een goud-achtige kleur//
document.querySelector("body"). style.backgroundColor="gold"
} else if (bezoeker.leeftjd == 19) {//Als de gebruiker (bezoeker) 19 jaar dan wordt de achtergrond kleur van index.html een groen-achtige kleur//
document.querySelector("body"). style.backgroundColor="rgb(80, 204, 146)"
} else {//Als de gebruiker (bezoeker) niks invuld dan wordt de achtergrond kleur van index.html een kleur naar keuze, als die maar anders is dan hierboven//
document.querySelector("body").style.backgroundColor="purple"
}

document.getElementById("voornaam").innerHTML= bezoeker.voornaam;
document.getElementById("achternaam").innerHTML= bezoeker.achternaam;
document.getElementById("email").innerHTML= bezoeker.email;
document.getElementById("leeftijd").innerHTML= bezoeker.leeftijd;
document.getElementById("woonplaats").innerHTML= bezoeker.woonplaats;