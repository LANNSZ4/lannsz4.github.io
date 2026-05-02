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

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterCards('hsr');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        filterCards(filterValue);
    });
});

function filterCards(filter) {
    cards.forEach(card => {
        if (card.getAttribute('data-category') === filter) {
            
            card.classList.remove('d-none'); 
            
            setTimeout(() => {
                card.classList.remove('hide-anim');
            }, 20); 

        } else {
                card.classList.add('hide-anim'); 
            
            
            setTimeout(() => {
    if (card.classList.contains('hiding')) {
        card.classList.remove('active');
        card.classList.remove('hiding');
    }
}, 400); // Angka 400 ini harus sama dengan 0.4s di CSS
        }
    });
}
