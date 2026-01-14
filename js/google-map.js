var google;

function init() {
    var myLatlng = new google.maps.LatLng(5.5992, -0.1758); // Airport City coordinates
    
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false,
        styles: [ /* your styles go here, keep as-is */ ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = ['Airport City, Accra, Ghana'];

    var geocoder = new google.maps.Geocoder();

    addresses.forEach(function(address) {
        geocoder.geocode({ address: address }, function(results, status) {
            if (status === 'OK' && results[0]) {
                var location = results[0].geometry.location;

                new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: 'images/loc.png', // make sure this path is correct
                    title: address
                });

                // Optional: center the map on the first address
                map.setCenter(location);
            } else {
                console.warn('Geocode failed for ' + address + ': ' + status);
            }
        });
    });
}

google.maps.event.addDomListener(window, 'load', init);
