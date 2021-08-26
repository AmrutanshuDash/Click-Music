window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#006400",
        "#f08080",
        "#40e0d0",
        "#8a2be2",
        "#ee2dae",  
        "#ffd700"
    ];

    //Linking sound files and play pausa 
    pads.forEach((pad,index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //Create a function that makes bubbles
    const createBubble = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});
