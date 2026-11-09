/**
 * Portfolio Interactive Engine
 * Handles Terminal CLI, Bento Grid, Project Filtering, Command Palette & Animations
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Spotlight Glow Mouse Tracker
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
        window.addEventListener("mousemove", (e) => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    }

    // 3. Populate Profile Info
    renderProfileInfo();

    // 4. Hero Dynamic Typing Effect
    initTypingEffect();

    // 5. Interactive Terminal Engine
    initTerminal();

    // 6. Populate Bento Grid (Stats & Skills)
    renderStats();
    renderSkills();

    // 7. Projects Filter & Render
    renderProjects("all");
    initProjectFilters();

    // 8. Experience Timeline
    renderExperiences();

    // 9. Command Palette (Ctrl+K / Cmd+K)
    initCommandPalette();

    // 10. Contact Form & Copy Actions
    initContactActions();

    // 11. Mobile Navigation
    initMobileNav();

    // 12. Fetch Real-time GitHub Stats
    fetchGitHubLiveStats();

    // 13. Tech Constellation Canvas Animation
    initTechCanvas();

    // 14. Scroll Progress Bar & Back to Top
    initScrollInteractions();

    // 15. Live WIB Clock
    initLiveClock();
});

/* ==========================================================
   RENDER PROFILE
========================================================== */
function renderProfileInfo() {
    const p = PORTFOLIO_DATA.profile;
    
    // Fill text elements if they exist
    const nameEls = document.querySelectorAll(".profile-name");
    nameEls.forEach(el => el.textContent = p.name);

    const handleEls = document.querySelectorAll(".profile-handle");
    handleEls.forEach(el => el.textContent = p.handle);

    const bioEl = document.getElementById("profile-bio");
    if (bioEl) bioEl.textContent = p.bio;

    const emailEls = document.querySelectorAll(".profile-email");
    emailEls.forEach(el => el.textContent = p.email);

    const statusEl = document.getElementById("profile-status-text");
    if (statusEl) statusEl.textContent = p.status;

    // Social Links
    const ghLink = document.getElementById("link-github");
    if (ghLink) ghLink.href = p.github;

    const liLink = document.getElementById("link-linkedin");
    if (liLink) liLink.href = p.linkedin;

    const twLink = document.getElementById("link-twitter");
    if (twLink) twLink.href = p.twitter;
}

