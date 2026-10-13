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
    initBackgroundParticles();
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

// ==========================================
// ANTIGRAVITY PARTICLES MESH (Titik-titik Bergerak di Latar Belakang)
// ==========================================
function initBackgroundParticles() {
    let canvas = document.getElementById("bg-particles");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "bg-particles";
        document.body.prepend(canvas);
    }

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & state
    const mouse = {
        x: null,
        y: null,
        radius: 140
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Resize handler
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createParticles();
        }, 150);
    });

    // Particle Configuration
    let particles = [];
    const getParticleCount = () => {
        if (window.innerWidth < 768) return 35;
        if (window.innerWidth < 1200) return 60;
        return 85;
    };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.85;
            this.vy = (Math.random() - 0.5) * 0.85;
            this.baseRadius = Math.random() * 2 + 1.2;
            this.radius = this.baseRadius;
            this.isPrimary = Math.random() > 0.35;
            this.pulseAngle = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.02 + Math.random() * 0.02;
        }

        update() {
            // Move particle
            this.x += this.vx;
            this.y += this.vy;

            // Subtle pulsing of size
            this.pulseAngle += this.pulseSpeed;
            this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.6;

            // Bounce off edges gently
            if (this.x < 0) { this.x = 0; this.vx *= -1; }
            if (this.x > width) { this.x = width; this.vx *= -1; }
            if (this.y < 0) { this.y = 0; this.vy *= -1; }
            if (this.y > height) { this.y = height; this.vy *= -1; }

            // Mouse interaction (repulsion & connection)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    // Push particle slightly away from mouse
                    this.x -= Math.cos(angle) * force * 1.5;
                    this.y -= Math.sin(angle) * force * 1.5;
                }
            }
        }

        draw(isLight) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);

            let color;
            if (isLight) {
                color = this.isPrimary ? "rgba(2, 132, 199, 0.75)" : "rgba(124, 58, 237, 0.7)";
                ctx.shadowColor = this.isPrimary ? "#0284c7" : "#7c3aed";
                ctx.shadowBlur = 4;
            } else {
                color = this.isPrimary ? "rgba(56, 189, 248, 0.85)" : "rgba(168, 85, 247, 0.85)";
                ctx.shadowColor = this.isPrimary ? "#38bdf8" : "#a855f7";
                ctx.shadowBlur = 8;
            }

            ctx.fillStyle = color;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }

    function createParticles() {
        particles = [];
        const count = getParticleCount();
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    createParticles();

    // Connection lines between particles
    function drawConnections(isLight) {
        const maxDist = 125;
        const lineRgb = isLight ? "2, 132, 199" : "56, 189, 248";
        const mouseLineRgb = isLight ? "124, 58, 237" : "168, 85, 247";

        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];

            // Connect to nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * (isLight ? 0.25 : 0.32);
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const dx = p1.x - mouse.x;
                const dy = p1.y - mouse.y;
                const dist = Math.hypot(dx, dy);

                if (dist < mouse.radius) {
                    const alpha = (1 - dist / mouse.radius) * (isLight ? 0.38 : 0.48);
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${mouseLineRgb}, ${alpha})`;
                    ctx.lineWidth = 1.1;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    let animationFrameId;
    function animate() {
        ctx.clearRect(0, 0, width, height);

        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const isLight = currentTheme === "light";

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(isLight);
        }

        drawConnections(isLight);

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Pause when tab is not visible to preserve battery & performance
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animationFrameId = requestAnimationFrame(animate);
        }
    });
}

