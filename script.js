document.addEventListener('DOMContentLoaded', () => {
    const donateBtn = document.getElementById('donateBtn');
    const qrContainer = document.getElementById('qrContainer');

    donateBtn.addEventListener('click', () => {
        qrContainer.classList.toggle('show');
        
        // Cập nhật icon của nút
        const icon = donateBtn.querySelector('i');
        if (qrContainer.classList.contains('show')) {
            icon.classList.remove('ph-coffee');
            icon.classList.add('ph-caret-up');
        } else {
            icon.classList.remove('ph-caret-up');
            icon.classList.add('ph-coffee');
        }
    });
});
