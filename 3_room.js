
document.getElementById("sjekke_boks").addEventListener("click", function() {
    let input = document.getElementById("TekstKode").value.trim(); // Henter verdien fra input-feltet
    const kode = "52342"; // jeg bruker (const) som betyr at det ikke kan endre svar etter at det er brukt.
    console.log("test")
    let resultDiv = document.getElementById("result");

    if (input === kode) {
        resultDiv.textContent = "Koden er riktig! Du sendes videre...";
        resultDiv.style.color = "green";
        
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/winning.html"; // Bytt til ønsket URL
        }, 2000); // Venter 2 sekunder før redirect
    } else {
        resultDiv.textContent = "Denne koden er feil.";
        resultDiv.style.color = "red";
    }
});

function myBack() {
    window.location.href = "http://127.0.0.1:5500/2_room.html"
}