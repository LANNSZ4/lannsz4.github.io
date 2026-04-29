const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    threshold: 0.1, // Cukup 20% bagian muncul, langsung ganti warna
    rootMargin: "-10% 0px -70% 0px" // Membantu deteksi saat scroll dari atas
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Hapus semua class active
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Ambil ID section yang sedang aktif
            const id = entry.target.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});