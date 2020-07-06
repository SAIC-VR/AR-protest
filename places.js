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
                lat: 41.342057,
                lng: -87.666416,
            }
        },
    ];
}

function renderPlaces(places) {
    const scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const m_name = place.name;
        const latitude = place.location.lat;
        const longitude = place.location.lng;
        
        // add place sign
        const sign = document.createElement('a-text');
        sign.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        sign.setAttribute('title', 'm_name');
        //sign.setAttribute('href', 'http://www.example.com/');
        //sign.setAttribute('src', '../assets/map-marker.png'); // create a variable tto point to that sign
        console.log("latitute: " + latitude);


        sign.setAttribute('scale', '10 10 10');

        sign.setAttribute('look-at', '[gps-camera]');


        sign.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(sign);
    });
}

function protestPlaces(places) {

}