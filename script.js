console.log('Hello World!');

/* Null inne på inspisenten= noe som Javascripten ikke finner inne på script.js*/ 


/* H=Hent
Const = et variabel nøkkelord - hamburgerIcon = Variabel navn
Erlik symbolet(=) betyr lagre/identifisere som
document = HTML-dokumentet(ALLE HTML dokument)
.querySelector() = Javascript-metode . som henter en selektor med () #hamburgerIcon = HTML-element med det id-navnet 

Alt i alt: Setter opp en variabel som henter et element fra HTML
*/ 

/* eller: document.getElementById("hamburgerIcon")*/ 

/* nøkkelord må/bør ha en consol.log for å bekrefte riktig kode*/ 
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

/* .addEventListener() = Legger til interaktivitet på nettsiden
"click" = hva lyter nettleseren til?
(, function) = Hva skal skje etter lyttet
*/ 

hamburgerIcon.addEventListener("click", function (){
    console.log("Noe er klikket på")

    const navList = document.querySelector("#navList");
    console.log(navList);

/*.classList = Referer til alle klassenavn i koden
    .toggle() = skrur av og på klassenavnet i ()*/ 

    navList.classList.toggle("navHamburgerList");

});

/*MAL
const  = document.querySelector("#");
console.log();

.addEventListener("", function (){
    console.log("   ")

    const  = document.querySelector("#");
    console.log();

    .classList.toggle("");

});*/ 
