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
            createCodeSnippets();
        }, 150);
    });

    // ==========================================
    // 1. PARTICLES (Titik Galaxy & Konstelasi)
    // ==========================================
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
            this.x += this.vx;
            this.y += this.vy;

            this.pulseAngle += this.pulseSpeed;
            this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.6;

            if (this.x < 0) { this.x = 0; this.vx *= -1; }
            if (this.x > width) { this.x = width; this.vx *= -1; }
            if (this.y < 0) { this.y = 0; this.vy *= -1; }
            if (this.y > height) { this.y = height; this.vy *= -1; }

            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
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
            ctx.shadowBlur = 0;
        }
    }

    function createParticles() {
        particles = [];
        const count = getParticleCount();
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    // ==========================================
    // 2. FLOATING CODE SNIPPETS (Bacaan Code Acak Melayang)
    // ==========================================
    const CODE_SNIPPETS = [
        "const [state, setState] = useState()",
        "<View style={styles.container}>",
        "Route::get('/api/course', [CourseController::class])",
        "$conn = new mysqli($host, $user, $pass)",
        "import { IonPage, IonContent } from '@ionic/react'",
        "SELECT * FROM courses WHERE status = 'active'",
        "npm run dev -- --host",
        "interface StudentItem { id: string; }",
        "export default function App() {}",
        "router.push('/detail/' + id)",
        "<IonButton color='primary'>BPROTIC</IonButton>",
        "echo json_encode(['status' => 'success'])",
        "async fetchData(): Promise<void>",
        "npx expo start --tunnel",
        "public function store(Request $request)",
        "{ ...prevState, loading: false }",
        "git commit -m 'feat: galaxy code'",
        "<Text style={{ color: '#38bdf8' }}>",
        "IonRouterOutlet",
        "useParams<{ id: string }>()",
        "const db = await mysql.connect()",
        "return response()->json($data, 200)",
        "StyleSheet.create({ flex: 1 })",
        "onIonInput={(e) => setNama(e.detail.value!)}",
        "bprotic_online_course"
    ];

    let codeSnippets = [];
    const getCodeCount = () => {
        if (window.innerWidth < 768) return 8;
        if (window.innerWidth < 1200) return 13;
        return 18;
    };

    class FloatingCode {
        constructor() {
            this.reset(true);
        }

        reset(randomY = false) {
            this.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
            this.x = Math.random() * (width - 120);
            this.y = randomY ? Math.random() * height : height + Math.random() * 40;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = -(Math.random() * 0.35 + 0.18); // Melayang perlahan ke atas seperti debu kosmik
            this.fontSize = Math.floor(Math.random() * 3) + 11; // 11, 12, 13px
            this.baseAlpha = Math.random() * 0.18 + 0.15; // Kepekatan pas: terbaca namun tidak menutupi materi
            this.alpha = this.baseAlpha;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.012 + Math.random() * 0.012;
            const randColor = Math.random();
            this.colorType = randColor > 0.65 ? 'cyan' : (randColor > 0.35 ? 'purple' : 'emerald');
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.pulse += this.pulseSpeed;

            const currentBase = this.baseAlpha + Math.sin(this.pulse) * 0.05;

            // Interaksi saat kursor mouse mendekati teks kode
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);

                if (dist < 130) {
                    const boost = (1 - dist / 130) * 0.45;
                    this.alpha = Math.min(0.85, currentBase + boost);
                    // Dorongan halus dari mouse
                    this.x -= (dx / dist) * 0.8;
                    this.y -= (dy / dist) * 0.8;
                } else {
                    this.alpha = currentBase;
                }
            } else {
                this.alpha = currentBase;
            }

            // Respawn saat melayang melewati batas atas layar
            if (this.y < -40 || this.x < -200 || this.x > width + 50) {
                this.reset(false);
            }
        }

        draw(isLight) {
            ctx.save();
            ctx.font = `${this.fontSize}px 'Fira Code', 'JetBrains Mono', 'Courier New', monospace`;

            let color;
            if (isLight) {
                if (this.colorType === 'cyan') color = `rgba(2, 132, 199, ${this.alpha * 0.95})`;
                else if (this.colorType === 'purple') color = `rgba(124, 58, 237, ${this.alpha * 0.95})`;
                else color = `rgba(5, 150, 105, ${this.alpha * 0.95})`;
                ctx.shadowColor = this.colorType === 'cyan' ? '#0284c7' : '#7c3aed';
                ctx.shadowBlur = 3;
            } else {
                if (this.colorType === 'cyan') color = `rgba(56, 189, 248, ${this.alpha})`;
                else if (this.colorType === 'purple') color = `rgba(168, 85, 247, ${this.alpha})`;
                else color = `rgba(52, 211, 153, ${this.alpha})`;
                ctx.shadowColor = this.colorType === 'cyan' ? '#38bdf8' : '#a855f7';
                ctx.shadowBlur = 6;
            }

            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
            ctx.restore();
        }
    }

    function createCodeSnippets() {
        codeSnippets = [];
        const count = getCodeCount();
        for (let i = 0; i < count; i++) {
            codeSnippets.push(new FloatingCode());
        }
    }

    // Inisialisasi awal
    createParticles();
    createCodeSnippets();

    // Connection lines between particles
    function drawConnections(isLight) {
        const maxDist = 125;
        const lineRgb = isLight ? "2, 132, 199" : "56, 189, 248";
        const mouseLineRgb = isLight ? "124, 58, 237" : "168, 85, 247";

        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];

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

        // 1. Gambar & update potongan kode acak (background layer)
        for (let i = 0; i < codeSnippets.length; i++) {
            codeSnippets[i].update();
            codeSnippets[i].draw(isLight);
        }

        // 2. Gambar & update partikel titik galaxy
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(isLight);
        }

        // 3. Hubungkan garis konstelasi
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