/* ==========================================================
   DYNAMIC TYPING EFFECT
========================================================== */
function initTypingEffect() {
    const target = document.getElementById("typing-role");
    if (!target) return;

    const roles = PORTFOLIO_DATA.profile.rolesTyping;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            target.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            target.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 110;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at full text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ==========================================================
   INTERACTIVE MINI TERMINAL CLI
========================================================== */
function initTerminal() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");
    const terminalChips = document.querySelectorAll(".term-chip");
    if (!terminalInput || !terminalBody) return;

    const history = [];
    let historyIdx = -1;

    // Terminal Commands
    const commands = {
        help: () => `
<div class="text-cyan-400 font-semibold mb-1">Perintah yang tersedia:</div>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-300 text-xs">
  <div><span class="text-emerald-400 font-mono">whoami</span> - Tentang pengembang</div>
  <div><span class="text-emerald-400 font-mono">github</span> - Profil & repos GitHub</div>
  <div><span class="text-emerald-400 font-mono">skills</span> - Ringkasan tech stack</div>
  <div><span class="text-emerald-400 font-mono">projects</span> - Daftar portofolio</div>
  <div><span class="text-emerald-400 font-mono">contact</span> - Info kontak & medsos</div>
  <div><span class="text-emerald-400 font-mono">neofetch</span> - Tampilkan sistem info</div>
  <div><span class="text-emerald-400 font-mono">date</span> - Waktu server lokal</div>
  <div><span class="text-emerald-400 font-mono">clear</span> - Bersihkan layar terminal</div>
</div>`,

        github: () => `
<div class="space-y-1.5 text-xs font-mono text-slate-200">
  <div class="text-cyan-400 font-bold">🐙 GitHub Profile: @${PORTFOLIO_DATA.profile.githubUsername}</div>
  <div>🔗 Profil: <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-emerald-400 underline">${PORTFOLIO_DATA.profile.github}</a></div>
  <div class="text-slate-400 pt-1">Live Web Apps & Repository:</div>
  <div class="pl-2 space-y-1 text-slate-300">
    <div>• <a href="https://analisis-saham-bbca-2o1r.vercel.app/login" target="_blank" class="text-emerald-300 hover:underline font-semibold">analisis-saham-bbca (Live App @ Vercel)</a> 🚀</div>
    <div>• <a href="https://github.com/rickigilang3-droid/analisis-saham-bbca" target="_blank" class="text-cyan-300 hover:underline font-semibold">analisis-saham-bbca</a> <span class="text-slate-500">(Source Code)</span></div>
    <div>• <a href="https://github.com/rickigilang3-droid/EcoHub-main" target="_blank" class="text-purple-300 hover:underline font-semibold">EcoHub-main</a> <span class="text-slate-500">(Waste Bank Platform)</span></div>
  </div>
</div>`,
        
        whoami: () => `
<div class="text-slate-200">
  <span class="text-cyan-400 font-bold">${PORTFOLIO_DATA.profile.name}</span><br>
  🎓 Pendidikan: <span class="text-emerald-400 font-semibold">${PORTFOLIO_DATA.profile.role}</span><br>
  🐙 GitHub: <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-cyan-400 underline">@${PORTFOLIO_DATA.profile.githubUsername}</a><br>
  📍 Lokasi: ${PORTFOLIO_DATA.profile.location}<br>
  💡 Bio: ${PORTFOLIO_DATA.profile.bio}
</div>`,

        skills: () => {
            let output = '<div class="space-y-2">';
            PORTFOLIO_DATA.skills.forEach(cat => {
                const itemNames = cat.items.map(i => `<span class="bg-slate-800 text-cyan-300 px-2 py-0.5 rounded text-xs">${i.name}</span>`).join(" ");
                output += `<div><span class="text-purple-400 font-semibold text-xs">[${cat.category}]</span>: ${itemNames}</div>`;
            });
            output += '</div>';
            return output;
        },

        projects: () => {
            let output = '<div class="space-y-1.5">';
            PORTFOLIO_DATA.projects.slice(0, 4).forEach((p, idx) => {
                output += `<div><span class="text-emerald-400 font-mono">${idx + 1}.</span> <span class="text-white font-medium">${p.title}</span> <span class="text-slate-500 text-xs">(${p.tags.slice(0, 3).join(", ")})</span></div>`;
            });
            output += `<div class="text-xs text-slate-400 mt-2">Ketik <span class="text-cyan-400">projects --all</span> atau scroll ke section Projects untuk selengkapnya.</div></div>`;
            return output;
        },

        contact: () => `
<div class="space-y-1 text-slate-200 text-xs font-mono">
  <div>💬 WhatsApp: <a href="https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}" target="_blank" class="text-emerald-400 underline font-semibold">Chat Langsung via WhatsApp</a></div>
  <div>📧 Email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="text-cyan-400 underline">${PORTFOLIO_DATA.profile.email}</a></div>
  <div>🐙 GitHub: <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="text-cyan-400 underline">@${PORTFOLIO_DATA.profile.githubUsername}</a></div>
  <div>💬 Discord: <span class="text-purple-400">${PORTFOLIO_DATA.profile.discord}</span></div>
</div>`,

        wa: () => `
<div class="space-y-1 text-xs font-mono text-slate-200">
  <div class="text-emerald-400 font-bold">🟢 WhatsApp Direct:</div>
  <div>Klik untuk chat langsung ke WhatsApp Ricki: <a href="https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}" target="_blank" class="text-cyan-400 underline">https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}</a></div>
</div>`,

        neofetch: () => `
<div class="flex flex-col sm:flex-row gap-4 items-start text-xs">
  <pre class="text-cyan-400 font-mono leading-tight select-none">
     /\\
    /  \\
   /\\   \\
  /      \\
 /   ,,   \\
/   |  |  -\\
/_-''    ''-_\\
  </pre>
  <div class="space-y-0.5 font-mono text-slate-300">
    <div><span class="text-cyan-400 font-bold">dev</span>@<span class="text-purple-400 font-bold">portfolio.box</span></div>
    <div class="text-slate-600">----------------------</div>
    <div><span class="text-yellow-400 font-semibold">OS:</span> Arch Linux x86_64 / WebOS</div>
    <div><span class="text-yellow-400 font-semibold">Host:</span> Developer Portfolio v2.5</div>
    <div><span class="text-yellow-400 font-semibold">Kernel:</span> 6.12.0-zen-portfolio</div>
    <div><span class="text-yellow-400 font-semibold">Uptime:</span> 99.9% Always Learning</div>
    <div><span class="text-yellow-400 font-semibold">Shell:</span> zsh 5.9 (x86_64)</div>
    <div><span class="text-yellow-400 font-semibold">Stack:</span> Next.js, React, Laravel, Tailwind</div>
    <div><span class="text-yellow-400 font-semibold">Database:</span> MySQL, Supabase (PostgreSQL)</div>
    <div><span class="text-yellow-400 font-semibold">Memory:</span> 420MB / 1024MB</div>
  </div>
</div>`,

        date: () => `<div class="text-slate-300 font-mono">${new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'medium' })}</div>`,

        sudo: () => `<div class="text-red-400 font-mono">Akses ditolak: Kamu sudah berada dalam level admin tertinggi di website ini! 😎</div>`,

        clear: () => {
            terminalBody.innerHTML = "";
            return null;
        }
    };

    function executeCommand(cmdStr) {
        const cleanCmd = cmdStr.trim().toLowerCase();
        if (!cleanCmd) return;

        history.push(cmdStr);
        historyIdx = history.length;

        // Print input line
        const inputEcho = document.createElement("div");
        inputEcho.className = "flex items-center gap-2 text-xs font-mono text-slate-400";
        inputEcho.innerHTML = `<span class="text-cyan-400 font-bold">guest@portfolio</span><span class="text-purple-400 font-bold">~</span><span class="text-slate-500">$</span> <span class="text-white">${escapeHtml(cmdStr)}</span>`;
        terminalBody.appendChild(inputEcho);

        // Execute command
        if (cleanCmd === "clear") {
            commands.clear();
        } else if (commands[cleanCmd]) {
            const resultHtml = commands[cleanCmd]();
            if (resultHtml) {
                const responseEl = document.createElement("div");
                responseEl.className = "mt-1 mb-3 text-xs leading-relaxed";
                responseEl.innerHTML = resultHtml;
                terminalBody.appendChild(responseEl);
            }
        } else {
            const errorEl = document.createElement("div");
            errorEl.className = "mt-1 mb-3 text-xs text-red-400 font-mono";
            errorEl.innerHTML = `command not found: <span class="text-white underline">${escapeHtml(cmdStr)}</span>. Ketik <span class="text-cyan-400 font-bold">help</span> untuk melihat daftar perintah.`;
            terminalBody.appendChild(errorEl);
        }

        // Auto scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Input listeners
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            executeCommand(terminalInput.value);
            terminalInput.value = "";
        } else if (e.key === "ArrowUp") {
            if (historyIdx > 0) {
                historyIdx--;
                terminalInput.value = history[historyIdx];
            }
        } else if (e.key === "ArrowDown") {
            if (historyIdx < history.length - 1) {
                historyIdx++;
                terminalInput.value = history[historyIdx];
            } else {
                historyIdx = history.length;
                terminalInput.value = "";
            }
        }
    });

    // Chips quick click
    terminalChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const cmd = chip.getAttribute("data-cmd");
            if (cmd) {
                executeCommand(cmd);
            }
        });
    });
}

