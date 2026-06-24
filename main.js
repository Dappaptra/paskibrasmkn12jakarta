const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        menuBtn.innerHTML = "☰";
    } else {
        menuBtn.innerHTML = "✕";
    }
});

// Tutup menu setelah klik link
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = "☰";
    });
});

const video = document.getElementById("videoPaskibra");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.6
});

observer.observe(video);

document.addEventListener("DOMContentLoaded", function () {

    const seeAllBtn = document.getElementById('seeAllBtn');
    const moreKegiatan = document.getElementById('moreKegiatan');

    if (!seeAllBtn || !moreKegiatan) {
        console.log("Element tidak ketemu");
        return;
    }

    seeAllBtn.addEventListener('click', () => {
        moreKegiatan.classList.toggle('hidden');

        if (moreKegiatan.classList.contains('hidden')) {
            seeAllBtn.innerText = "See All →";
        } else {
            seeAllBtn.innerText = "Show Less ↑";
        }
    });

});

const slider = document.getElementById("prestasiSlider");
const cards = slider.children;

let current = 0;

setInterval(() => {
    current = (current + 1) % cards.length;

    slider.scrollTo({
        left: cards[current].offsetLeft,
        behavior: "smooth"
    });
}, 2000);


// animate of statistik
const counters = document.querySelectorAll(".counter");

const statsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;
        const increment = target / 80;

        const updateCounter = () => {

            if (current < target) {

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

                if (target !== 2010) {
                    counter.innerText += "+";
                }

                counter.classList.add("done");

                setTimeout(() => {
                    counter.classList.remove("done");
                }, 300);
            }
        };

        updateCounter();

        statsObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    statsObserver.observe(counter);
});

//ini FAQ
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;
        const icon = button.querySelector(".faq-icon");

        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

        // Tutup semua FAQ
        document.querySelectorAll(".faq-content").forEach(item => {
            item.style.maxHeight = null;
        });

        document.querySelectorAll(".faq-icon").forEach(item => {
            item.textContent = "+";
        });

        // Buka FAQ yang dipilih
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});