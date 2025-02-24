document.getElementById("dice").addEventListener("click", function() {
    let dice = this;
    dice.classList.add("rolling");

    setTimeout(() => {
        let number = Math.floor(Math.random() * 20) + 1;
        let messages = {
            1:  "Empório Daruma",
            2:  "Café barão",
            3:  "Charlotte",
            4:  "Casa Bauducco Banco do Brasil",
            5:  "The coffee",
            6:  "Starbucks :/",
            7:  "Kopenhagen",
            8:  "Café Perseu",
            9:  "Urbe Café",
            10: "Gorinhamez",
            11: "Café na SPTech :(",
            12: "Café amigão",
            13: "MASP",
            14: "Tostado café club",
            15: "Café cinema conjunto nacional",
            16: "Café cinema augusta",
            17: "Cacau show conjunto nacional",
            18: "Sterna café habitat Bradesco",
            19: "Ofner center 3",
            20: "Rei do mate augusta"
        };
        let message = `Onde iremos hoje? ${messages[number]}.`;

        dice.classList.remove("rolling");
        dice.innerText = number;
        document.getElementById("result").innerText = message;
    }, 1000);
});