/* ==========================================================
   BENTO GRID (STATS & SKILLS)
========================================================== */
function renderStats() {
    const statsContainer = document.getElementById("stats-container");
    if (!statsContainer) return;

    statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(s => `
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-center items-center text-center group">
            <span class="text-xl sm:text-2xl font-extrabold gradient-text-cyan mb-1 font-mono group-hover:scale-105 transition-transform">${s.value}</span>
            <span class="text-xs text-white font-semibold tracking-wide">${s.label}</span>
            ${s.desc ? `<span class="text-[10px] text-slate-400 font-mono mt-0.5">${s.desc}</span>` : ''}
        </div>
    `).join("");
}

function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
        <div class="space-y-3">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                <h4 class="text-sm font-semibold text-slate-200 tracking-wide uppercase">${cat.category}</h4>
            </div>
            <div class="flex flex-wrap gap-2">
                ${cat.items.map(item => `
                    <div class="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all flex items-center gap-2 group cursor-default">
                        <span class="text-slate-200 text-xs font-medium">${item.name}</span>
                        <span class="text-[10px] text-cyan-400/80 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-900/50">${item.level}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

/* ==========================================================
   PROJECTS SHOWCASE & FILTER
========================================================= */
function renderProjects(filter = "all") {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    const filtered = filter === "all" 
        ? PORTFOLIO_DATA.projects 
        : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    container.innerHTML = filtered.map(p => `
        <div class="glass-card rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">
            <!-- Project Image Banner -->
            <div class="relative h-52 w-full overflow-hidden bg-slate-950">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div class="absolute top-3 left-3 flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-slate-900/90 backdrop-blur-md text-cyan-300 border border-cyan-500/40 shadow-sm">
                        ${p.category}
                    </span>
                    ${p.badgeMetric ? `
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 font-medium">
                            ${p.badgeMetric}
                        </span>
                    ` : ''}
                </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div class="space-y-2.5">
                    <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        ${p.title}
                    </h3>
                    <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        ${p.description}
                    </p>
                </div>

                <!-- Mini Metrics Row -->
                ${p.metrics ? `
                    <div class="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center font-mono text-[11px]">
                        ${p.metrics.map(m => `
                            <div>
                                <div class="text-[9px] text-slate-400 truncate uppercase">${m.label}</div>
                                <div class="text-xs font-bold text-cyan-300">${m.value}</div>
                            </div>
                        `).join("")}
                    </div>
                ` : ''}

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                    ${p.tags.map(tag => `
                        <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors">
                            #${tag}
                        </span>
                    `).join("")}
                </div>

                <!-- Action Buttons -->
                <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button onclick="openProjectModal('${p.id}')" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn">
                        <span>Detail Studi Kasus</span>
                        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
                    </button>
                    <div class="flex items-center gap-2">
                        <a href="${p.githubUrl}" target="_blank" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all text-xs font-mono flex items-center gap-1.5" title="Lihat Source Code">
                            <i data-lucide="github" class="w-3.5 h-3.5"></i>
                            <span class="hidden sm:inline">Repo</span>
                        </a>
                        <a href="${p.demoUrl}" target="_blank" class="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition-all text-xs font-mono flex items-center gap-1.5" title="Live Preview">
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            <span class="hidden sm:inline">Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    if (window.lucide) {
        lucide.createIcons();
    }
}

function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".project-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => {
                b.classList.remove("bg-cyan-500/20", "text-cyan-400", "border-cyan-500/40");
                b.classList.add("text-slate-400", "border-slate-800");
            });
            btn.classList.remove("text-slate-400", "border-slate-800");
            btn.classList.add("bg-cyan-500/20", "text-cyan-400", "border-cyan-500/40");

            const category = btn.getAttribute("data-filter");
            renderProjects(category);
        });
    });
}

