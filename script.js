// Function to smoothly scroll to specific section

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function copyRekening() {
        // Ambil elemen input
        const rekeningInput = document.getElementById('rekening');
        
        // Pilih teks di dalam input
        rekeningInput.select();
        rekeningInput.setSelectionRange(0, 99999); // Untuk perangkat mobile

        // Salin teks ke clipboard
        document.execCommand('copy');

        // Opsional: Beri tahu pengguna bahwa teks telah disalin
        alert('Nomor rekening telah disalin: ' + rekeningInput.value);
    }


function scrollToSection(id) {
    const element = document.getElementById(id);
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}