let ironhackCoords = { lat: 41.398025675206, lng: 2.190051435895103 }
let myMap

function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: ironhackCoords
        }
    )
}


// geolocation
navigator.geolocation.getCurrentPosition(
    position => centerMap(position),
    error => console.log('HA HABIDO UN ERROR', error)
)


function centerMap({ coords }) {

    const { latitude: lat, longitude: lng } = coords

    myMap.setCenter({ lat, lng })

    new google.maps.Marker({
        map: myMap,
        position: { lat, lng }
    })
}