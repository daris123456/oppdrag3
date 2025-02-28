function revealForm() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");  
    document.getElementById("overlay").style.display = "flex";
}


function checkInput() {
    const userInput = document.getElementById("inputField").value.trim().toLowerCase();
    const correctCode = "hjul"; 

    if (userInput === correctCode) {
        window.location.href = "http://127.0.0.1:5500/3_room.html";  
    } else {
        alert("Feil? Spør ChatGPT AHAHAAHAHAHA");  
    }
}

function closeModal(event) {
    if (event.target === document.getElementById("overlay") || event.target.classList.contains("close")) {
        console.log("Modal is being closed");  
        document.getElementById("overlay").style.display = "none";

    }
}

function myBack() {
    window.location.href = "http://127.0.0.1:5500/1_room.html";
}