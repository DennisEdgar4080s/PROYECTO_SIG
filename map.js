var map = L.map('map', {
    zoomControl: false
}).setView([-16.500000, -68.119300], 13); 

L.control.zoom({
    position: 'topright'
}).addTo(map);

function mapChange(link, attribution) {
    document.getElementById('copyright').innerHTML = `
    Maps by: ${attribution}
    `
    L.tileLayer(link, {
    }).addTo(map);
}

var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [30, 30],
        shadowSize: [50, 64],
        iconAnchor: [15, 30],
        shadowAnchor: [4, 62],
        popupAnchor: [0, -35]
    }
});
var defaultIcon = new LeafIcon({
    iconUrl: './img/marker.svg',
   
})

var orangeIcon = new LeafIcon({
    iconUrl: './img/marker2.svg',
    
})