/* ==========================================================
   PROJECT MODAL POPUP (DEEP CASE STUDY)
========================================================== */
window.openProjectModal = function(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const modalContent = document.getElementById("project-modal-content");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <div class="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-2xl bg-slate-950">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            
            <div class="absolute top-4 left-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40">
                    ${project.category}
                </span>
                ${project.badgeMetric ? `
                    <span class="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/85 backdrop-blur-md text-emerald-300 border border-emerald-500/40">
                        ${project.badgeMetric}
                    </span>
                ` : ''}
            </div>

            <button onclick="closeProjectModal()" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 backdrop-blur transition-all">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
            <!-- Header -->
            <div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white">${project.title}</h2>
                <p class="text-slate-300 text-sm leading-relaxed mt-2.5">${project.longDescription}</p>
            </div>

            <!-- Key Metrics Highlights -->
            ${project.metrics ? `
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    ${project.metrics.map(m => `
                        <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                            <div class="text-[11px] font-mono text-slate-400 uppercase">${m.label}</div>
                            <div class="text-lg font-bold text-cyan-300 font-mono mt-0.5">${m.value}</div>
                        </div>
                    `).join("")}
                </div>
            ` : ''}

            <!-- Core Features -->
            ${project.coreFeatures ? `
                <div class="space-y-2.5">
                    <h4 class="text-xs font-bold text-slate-300 uppercase font-mono tracking-wider flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
                        <span>Fitur Kunci & Kapabilitas Sistem</span>
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        ${project.coreFeatures.map(f => `
                            <div class="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0"></i>
                                <span>${f}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            ` : ''}

            <!-- Engineering Challenge & Solution -->
            ${project.challengeSolution ? `
                <div class="p-4 rounded-xl bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-purple-500/30 space-y-1.5">
                    <div class="text-xs font-bold text-purple-300 font-mono flex items-center gap-2">
                        <i data-lucide="cpu" class="w-4 h-4 text-purple-400"></i>
                        <span>Tantangan Rekayasa & Solusi Teknis</span>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        ${project.challengeSolution}
                    </p>
                </div>
            ` : ''}

            <!-- Tech Tags -->
            <div>
                <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Teknologi & Tools Terintegrasi</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(t => `<span class="px-3 py-1 rounded-lg bg-slate-800/90 text-cyan-300 text-xs font-mono border border-slate-700/80">#${t}</span>`).join("")}
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <div class="flex items-center gap-3">
                    <a href="${project.demoUrl}" target="_blank" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        <span>Buka Live Demo</span>
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-2 border border-slate-700">
                        <i data-lucide="github" class="w-4 h-4"></i>
                        <span>Source Code</span>
                    </a>
                </div>
                <button onclick="closeProjectModal()" class="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">Tutup Studi Kasus</button>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (window.lucide) {
        lucide.createIcons();
    }
};

window.closeProjectModal = function() {
    const modal = document.getElementById("project-modal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
};

/* ==========================================================
   EXPERIENCE TIMELINE
========================================================== */
function renderExperiences() {
    const container = document.getElementById("experience-timeline");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, idx) => `
        <div class="relative pl-8 sm:pl-10 pb-8 last:pb-0 group">
            <!-- Timeline Line -->
            <div class="absolute left-[11px] top-3 bottom-0 w-[2px] bg-slate-800 group-last:hidden"></div>
            <!-- Timeline Glowing Dot -->
            <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-400 transition-all">
                <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
            </div>
            <!-- Timeline Content -->
            <div class="glass-card p-5 rounded-xl space-y-2 group-hover:border-cyan-500/30 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h3 class="text-base font-bold text-white">${exp.role}</h3>
                    <span class="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/60">${exp.period}</span>
                </div>
                <div class="text-xs font-semibold text-purple-400 flex items-center gap-2">
                    <span>${exp.company}</span>
                    <span>•</span>
                    <span class="text-slate-400">${exp.type}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed pt-1">
                    ${exp.description}
                </p>
            </div>
        </div>
    `).join("");
}

