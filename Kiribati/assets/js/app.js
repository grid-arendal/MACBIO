
var layList = "krbeez,density,coldwater,basins,salinity,seamount,canyons,abyssal,escarpments,guyots,seamounts,rift_valleys,troughs,ridges,spreading_ridges,trenches,plateaus,shelf,slope,volcanoes,earthquakes,hydrothermal,reefs_1,pelagic,benthic,ebsaregions_20150521,kba_1,deepwater_2,reefbio_1,tunacatch,aquaculture,anchorages_1,passengervessel,airport,wharves,cruiseships,cables_360,ports,imo_2,cyclones,kiribati_deep_fisheries_360,sst,chl,parf,oceandepth,phosphate,nitrate,calcite,ph,kirvessel";
$(window).resize(function() {
  sizeLayerControl();
  setLayerTransparency();
});


$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $('.nav-tabs li:eq(0) a').tab('show');
  return false;
});


$("#download-btn").click(function() {
  $("#aboutModal").modal("show");
  $('.nav-tabs li:eq(1) a').tab('show')
  //$(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#metadata-btn").click(function() {
  $("#aboutModal").modal("show");
 // $(".navbar-collapse.in").collapse("hide");
 $('.nav-tabs li:eq(2) a').tab('show')
  return false;
});



$("#full-extent-btn").click(function() {
  map.fitBounds(extent_layer.getBounds());
  map.zoomIn(0.4);
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function() {

  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {

  return false;
});

$("#sidebar-hide-btn").click(function() {
  return false;
});


//controlling the legend size /popup
function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
 
  if (($("#navcol").is(":visible")))
  {
 
   map.removeControl(control);
   control.options.collapsed=false;
   map.addControl(control);
  }
  else
  {
    map.removeControl(control);
  control.options.collapsed=true;
    map.addControl(control);
  
  }
}


/* Basemap Layers */

var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
maxZoom: 10,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

  



//add json layer
var extent_layer = new L.geoJson(null, {
  style: function (feature) {
    return {
      color: '#00FF40',
      fill: true,
      opacity: 1,
      clickable: true,
      weight:3,
      dashArray:4,
    fillOpacity:0
      
    };
  },
 /*  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h6>Van Long Protected Area</h6>');
  } */
});
$.getJSON("data/extent_layer.geojson", function (data) {
  extent_layer.addData(data);
});





//add wms layer
//its a base url for geoserver
var baseURL = "http://82.116.78.168/geoserver/geonode/ows";


var krbeez =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:krbeez',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var density =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:density',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var archipelagicbaseline_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:archipelagicbaseline_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var basins =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:basins',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var mathunter_is =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:mathunter_is',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var province_lines =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:province_lines',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var populated_places =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:populated_places',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var canyons =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:canyons',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var abyssal =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:abyssal',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var escarpments =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:escarpments',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var guyots =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:guyots',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var seamounts =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:seamounts',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var rift_valleys =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:rift_valleys',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var troughs =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:troughs',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var ridges =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:ridges',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var spreading_ridges =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:spreading_ridges',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var trenches =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:trenches',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var plateaus =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:plateaus',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var shelf =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:shelf',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var slope =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:slope',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var volcanoes =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:volcanoes',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var earthquakes =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:earthquakes',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var hydrothermal =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:hydrothermal',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var currents =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:currents',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var reefs_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:reefs_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var pelagic =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:pelagic',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var benthic =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:benthic',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var ebsaregions_20150521 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:ebsaregions_20150521',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var kba_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:kba_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var deepwater_2 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:deepwater_2',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var reefbio_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:reefbio_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var tunacatch =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:tunacatch',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var aquaculture =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:aquaculture',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var anchorages_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:anchorages_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var combined_anchorages =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:combined_anchorages',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var cruiseships =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:cruiseships',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var passengervessel =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:passengervessel',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var airport =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:airport',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var wharves =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:wharves',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var areas =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:areas',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var cables_360 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:cables_360',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var dsm_tenement =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:dsm_tenement',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var ports =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:ports',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var imo_2 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:imo_2',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var cyclones =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:cyclones',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var kiribati_deep_fisheries_360 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:kiribati_deep_fisheries_360',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var sst =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sst',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var chl =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:chl',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var parf =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:parf',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var oceandepth =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:oceandepth',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'0.5'
});

