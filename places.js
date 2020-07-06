// 
// https://medium.com/swlh/build-your-location-based-augmented-reality-web-app-a841956eed2c

window.onload = () => {
    let places = staticLoadPlaces();
    return renderPlaces(places);
};

function staticLoadPlaces(){
    return [
        {
            name: "my place",
            location: {
                lat: 41.892057,
                lng: -87.687416,
            }
        },        
        {
            name: "new place",
            location: {
                lat: 41.892157,
                lng: -87.676416,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        
        let m_name = place.name;

        // add place sign
        let sign = document.createElement('a-text');
        
        sign.setAttribute('title', m_name);
        //sign.setAttribute('gps-entity-place', '{ latitude: ${latitude}; longitude: ${longitude};}`);
        //sign.setAttribute('gps-entity-place', { latitude, longitude });
        sign.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`)

        console.log("latitute: " + latitude);
        console.log("longitude: " + longitude);

        //sign.setAttribute('scale', '10 10 10');
        sign.setAttribute("scale", { x: 10, y: 10, z: 10 });
        sign.setAttribute('look-at', '[gps-camera]');

        sign.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(sign);
    });
}
