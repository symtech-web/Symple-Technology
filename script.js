document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-div");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentSectionIndex = 0;

    function updateSections() {
        sections.forEach((section, index) => {
            section.classList.toggle("active", index === currentSectionIndex);
        });
        prevButton.disabled = currentSectionIndex === 0;
        nextButton.disabled = currentSectionIndex === sections.length - 1;
    }

    prevButton.addEventListener("click", () => {
        if (currentSectionIndex > 0) currentSectionIndex--;
        updateSections();
    });

    nextButton.addEventListener("click", () => {
        if (currentSectionIndex < sections.length - 1) currentSectionIndex++;
        updateSections();
    });

    document.querySelectorAll(".nav-button").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("data-target");
            currentSectionIndex = Array.from(sections).findIndex(
                (section) => section.id === targetId
            );
            updateSections();
        });
    });

    updateSections();
});
