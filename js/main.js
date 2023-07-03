// Inserisco un event listener al click del pulsante "genera"
document.getElementById("btn-generate").addEventListener("click", takeInformation)
function takeInformation() {
    // Definisco le costanti relative all'Event listener
    const kmToGo = document.getElementById("km-to-go").value;
    const agePassenger = document.getElementById("age-passenger").value;
    const nameSurname = document.getElementById("name-surname").value;
    // Testo le costanti
    console.log(kmToGo)
    console.log(agePassenger)
    console.log(nameSurname)
    // Definisco variabile
    let ticketPrice = (0.21 * kmToGo);
    // Testio la variabile
    console.log(ticketPrice)
    
    if (agePassenger < 18) {
        // Assegno variabili relative a questa funzione
        let coupon = (ticketPrice * 0.2);
        let discountedPrice = (ticketPrice - coupon);
        // Verifico funzionalità delle variabili
        console.log(coupon)
        console.log(discountedPrice)
        // Stampo in HTML i risultati
        document.getElementById("user").innerHTML = nameSurname
        document.getElementById("discount").innerHTML = "Biglietto ridotto del 20%"
        document.getElementById('discount').style.color = "#008000"
        document.getElementById("number").innerHTML = "1"
        document.getElementById("random").innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById("code-random").innerHTML = Math.floor((Math.random() * 5000) + 1000);
        document.getElementById("final-price").innerHTML = discountedPrice.toFixed(2) + "€"
    } else if (agePassenger > 65) {
        // Assegno variabili relative a questa funzione
        let coupon = (ticketPrice * 0.4);
        let discountedPrice = (ticketPrice - coupon);
        // Verifico funzionalità delle variabili
        console.log(coupon)
        console.log(discountedPrice)
        // Stampo in HTML i risultati
        document.getElementById("user").innerHTML = nameSurname
        document.getElementById("discount").innerHTML = "Biglietto ridotto del 40%"
        document.getElementById('discount').style.color = "#008000"
        document.getElementById("number").innerHTML = "1"
        document.getElementById("random").innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById("code-random").innerHTML = Math.floor((Math.random() * 5000) + 1000);
        document.getElementById("final-price").innerHTML = discountedPrice.toFixed(2) + "€"
    } else {
        document.getElementById("user").innerHTML = nameSurname
        document.getElementById("discount").innerHTML = "Biglietto Standard"
        document.getElementById("number").innerHTML = "1"
        document.getElementById("random").innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById("code-random").innerHTML = Math.floor((Math.random() * 5000) + 1000);
        document.getElementById("final-price").innerHTML = ticketPrice.toFixed(2) + "€"
    }
}
// Inserisco un event listener al click del pulsante "annulla"
document.getElementById("erase").addEventListener("click", erase)
function erase() {
    document.getElementById("km-to-go").value = "";
    document.getElementById("age-passenger").value = "";
    document.getElementById("name-surname").value = "";
    document.getElementById("user").innerHTML = "";
    document.getElementById("discount").innerHTML = "";
    document.getElementById("number").innerHTML = "";
    document.getElementById("random").innerHTML = "";
    document.getElementById("code-random").innerHTML = "";
    document.getElementById("final-price").innerHTML = "";
}


// Creo una funzione
