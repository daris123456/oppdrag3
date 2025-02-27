// Function to reveal the modal when the keypad image is clicked
function revealForm() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");  
    document.getElementById("overlay").style.display = "flex";
}

// Function to check the input field's value
function checkInput() {
    const userInput = document.getElementById("inputField").value.trim().toLowerCase();
    const correctCode = "2"; // Set the correct secret code

    if (userInput === correctCode) {
        window.location.href = "http://127.0.0.1:5500/random.html";  // Redirect to another page if correct
    } else {
        alert("Incorrect code! Try again.");  // Alert if the input is wrong
    }
}

// Function to close the modal when clicking on the overlay or the close button
function closeModal(event) {
    if (event.target === document.getElementById("overlay") || event.target.classList.contains("close")) {
        console.log("Modal is being closed");  
        document.getElementById("overlay").style.display = "none";

    }
}