//YelpOAuth class
var YelpOAuth = function(){
  this.auth = {
              consumerKey: "nsJaztWB593lsptA2C61gw",
              consumerSecret: "MDea2Xt-0joFt22F8DYqCo2pgcY",
              accessToken: "dCFwVSf6hSapbCrAf7Uyd9qsSsGWLvuc",
              accessTokenSecret: "Z5KK2Wq_89AUoKMr6Uc6kxDzDbc",
              serviceProvider: {
                  signatureMethod: "HMAC-SHA1"
                }
              };
  this.accesor = {
              consumerSecret: this.auth.consumerSecret,
              tokenSecret: this.auth.accessTokenSecret
              };
  this.parameters = [
                      //parameter for search
                      //parameters.push(['term', terms]);
                      //parameters.push(['location', near]);
                      ['callback', 'cb'],
                      ['oauth_consumer_key', this.auth.consumerKey],
                      ['oauth_consumer_secret', this.auth.consumerSecret],
                      ['oauth_token', this.auth.accessToken],
                      ['oauth_signature_method', 'HMAC-SHA1']
                    ];
};



YelpOAuth.prototype.getYelpBusinessInfo = function(businessId) {
    var businessUrl = 'http://api.yelp.com/v2/business/' + businessId;
    var message = {
                    'action': businessUrl,
                    'method': 'GET',
                    'parameters': this.parameters
                  }
    var _accesor = this.accesor;
  OAuth.setTimestampAndNonce(message);
  OAuth.SignatureMethod.sign(message, _accesor);
  var parameterMap = OAuth.getParameterMap(message.parameters);
  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);
  $.ajax({
    'url': message.action,
    'data': parameterMap,
    'cache': true,
    'dataType': 'jsonp',
    //'jsonpCallback': 'cb',
    'success': function(data, textStats, XMLHttpRequest) {
      console.log(data.name);
      //console.log(textStats);
    //console.log(data);
    //$("body").append(data);
    },
    'error': function(XMLHttpRequest, textStats, errorThrown){
      console.log(errorThrown);
    }
  });
}


var businessId = 'cava-mezze-grill-mclean';
var yelpOAuth = new YelpOAuth();
yelpOAuth.getYelpBusinessInfo(businessId);

var businessId = 'maple-ave-restaurant-vienna'
yelpOAuth.getYelpBusinessInfo(businessId);

var businessId = 'nielsens-frozen-custard-vienna'
yelpOAuth.getYelpBusinessInfo(businessId);

var businessId = 'asia-taste-rockville-3'
yelpOAuth.getYelpBusinessInfo(businessId);

var businessId = 'nielsens-frozen-custard-vienna'
yelpOAuth.getYelpBusinessInfo(businessId);




// global map variable
var map;

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);

// location input
var locationData = [
        {
            title: "Home",
            position: {lat: 38.9276490, lng: -77.2380320},
            matchingIndex: 0,
            yelpId: "cava-mezze-grill-mclean"
        },
        {
            title: "Maple Ave Restaurant",
            position: {lat: 38.900498, lng: -77.266858},
            matchingIndex: 0,
            yelpId: "cava-mezze-grill-mclean"
        },
        {
            title: "Cava Mezze Grill",
            position: {lat: 38.933868, lng: -77.17726},
            matchingIndex: 0,
            yelpId: "cava-mezze-grill-mclean"
        },
        {
            title: "Nielsens Frozen Custard",
            position: {lat: 38.900899, lng: -77.267318},
            matchingIndex: 0,
            yelpId: "cava-mezze-grill-mclean"
        },
        {
            title: "Asia Taste",
            position: {lat: 39.105290, lng: -77.157558},
            matchingIndex: 0,
            yelpId: "cava-mezze-grill-mclean"
        }
];

var Location = function(data){
    this.title = data.title;
    this.position = data.position;
    this.matchingIndex = data.matchingIndex;
    this.visibility = true;
    //var yelpOAuth = new YelpOAuth();
    //yelpOAuth.getYelpBusinessInfo(data.yelpId);
    //yelpOAuth.getYelpBusinessInfo(data.yelpId);
}

var locationArray = [];
for (var i = 0; i < locationData.length; i ++){
    locationArray.push(new Location(locationData[i]));

}




var ViewModel = function(){
    // assign model itself to this variable
    var self = this;

    self.searchBarText = ko.observable("");

    //self.places = ko.observableArray(locationArray);
    self.places = ko.mapping.fromJS(locationArray);


    for (var i = 0; i < self.places().length; i++) {
        //self.places()[i].visibility = ko.observable(true);
        //self.places()[i].visibility = ko.observable(self.places()[i].matchingIndex);
        console.log(self.places()[i].visibility);
    }


    self.searchBarText.subscribe(function(newValue) {
        self.match();

    });

    self.match = function() {
        //console.log(element);

        var text = self.searchBarText().toLowerCase();
        ko.utils.arrayForEach(self.places(), function(place, index) {
            console.log(locationArray[index].marker.visible);
            if (place.title().toLowerCase().search(text) < 0) {
                place.visibility(false);
                locationArray[index].marker.setVisible(false);
                locationArray[index].infowindow.close();
            }
            else {
                place.visibility(true);
                locationArray[index].marker.setVisible(true);
            }
        });
    }
}

ko.applyBindings(new ViewModel());



function initialize() {

    var mapOptions = {
          center: locationArray[0].position,
          zoom: 13
        };

    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


    var latlngbounds = new google.maps.LatLngBounds();
    var numOfLocation = locationArray.length;


    for(var i = 0; i < numOfLocation; i++){

        /*
        var marker = new google.maps.Marker({
            map: map,
            position: locationArray[i].position,
            clickable: true
        });
        */
        createMarker(locationArray[i]);

        var LatLngPoint = new google.maps.LatLng(locationArray[i].position.lat,
            locationArray[i].position.lng);
        latlngbounds.extend(LatLngPoint);
    }
    map.fitBounds(latlngbounds);
}

function createMarker(location) {
    var contentString = location.name;

    var marker = new google.maps.Marker({
        position: location.position,
        map: map
        //zIndex: Math.round(latlng.lat()*-100000)<<5
        });


   var infowindow = new google.maps.InfoWindow(
    {
      content: contentString,
      position: location.position
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    location.marker = marker;
    location.infowindow = infowindow;
}

/*
function createMarker(latlng, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        //zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map,marker);
        });
}
*/

/*
function filter(element){
    var value = $(element).val().toLowerCase();
    $("#places > li").each(function(){
        var locationIndex = $("li").index($(this));
        var marker = locationArray[locationIndex].marker;
        if ($(this).text().toLowerCase().search(value) > -1) {
            $(this).show();
            marker.setVisible(true);

        }
        else{
            $(this).hide();
            marker.setVisible(false);
        }
    });
}
*/



