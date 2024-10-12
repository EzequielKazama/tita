document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flower-container');
    
    // Generar flores dinámicamente
    for (let i = 0; i < 8; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Crear pétalos
        const petal1 = document.createElement('div');
        petal1.classList.add('petal', 'petal-1');
        
        const petal2 = document.createElement('div');
        petal2.classList.add('petal', 'petal-2');
        
        const petal3 = document.createElement('div');
        petal3.classList.add('petal', 'petal-3');
        
        const petal4 = document.createElement('div');
        petal4.classList.add('petal', 'petal-4');

        // Crear el centro
        const center = document.createElement('div');
        center.classList.add('center');

        // Añadir los pétalos y el centro a la flor
        flower.appendChild(petal1);
        flower.appendChild(petal2);
        flower.appendChild(petal3);
        flower.appendChild(petal4);
        flower.appendChild(center);

        flowerContainer.appendChild(flower);
    }
});
