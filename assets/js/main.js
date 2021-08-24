// When loads page wait for marker found for trigger the experience
window.addEventListener('load', () => {
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;
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
        firstModal.style.display = "block";
        let cameraPosition = camera.object3D.position;
        let markerPosition = marker.object3D.position;
        let distance = cameraPosition.distanceTo(markerPosition)

        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            markerPosition = marker.object3D.position;
            distance = cameraPosition.distanceTo(markerPosition)

            // do what you want with the distance:
            console.log('found', distance);
        }, 100);

    
    });

    marker.addEventListener('markerLost', () => {
        console.log('lost')
    })
})