// add event listener on load
window.addEventListener('load', function () {
    function addClickHandler(eventTargetID, scrollToTargetID) {
        document
            .querySelector(eventTargetID)
            .addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(scrollToTargetID).scrollIntoView({
                    behavior: 'smooth',
                    block: "start",
                    inline: "nearest"
                });
            });
    }

    addClickHandler("#nav-about", "#about");
    addClickHandler("#nav-experience", "#experience");
    addClickHandler("#nav-projects", "#projects");
});