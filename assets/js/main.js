// When loads page wait for marker found for trigger the experience
let alreadyFoundMarker = false;
window.addEventListener('load', () => {
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    const firstModal = document.getElementById("firstModal");
    const firstBtn = document.getElementById("firstBtn");
    firstBtn.onclick = function() {
        firstModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == firstModal) {
            firstModal.style.display = "none";
        }
    }
    marker.addEventListener('markerFound', () => {
        if (!alreadyFoundMarker) {
            alreadyFoundMarker = true
            firstModal.style.display = "block"
        }
    });
})