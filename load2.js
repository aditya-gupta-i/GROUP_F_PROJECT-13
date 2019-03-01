var locations = [
    {lat: 22.529834,lng: 75.923720},
    {lat: 22.750870,lng: 75.895474},
    {lat: 22.740870,lng: 75.885474},
    {lat: 22.740870,lng: 75.905474},
    {lat: 22.760870,lng: 75.885474},
    {lat: 22.713527,lng: 75.855961},
    {lat: 22.760870,lng: 75.905474}
    ];

function initMap() {
    var map=new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 22.713527, lng: 75.855961}
    });

    var markers=locations.map(function(location, i){
        return new google.maps.Marker({
            position : location,
        });
    });

    var markerCluster=new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}