/* ==========================================================
   COMMAND PALETTE (CTRL + K)
========================================================== */
function initCommandPalette() {
    const cmdModal = document.getElementById("cmd-modal");
    const cmdInput = document.getElementById("cmd-input");
    const cmdTrigger = document.getElementById("cmd-trigger");
    const cmdItems = document.querySelectorAll(".cmd-item");
    if (!cmdModal || !cmdInput) return;

    function openPalette() {
        cmdModal.classList.remove("hidden");
        cmdInput.value = "";
        cmdInput.focus();
        filterPaletteItems("");
    }

    function closePalette() {
        cmdModal.classList.add("hidden");
    }

    function filterPaletteItems(query) {
        const q = query.toLowerCase().trim();
        cmdItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(q)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Keyboard shortcut (Ctrl+K or Cmd+K)
    window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (cmdModal.classList.contains("hidden")) {
                openPalette();
            } else {
                closePalette();
            }
        } else if (e.key === "Escape" && !cmdModal.classList.contains("hidden")) {
            closePalette();
        }
    });

    if (cmdTrigger) {
        cmdTrigger.addEventListener("click", openPalette);
    }

    cmdInput.addEventListener("input", (e) => {
        filterPaletteItems(e.target.value);
    });

    // Handle clicks inside command palette
    cmdItems.forEach(item => {
        item.addEventListener("click", () => {
            const action = item.getAttribute("data-action");
            closePalette();

            if (action.startsWith("#")) {
                const target = document.querySelector(action);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            } else if (action === "copy-email") {
                copyEmail();
            } else if (action === "download-cv") {
                showToast("Memulai download CV / Resume...");
            }
        });
    });

    // Close on backdrop click
    cmdModal.addEventListener("click", (e) => {
        if (e.target === cmdModal) {
            closePalette();
        }
    });
}