var hill =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:hill',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var phosphate =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:phosphate',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var nitrate =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:nitrate',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var ph =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:ph',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var salinity =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:salinity',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var calcite =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:calcite',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var seamount =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:seamount',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});



var coldwater =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:coldwater',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var kirvessel =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:kirvessel',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


//polygon highlight
var polyhighlightStyle = {

  weight: 6,
  color: "#00FFFF",
  opacity: 1,
  dashArray: '2,2',
  lineJoin: 'round'
};

/* Overlay Layers */
var highlight = L.geoJson(null);

var infoLayer  = L.geoJson(null);


var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.4,
  radius: 10
};



//add the map control and center it

map = L.map('map', {
  zoom: 5,
  center: [-4,205],
  layers: [Esri_WorldImagery,highlight,infoLayer],
  zoomControl: false,
  attributionControl: false
});



/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}


var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  // div.innerHTML = "<span class='hidden-xs'>Developed by <a href='www.grida.no'>grida.no</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  div.innerHTML = "<span class='hidden-xs'><a href='http://macbio-pacific.info/' target='blank'>MACBIO</a>   | </span><span class='hidden-xs'><a href='http://www.grida.no/' target='blank'>GRID-Arendal</a>";
  return div;
};




map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

//add print option in map
// var printer = L.easyPrint({
//          sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
//          filename: 'myMap',
//          exportOnly: true,
//          hideControlContainer: true,
//      position:'bottomright',
//    }).addTo(map);



L.control.scale({maxWidth:200, position: 'bottomleft'}).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}


  var baseMaps = [      { 
                groupName : "Base Maps",
                expanded : false,
                layers    : {
                
                  "OpenStreetMap" : OpenStreetMap_BlackAndWhite,
                  "WorldImagery ESRI":Esri_WorldImagery
              
                  
                }
                  }             
      ];


  var overlays = [
                                                                      {
                groupName : "Base Layers",
                expanded : false,
                layers    : {          
                  "Exclusive Economic Zone" : krbeez,  
                  //"Populated Places" : populated_places,
                  //"Hillshade" : hill
                } 
                             },
                {
                groupName : "Valuing",
                expanded : false,
                layers    : {    
                  "Ocean Depth (m)" : oceandepth,        
                  "Basins" : basins,
                  "Canyons" : canyons,
                  "Escarpments" : escarpments,
                  "Guyots" : guyots,
                  "Seamounts" : seamounts,
                  "Rift Valleys" : rift_valleys,
                  "Troughs" : troughs,
                  "Ridges" : ridges,
                  "Spreading Ridges" : spreading_ridges,
                  "Trenches" : trenches,
                  "Plateaus" : plateaus,
                  "Shelf" : shelf,
                  "Slope" : slope,
                  "Abyssal" : abyssal,
                  "Seamount" : seamount,
                  "Inactive Volcanoes" : volcanoes,
                  "Earthquakes Centers 2000-2016<br>(magnitude)" : earthquakes,
                  "Hydrothermal" : hydrothermal,
                  //"Currents" : currents,
                  "Salinity" : salinity,
                  "Chlorophyll-a Concentration" : chl,
                  "Photosynthetically Available Radiation" : parf,
                  "Reefs" : reefs_1,
                  "Pelagic Marine Species Richness <br> (number of species)" : pelagic,
                  "Benthic Marine Species Richness <br> (number of species)" : benthic,
                  "Coldwater Habitat Suitability" : coldwater,
                  "Key Bird and Biodiversity Areas" : kba_1,
                  "Ecologically and Biologically Significant Areas" : ebsaregions_20150521,
                  "Deepwater Bioregions" : deepwater_2,
                  "Reef Associated Bioregions" : reefbio_1
                  
                                  }
                              },   
                  {
                groupName : "Planning",
                expanded : false,
                layers    : {               
                  "Tuna Catch (2001 - 2010) <br> (metric tonnes)" : tunacatch,
                  "Deep Water Fisheries Catch <br> (2001 - 2010) (metric tonnes)" : kiribati_deep_fisheries_360,
                  "Aquaculture Sites" : aquaculture,
                  "Population Density" : density,
                  "Anchorages" : anchorages_1,
                  "Passenger Vessel (over 200ft long) " : passengervessel,
                  "Airports" : airport,
                  "Wharves and jetties" : wharves,
                  "Cruiseships" : cruiseships,
                  "Submarine Cables" : cables_360,
                  "Ports" : ports,
                  "Vessels traffic" : kirvessel,
                  "Phosphate concentration" : phosphate,
                  "Nitrate concentration" : nitrate,
                  "Mean Sea Temperature" : sst,
                  "pH" : ph,
                  "Calcite Concentration" : calcite,
                  "Cyclones (1980 - 2016) <br> (knots)" : cyclones
                   } 
                             }, 
                    {
                groupName : "Management",
                expanded : false,
                layers    : {               
                  "IMO MARPOL 73/78" : imo_2
                                  } 
                             }       

      ];




