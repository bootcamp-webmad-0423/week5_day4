function initMap() {
    renderMap()
    getRouteDetails()
}

let myMap, ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }



function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 7, center: ironhackCoords, styles: mapStyles.retro }
    )
}

function getRouteDetails() {

    const routeDetails = {
        origin: 'Fuenlabrada',
        destination: 'Gijón',
        travelMode: 'DRIVING'
    }

    const service = new google.maps.DirectionsService()

    service.route(
        routeDetails,
        routeResult => {
            printDetails(routeResult)
            renderRoute(routeResult)
        }
    )
}


function printDetails({ routes }) {

    const currentRoute = routes[0].legs[0]
    const { distance, duration, steps } = currentRoute

    let code = `<h2>Ruta de ${distance.text} y ${duration.text}</h2><hr>`

    steps.forEach(({ instructions, duration }) => code += `<p>${instructions} (${duration.text})</p>`)

    document.querySelector('#routeDetails').innerHTML += code
}


function renderRoute(routeDetails) {

    const renderer = new google.maps.DirectionsRenderer()

    renderer.setDirections(routeDetails)
    renderer.setMap(myMap)
}