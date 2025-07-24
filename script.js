const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const modal = document.getElementById('resultModal');
let value = Math.ceil(Math.random() * 3600);
const options = ["Break Time","Go for Coffee","Go and play Ping Pong","Take a 5 minute Walk","Snacks Time","Stretch your legs","Scroll Insta","Chat with your colleagues"];

function launchConfetti() {
    for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
    }
}

spinBtn.onclick = () => {
    wheel.style.transform = "rotate(" + value + "deg)";
    const resultDeg = value % 360;
    const selectedIndex = Math.floor((360 - resultDeg) / 45) % 8;
    setTimeout(() => {
    modal.innerText = options[selectedIndex];
    modal.classList.add('show');
    launchConfetti();

    setTimeout(() => modal.classList.remove('show'), 4000);
    }, 6000);

    value += Math.ceil(Math.random() * 3600);
};