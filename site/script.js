/* ============================================================
   RBC Enterprise | Landing Page Script
   Film strip background + particles + interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Cinematic Film Canvas ---------- */
    const canvas = document.getElementById('filmCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles = [], beams = [], strips = [];

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        /* --- Film Strip Drawing ---
           Classic 35mm film strip: long rectangles with sprocket holes
           along both edges, placed at creative angles across the viewport */

        function initStrips() {
            strips = [
                { x: w * 0.03,  y: -120,  angle: 10,   width: 120, speed: 0.14,  opacity: 0.045 },
                { x: w * 0.18,  y: -300,  angle: -14,  width: 95,  speed: 0.06,  opacity: 0.035 },
                { x: w * 0.33,  y: -80,   angle: 20,   width: 105, speed: 0.09,  opacity: 0.03  },
                { x: w * 0.48,  y: -250,  angle: -6,   width: 85,  speed: 0.04,  opacity: 0.022 },
                { x: w * 0.62,  y: -180,  angle: 15,   width: 110, speed: 0.11,  opacity: 0.038 },
                { x: w * 0.76,  y: -60,   angle: -18,  width: 100, speed: 0.07,  opacity: 0.032 },
                { x: w * 0.88,  y: -220,  angle: 8,    width: 90,  speed: 0.13,  opacity: 0.04  },
                { x: w * 1.0,   y: -140,  angle: -12,  width: 115, speed: 0.05,  opacity: 0.028 },
            ];
            // Pre-render each strip to an offscreen canvas (once)
            strips.forEach(strip => {
                strip.cache = prerenderStrip(strip);
            });
        }

        function roundRect(c, x, y, rw, rh, r) {
            c.beginPath();
            c.moveTo(x + r, y);
            c.lineTo(x + rw - r, y);
            c.quadraticCurveTo(x + rw, y, x + rw, y + r);
            c.lineTo(x + rw, y + rh - r);
            c.quadraticCurveTo(x + rw, y + rh, x + rw - r, y + rh);
            c.lineTo(x + r, y + rh);
            c.quadraticCurveTo(x, y + rh, x, y + rh - r);
            c.lineTo(x, y + r);
            c.quadraticCurveTo(x, y, x + r, y);
            c.closePath();
        }

        // Render a full film strip to an offscreen canvas once
        function prerenderStrip(strip) {
            const sw = strip.width;
            const totalLen = Math.ceil(h * 2.5);
            const holeSize = sw * 0.1;
            const holeMargin = sw * 0.08;
            const frameH = sw * 0.75;
            const frameGap = sw * 0.15;
            const borderW = sw * 0.18;
            const alpha = strip.opacity;
            const holeSpacing = frameH + frameGap;
            const holeCount = Math.ceil(totalLen / holeSpacing) + 2;

            const oc = document.createElement('canvas');
            oc.width = sw;
            oc.height = totalLen;
            const o = oc.getContext('2d');

            // Main strip body
            o.fillStyle = `rgba(180, 175, 160, ${alpha * 0.5})`;
            o.fillRect(0, 0, sw, totalLen);

            // Border edges
            o.fillStyle = `rgba(200, 195, 180, ${alpha * 0.7})`;
            o.fillRect(0, 0, borderW, totalLen);
            o.fillRect(sw - borderW, 0, borderW, totalLen);

            // Sprocket holes
            o.fillStyle = `rgba(6, 10, 16, ${alpha * 4})`;
            for (let i = 0; i < holeCount; i++) {
                const hy = i * holeSpacing + frameGap / 2;
                roundRect(o, holeMargin, hy, holeSize, holeSize * 1.4, 2);
                o.fill();
                roundRect(o, sw - holeMargin - holeSize, hy, holeSize, holeSize * 1.4, 2);
                o.fill();
            }

            // Film frames + sheen (gradient created once per frame size, reused)
            const frameW = sw - borderW * 2 - 4;
            const frameX = borderW + 2;
            const sheen = o.createLinearGradient(frameX, 0, frameX + frameW, 0);
            sheen.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.4})`);
            sheen.addColorStop(0.3, `rgba(255, 255, 255, 0)`);
            sheen.addColorStop(1, `rgba(255, 255, 255, ${alpha * 0.15})`);

            for (let i = 0; i < holeCount; i++) {
                const fy = i * holeSpacing;
                o.fillStyle = `rgba(15, 20, 30, ${alpha * 2.5})`;
                roundRect(o, frameX, fy, frameW, frameH, 3);
                o.fill();
                o.fillStyle = sheen;
                roundRect(o, frameX, fy, frameW, frameH, 3);
                o.fill();
            }

            return { canvas: oc, totalLen };
        }

        function drawFilmStrip(strip) {
            if (!strip.cache) return;
            ctx.save();
            ctx.translate(strip.x, strip.y);
            ctx.rotate((strip.angle * Math.PI) / 180);
            // Single drawImage call instead of hundreds of path operations
            ctx.drawImage(strip.cache.canvas, -strip.width / 2, -strip.cache.totalLen / 2);
            ctx.restore();
        }

        /* --- Dust Particles --- */
        function initParticles() {
            particles = [];
            const count = Math.floor((w * h) / 22000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * w, y: Math.random() * h,
                    r: Math.random() * 1.1 + 0.3,
                    dx: (Math.random() - 0.5) * 0.1,
                    dy: (Math.random() - 0.5) * 0.07,
                    o: Math.random() * 0.2 + 0.04,
                    phase: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.007 + 0.002
                });
            }
        }

        /* --- Light Beams --- */
        function initBeams() {
            beams = [];
            for (let i = 0; i < 2; i++) {
                beams.push({
                    x: Math.random() * w,
                    width: Math.random() * 60 + 30,
                    opacity: 0, target: 0,
                    speed: Math.random() * 0.2 + 0.06,
                    timer: Math.random() * 500
                });
            }
        }

        /* --- Scroll offset for parallax film strips --- */
        let scrollY = 0;
        window.addEventListener('scroll', () => { scrollY = window.scrollY; });

        /* --- Main draw loop --- */
        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Draw film strips with parallax scroll
            strips.forEach(strip => {
                const parallax = scrollY * strip.speed;
                const originalY = strip.y;
                strip.y = originalY + parallax;
                drawFilmStrip(strip);
                strip.y = originalY;
            });

            // Light beams (warm tone, subtle)
            beams.forEach(b => {
                b.timer--;
                if (b.timer <= 0) {
                    b.target = b.opacity > 0.008 ? 0 : Math.random() * 0.018 + 0.005;
                    b.timer = Math.random() * 500 + 250;
                }
                b.opacity += (b.target - b.opacity) * 0.008;
                b.x += b.speed;
                if (b.x > w + 200) b.x = -200;

                const g = ctx.createLinearGradient(b.x, 0, b.x + b.width, h);
                g.addColorStop(0, `rgba(200, 190, 160, 0)`);
                g.addColorStop(0.3, `rgba(200, 190, 160, ${b.opacity})`);
                g.addColorStop(0.7, `rgba(200, 190, 160, ${b.opacity * 0.3})`);
                g.addColorStop(1, `rgba(200, 190, 160, 0)`);
                ctx.fillStyle = g;
                ctx.fillRect(b.x, 0, b.width, h);
            });

            // Dust particles
            particles.forEach(p => {
                p.x += p.dx; p.y += p.dy; p.phase += p.speed;
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                const a = p.o * (0.5 + 0.5 * Math.sin(p.phase));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(220, 215, 200, ${a})`;
                ctx.fill();
            });

            // Occasional film flicker
            if (Math.random() < 0.0015) {
                ctx.fillStyle = `rgba(255, 250, 240, ${Math.random() * 0.01})`;
                ctx.fillRect(0, 0, w, h);
            }

            requestAnimationFrame(draw);
        }

        resize(); initStrips(); initParticles(); initBeams(); draw();
        window.addEventListener('resize', () => { resize(); initStrips(); initParticles(); initBeams(); });
    }

    /* ---------- Navbar scroll effect ---------- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    /* ---------- Active nav link on scroll ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const sy = window.scrollY + 140;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (sy >= top && sy < top + height) {
                navLinks.forEach(a => a.classList.remove('active'));
                const match = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (match) match.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);

    /* ---------- Mobile menu toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const navLinksEl = document.getElementById('navLinks');

    if (navToggle && navLinksEl) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinksEl.classList.toggle('open');
        });
        navLinksEl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinksEl.classList.remove('open');
            });
        });
    }

    /* ---------- Smooth scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Counter animation ---------- */
    function animateCounters() {
        document.querySelectorAll('.counter').forEach(el => {
            if (el.dataset.done) return;
            const rect = el.getBoundingClientRect();
            if (rect.top > window.innerHeight) return;
            el.dataset.done = '1';
            const target = parseInt(el.dataset.target, 10);
            if (isNaN(target)) return;
            let cur = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const iv = setInterval(() => {
                cur += step;
                if (cur >= target) { cur = target; clearInterval(iv); }
                el.textContent = cur;
            }, 40);
        });
    }

    /* ---------- Reveal on scroll ---------- */
    function revealElements() {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
                el.classList.add('visible');
            }
        });
        animateCounters();
    }

    window.addEventListener('scroll', revealElements);
    setTimeout(revealElements, 80);

    /* ---------- Glass card tilt ---------- */
    document.querySelectorAll('.comp-card, .about-card, .sector').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -2;
            const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 2;
            card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
});
