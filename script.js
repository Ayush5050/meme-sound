const sounds = {
    'btn-faah': new Audio('faah.mp3'),
    'btn-acp': new Audio('acp.mp3')
};

document.querySelectorAll('.meme-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sound = sounds[button.id];
        if (sound) {
            // Reset sound to start if it's already playing
            sound.currentTime = 0;
            sound.play().catch(error => {
                console.error("Audio playback failed:", error);
                alert("Click the page first to enable audio!");
            });
        }
    });
});

console.log("Meme Soundboard JS loaded");