/* Add legend */
  var options = {
        container_width   : "250px",
        group_maxHeight     : "300px",
        container_maxHeight : "450px", 
        exclusive         : false,
        collapsed :false
      };

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);




// open the about page onload
function load_about() {
  $("#aboutModal").modal("show");
  $('.nav-tabs li:eq(0) a').tab('show');
  return false;
}



/* Load the content before map load */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  load_about();
  legendDicnary();
  sizeLayerControl();
  /* Fit map to vanlong bounds */
  map.fitBounds(extent_layer.getBounds());
  setZindexMap();
 // map.zoomIn(0.4);

});

$(window).load(function(){
  //
  setLayerTransparency();
  
 });

// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}

function setLayerTransparency() {
  layList_obj = layList.split(",");
  layList_obj.forEach(function (val) {
    val = '#slider_' + val;
   $(val).on('change',function(ev){
    var valName = ev.target.name;
    var valSlider = parseFloat(ev.target.value);
     map.eachLayer(function(layer) {
     
     if(layer.options.layers == valName)
       {
         
         layer.setOpacity(1-(valSlider * 0.01));
        
       }     
 });
       
   });
    });
   gif_loadLay.remove() 
}

function setZindexMap() {
  OpenStreetMap_BlackAndWhite.setZIndex(1);
  Esri_WorldImagery.setZIndex(2);
  krbeez.setZIndex(26);
  oceandepth.setZIndex(16);
  basins.setZIndex(27);
  canyons.setZIndex(28);
  escarpments.setZIndex(29);
  guyots.setZIndex(30);
  seamounts.setZIndex(31);
  rift_valleys.setZIndex(32);
  troughs.setZIndex(33);
  ridges.setZIndex(34);
  spreading_ridges.setZIndex(35);
  trenches.setZIndex(36);
  plateaus.setZIndex(37);
  shelf.setZIndex(38);
  slope.setZIndex(39);
  abyssal.setZIndex(17);
  seamount.setZIndex(18);
  volcanoes.setZIndex(40);
  earthquakes.setZIndex(48);
  hydrothermal.setZIndex(49);
  currents.setZIndex(50);
  salinity.setZIndex(3);
  chl.setZIndex(4);
  parf.setZIndex(5);
  reefs_1.setZIndex(41);
  pelagic.setZIndex(19);
  benthic.setZIndex(20);
  coldwater.setZIndex(21);
  kba_1.setZIndex(42);
  ebsaregions_20150521.setZIndex(43);
  deepwater_2.setZIndex(44);
  reefbio_1.setZIndex(22);
  tunacatch.setZIndex(23);
  kiribati_deep_fisheries_360.setZIndex(24);
  aquaculture.setZIndex(51);
  density.setZIndex(7);
  anchorages_1.setZIndex(52);
  passengervessel.setZIndex(45);
  airport.setZIndex(53);
  wharves.setZIndex(54);
  cruiseships.setZIndex(55);
  cables_360.setZIndex(56);
  ports.setZIndex(57);
  kirvessel.setZIndex(46);
  phosphate.setZIndex(8);
  nitrate.setZIndex(9);
  sst.setZIndex(10);
  ph.setZIndex(11);
  calcite.setZIndex(12);
  cyclones.setZIndex(47);
  imo_2.setZIndex(25);
  

}