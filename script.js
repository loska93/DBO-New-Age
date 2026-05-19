document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');
    const sections = document.querySelectorAll('.system-content');
    const gridMenu = document.getElementById('grid-menu');
    const backBtn = document.getElementById('back-btn');

    // Obsługa kliknięcia w kafelek
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const targetId = tile.getAttribute('data-target');
            
            // Ukryj siatkę kafelków
            gridMenu.classList.add('hidden');
            
            // Pokaż przycisk powrotu
            backBtn.classList.remove('hidden');
            
            // Ukryj na wszelki wypadek wszystkie sekcje, zanim pokażesz wybraną
            sections.forEach(section => section.classList.add('hidden'));
            
            // Pokaż wybraną sekcję z opisem
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                // Przewiń stronę na górę, żeby gracz widział początek opisu
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Obsługa kliknięcia w przycisk powrotu
    backBtn.addEventListener('click', () => {
        // Ukryj wszystkie sekcje z opisami
        sections.forEach(section => section.classList.add('hidden'));
        
        // Ukryj przycisk powrotu
        backBtn.classList.add('hidden');
        
        // Pokaż z powrotem menu z kafelkami
        gridMenu.classList.remove('hidden');
    });
});
