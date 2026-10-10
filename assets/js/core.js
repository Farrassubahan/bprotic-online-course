document.addEventListener("DOMContentLoaded", () => {
    const weekSelector = document.getElementById("weekSelector");
    
    // Initial Render untuk Pertemuan 1
    renderContent("1");

    weekSelector.addEventListener("change", (e) => {
        const val = e.target.value;
        
        // Cek apakah data modul tersedia
        if (courseData[val]) {
            renderContent(val);
        } else {
            // Popup animasi untuk pertemuan yang belum tersedia
            Swal.fire({
                icon: 'info',
                title: 'Segera Hadir!',
                html: `Materi untuk <b>Pertemuan ${val}</b> sedang dalam proses penyusunan.<br>Stay tuned!`,
                confirmButtonText: 'Oke, Saya Tunggu',
                confirmButtonColor: '#38bdf8',
                background: '#1e293b',
                color: '#f8fafc',
                showClass: {
                    popup: 'animate__animated animate__zoomIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__zoomOut'
                }
            });
            // Kembalikan dropdown select ke pertemuan 1
            weekSelector.value = "1";
        }
    });
});

function renderContent(weekId) {
    const data = courseData[weekId];
    
    // Update Header
    document.getElementById("heroBadge").textContent = `Pertemuan ${weekId}`;
    document.getElementById("heroTitle").textContent = data.title;
    
    // Update Content dengan animasi fade
    const contentArea = document.getElementById("contentArea");
    contentArea.style.opacity = 0;
    
    setTimeout(() => {
        contentArea.innerHTML = data.content;
        
        // Trigger highlight.js untuk mewarnai syntax PHP
        document.querySelectorAll('pre code').forEach((block) => {
            // Hilangkan spasi berlebih (indentation) dari format dokumen JS
            let lines = block.innerHTML.split('\n');
            let minIndent = Infinity;
            lines.forEach(l => {
                if(l.trim().length > 0 && !l.trim().startsWith('&lt;?php')) {
                    let m = l.match(/^\s*/);
                    if(m) minIndent = Math.min(minIndent, m[0].length);
                }
            });
            if (minIndent !== Infinity && minIndent > 0) {
                block.innerHTML = lines.map(l => {
                    if(l.trim() === '&lt;?php' || l.trim() === '?&gt;') return l.trim();
                    return l.startsWith(' '.repeat(minIndent)) ? l.substring(minIndent) : l;
                }).join('\n');
            }
            
            hljs.highlightElement(block);
        });
        
        // Kembalikan opacity
        contentArea.style.opacity = 1;
        contentArea.style.transition = "opacity 0.4s ease-in-out";
    }, 200);
}
