// script.js

// Function to handle song card click events
function setupSongCards() {
    const songContainer = document.querySelector('.song-container');
    const audioPlayer = document.getElementById('audio-player');

    // Get all song cards
    const songCards = document.querySelectorAll('.song-card');

    songCards.forEach(card => {
        // Add click event listener to play the song
        card.addEventListener('click', () => {
            const file = card.getAttribute('data-file');
            audioPlayer.src = `songs/${file}`;
            audioPlayer.play();
        });
    });
}

// Call the function to set up song card event listeners
setupSongCards();


// **********************************************************************************************************
// HERE THE JAVASCRIPT CODE FOR THE HAMBURGER THAT IF ANYONE CLICK ON THE HAMBURGER THE LEFT SIDE WILL APPEAR
// **********************************************************************************************************

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "0"
})



// **********************************************************************************************************
// HERE THE JAVASCRIPT CODE FOR THE HAMBURGER THAT IF ANYONE CLICK ON THE CANCEL BUTTON HAMBURGER WILL CLOSE
// **********************************************************************************************************


document.querySelector(".cancel").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "-100%"
})
