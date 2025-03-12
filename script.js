document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute("href");
        if (href.includes(".html")) return; // Allow normal navigation for internal pages
        e.preventDefault(); // Prevent default behavior only for in-page scrolling
        const targetId = href.substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    });
});