/* ==========================================================
   CONTACT ACTIONS & TOAST
========================================================== */
function initContactActions() {
    const copyEmailBtns = document.querySelectorAll(".btn-copy-email");
    copyEmailBtns.forEach(btn => {
        btn.addEventListener("click", copyEmail);
    });

    const copyDiscordBtns = document.querySelectorAll(".btn-copy-discord");
    copyDiscordBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            navigator.clipboard.writeText(PORTFOLIO_DATA.profile.discord).then(() => {
                showToast(`Discord ID (${PORTFOLIO_DATA.profile.discord}) tersalin!`);
            });
        });
    });

    // WhatsApp Link Card
    const waLinkCard = document.getElementById("link-whatsapp-card");
    if (waLinkCard && PORTFOLIO_DATA.profile.whatsapp) {
        waLinkCard.href = `https://wa.me/${PORTFOLIO_DATA.profile.whatsapp}?text=${encodeURIComponent("Halo Ricki, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek.")}`;
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("contact-name") ? document.getElementById("contact-name").value.trim() : "";
            const email = document.getElementById("contact-email") ? document.getElementById("contact-email").value.trim() : "";
            const subject = document.getElementById("contact-subject") ? document.getElementById("contact-subject").value.trim() : "";
            const message = document.getElementById("contact-message") ? document.getElementById("contact-message").value.trim() : "";

            const whatsappNumber = PORTFOLIO_DATA.profile.whatsapp || "6281234567890";

            // Format WhatsApp text
            const textWa = `Halo Ricki, saya ingin menghubungi Anda melalui portofolio:\n\n` +
                           `👤 *Nama:* ${name}\n` +
                           `📧 *Email:* ${email}\n` +
                           `📌 *Subjek:* ${subject}\n\n` +
                           `💬 *Pesan:*\n${message}`;

            const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textWa)}`;

            showToast("Membuka WhatsApp untuk mengirim pesan... 🚀");

            setTimeout(() => {
                window.open(waUrl, "_blank");
                contactForm.reset();
            }, 600);
        });
    }
}

function copyEmail() {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        showToast("Email berhasil disalin ke clipboard! 📋");
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove("translate-y-24", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toast.classList.remove("translate-y-0", "opacity-100");
        toast.classList.add("translate-y-24", "opacity-0");
    }, 3200);
}

/* ==========================================================
   MOBILE NAVIGATION
========================================================== */
function initMobileNav() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    const navLinks = mobileMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}

/* Helper */
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* ==========================================================
   LIVE GITHUB REAL-TIME API FETCH
========================================================== */
function fetchGitHubLiveStats() {
    const repoCountEl = document.getElementById("github-repo-count");
    const followersEl = document.getElementById("github-followers");
    const username = PORTFOLIO_DATA.profile.githubUsername || "rickigilang3-droid";

    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("GitHub API rate limit or network issue");
        })
        .then(data => {
            if (repoCountEl && data.public_repos !== undefined) {
                repoCountEl.textContent = `${data.public_repos}`;
            }
            if (followersEl && data.followers !== undefined) {
                followersEl.textContent = `${data.followers}`;
            }
        })
        .catch(() => {
            // Fallback graceful
            if (repoCountEl) repoCountEl.textContent = "5+";
            if (followersEl) followersEl.textContent = "Active";
        });
}

/* ==========================================================
   13. TECH CONSTELLATION CANVAS ANIMATION
========================================================== */
function initTechCanvas() {
    const canvas = document.getElementById("tech-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor((width * height) / 28000), 55);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 1.6 + 0.8,
            color: Math.random() > 0.4 ? "rgba(6, 182, 212, " : "rgba(139, 92, 246, "
        });
    }

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function render() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 115) {
                    const alpha = (1 - dist / 115) * 0.18;
                    ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            // Gentle push from mouse
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 100) {
                const force = (1 - mdist / 100) * 0.5;
                p.x += (mdx / mdist) * force;
                p.y += (mdy / mdist) * force;
            }

            ctx.fillStyle = p.color + "0.6)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(render);
    }

    render();
}

/* ==========================================================
   14. SCROLL INTERACTIONS (PROGRESS & BACK TO TOP)
========================================================== */
function initScrollInteractions() {
    const progressBar = document.getElementById("scroll-progress");
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }

        if (backToTop) {
            if (scrollTop > 380) {
                backToTop.classList.remove("hidden");
            } else {
                backToTop.classList.add("hidden");
            }
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/* ==========================================================
   15. LIVE WIB CLOCK WIDGET
========================================================== */
function initLiveClock() {
    const clockEl = document.getElementById("live-wib-clock");
    if (!clockEl) return;

    function update() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("id-ID", {
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
        clockEl.textContent = `${timeStr} WIB`;
    }

    update();
    setInterval(update, 1000);
}

