window.onload = () => {
//    var error = function(err){alert(JSON.stringify(err)};
    //var success = function(data){alert(JSON.stringify(data)};
    //navigator.geolocation.getCurrentPosition(success, error);

    
    setTimeout(() => {
        // first get current user location
        // return navigator.geolocation.getCurrentPosition(function (position) );

        let places = staticLoadPlaces();
        return renderPlaces(places);        
    }, 3000)
};

function staticLoadPlaces() {
    return [
        {
            name: 'Ballzzy',
            location: {
                lat: 41.892218, 
                lng: -87.686639, 
            },
        },
        {
            name: 'jumpy',
            location: {
                lat: 41.892091,
                lng: -87.687988,
            },
        },
        {
            name: 'jumpy',
            location: {
                lat: 41.892078, 
                lng: -87.688511,
            },
        },
        {
            name: 'jumpy',
            location: {
                lat: 41.892086, 
                lng: -87.689165,
            },
        },
        {
            name: 'jumpy',
            location: {
                lat: 41.892185, 
                lng: -87.690269,
            },
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

    (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
}

// function saveDataToFile(places) {

//   var blob = new Blob([JSON.stringify(places)],
//   { type: "text/plain;charset=utf-8" });
//   var link=window.URL.createObjectURL(blob);
//   window.open(link, '_blank')
// }