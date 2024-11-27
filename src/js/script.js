// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click", (e) => {
accordeon.querySelectorAll("details").forEach((det) => {
    det.querySelector("summary").addEventListener("click", (e) => {
        accordeon.querySelectorAll("details").forEach((autreDet) => {
            if (autreDet !== det) {
                autreDet.open = false;
        }
        });
    });
});
});
