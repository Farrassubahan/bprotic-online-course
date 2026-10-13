/**
 * BPROTIC Online Course - Theme & Antigravity Animation Engine
 * Handles Dark/Light Mode, Glassmorphism, Micro-interactions, & Code Copying
 */

// 1. Immediately apply theme before DOMContentLoaded to prevent flash of wrong theme
(function () {
    const savedTheme = localStorage.getItem("bprotic_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initSpotlightCards();
    initCodeCopyButtons();
    initRevealAnimations();
});

// ==========================================
// THEME SWITCHER (Dark / Light Mode)
// ==========================================
function initThemeToggle() {
    const toggleBtns = document.querySelectorAll(".btn-theme-toggle");
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeIcons(currentTheme);

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const nextTheme = activeTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", nextTheme);
            localStorage.setItem("bprotic_theme", nextTheme);
            updateThemeIcons(nextTheme);

            // Add smooth rotation bounce effect on icon
            btn.classList.add("theme-pulse");
            setTimeout(() => btn.classList.remove("theme-pulse"), 400);

            // Notify user smoothly
            if (window.Swal && Swal.isVisible()) {
                // If sweetalert is open, update its appearance
                Swal.close();
            }
        });
    });
}

function updateThemeIcons(theme) {
    const icons = document.querySelectorAll(".theme-icon");
    icons.forEach(icon => {
        if (theme === "light") {
            icon.className = "bi bi-sun-fill theme-icon text-warning";
        } else {
            icon.className = "bi bi-moon-stars-fill theme-icon text-info";
        }
    });
}

// ==========================================
// ANTIGRAVITY SPOTLIGHT EFFECT
// Cards track mouse coordinates for dynamic radial glow
// ==========================================
function initSpotlightCards() {
    const cards = document.querySelectorAll(".portal-card, .content-wrapper, .card-main, .glow-interactive");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

// ==========================================
// INTERACTIVE CODE COPY BUTTONS
// Auto-injects sleek copy button to pre code blocks
// ==========================================
function initCodeCopyButtons() {
    // Run periodically / on observer to also catch dynamically injected code blocks
    const attachButtons = () => {
        document.querySelectorAll("pre:not(.copy-injected)").forEach(pre => {
            pre.classList.add("copy-injected", "position-relative");

            const copyBtn = document.createElement("button");
            copyBtn.type = "button";
            copyBtn.className = "btn-copy-code";
            copyBtn.innerHTML = '<i class="bi bi-clipboard me-1"></i><span>Salin</span>';
            copyBtn.setAttribute("title", "Salin kode ke clipboard");

            copyBtn.addEventListener("click", () => {
                const code = pre.querySelector("code");
                const textToCopy = code ? code.innerText : pre.innerText;

                navigator.clipboard.writeText(textToCopy).then(() => {
                    copyBtn.innerHTML = '<i class="bi bi-check2 text-success me-1"></i><span class="text-success">Tersalin!</span>';
                    copyBtn.classList.add("copied");
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="bi bi-clipboard me-1"></i><span>Salin</span>';
                        copyBtn.classList.remove("copied");
                    }, 2000);
                }).catch(err => {
                    console.error("Gagal menyalin:", err);
                });
            });

            pre.appendChild(copyBtn);
        });
    };

    attachButtons();

    // Observe changes inside contentArea when week changes
    const contentArea = document.getElementById("contentArea");
    if (contentArea) {
        const observer = new MutationObserver(() => {
            setTimeout(attachButtons, 250);
            initSpotlightCards();
        });
        observer.observe(contentArea, { childList: true, subtree: true });
    }
}

// ==========================================
// REVEAL ON SCROLL & STAGGER ANIMATIONS
// ==========================================
function initRevealAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".portal-card, .hero-section, .portal-hero, section").forEach(el => {
        el.classList.add("reveal-on-scroll");
        revealObserver.observe(el);
    });
}
