window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Ballzzy',
            location: {
                lat: 41.892218, 
                lng: -87.686639, 
            }
        },
    ];
}

function renderPlaces(places) {
    console.log("places:");
    console.log(places); //prints current coordinates around us

    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './models/species_01.glb');
        model.setAttribute('position', '0 1 -5');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.35 0.35 0.35');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}