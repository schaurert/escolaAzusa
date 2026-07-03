const targetDate = new Date("2026-08-17T20:00:00");

function animateFlip(el, value) {
    if (el.textContent !== value) {
        el.classList.remove("animate");
        void el.offsetWidth; 
        el.classList.add("animate");
        el.textContent = value;
    }
}

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector(".contador").innerHTML =
            "<h3>EVENTO INICIADO!</h3>";
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    animateFlip(document.getElementById("dias"), String(dias).padStart(2, "0"));
    animateFlip(document.getElementById("horas"), String(horas).padStart(2, "0"));
    animateFlip(document.getElementById("minutos"), String(minutos).padStart(2, "0"));
}

const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

items.forEach(item => observer.observe(item));

setInterval(updateCountdown, 1000);
updateCountdown();