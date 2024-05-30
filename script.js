document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar-list a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const href = this.getAttribute("href");
            
            if (href === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                } else {
                    console.error(`Section with ID '${targetId}' not found.`);
                }
            }
        });
    });
});
