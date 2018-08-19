

$(window).resize(function() {
  sizeLayerControl();
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


var density =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:density',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'0.7'
});

var seaweed =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:seaweed',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var si_eez =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_eez',
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

var si_province_boundary =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_province_boundary',
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

var reef =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:reef',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var mangrove =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:mangrove',
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

var kba =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:kba',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sumain =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sumain',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sumaoff =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sumaoff',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sireefbioregions =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sireefbioregions',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sideepbio =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sideepbio',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var solomonisland_decade_of_tuna =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:solomonisland_decade_of_tuna',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var solomonisland_decade_of_deep =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:solomonisland_decade_of_deep',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var vanuatuaquaculture =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:vanuatuaquaculture',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var si_tourism_final =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_tourism_final',
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

var dive_sites_2 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:dive_sites_2',
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

var jeties_marinas_wharfs_port_of_call_and_common_yacht_anchorages =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:jeties_marinas_wharfs_port_of_call_and_common_yacht_anchorages',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var liveaboard_taka =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:liveaboard_taka',
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

var si_tenements =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_tenements',
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


var imo =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:imo',
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


var vanuatu_decade_of_tuna =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:vanuatu_decade_of_tuna',
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

var solomonvessels =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:solomonvessels',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var si_suma_v7inshore =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_suma_v7inshore',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var si_suma_v7offshore =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:si_suma_v7offshore',
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

var infoLayer = L.geoJson(null);

var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.4,
  radius: 10
};



//add the map control and center it

map = L.map('map', {
  zoom: 6,
  center: [-9,163],
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
  div.innerHTML = "<span class='hidden-xs'><a href='http://macbio-pacific.info/' target='blank'>MACBIO</a>   | </span><span class='hidden-xs'><a href='http://www.grida.no/' target='blank'>GRID-Arendal</a>   | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
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
                  "Exclusive Economic Zone" : si_eez,  
                  "Divisional Lines" : si_province_boundary,
                  "Populated Places" : populated_places,
                  "Hillshade" : hill
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
                  "Currents" : currents,
                  "Salinity" : salinity,
                  "Chlorophyll-a Concentration" : chl,
                  "Photosynthetically Available Radiation" : parf,
                  "Reefs" : reef,
                  "Mangroves" : mangrove,
                  "Pelagic Marine Species Richness <br> (number of species)" : pelagic,
                  "Benthic Marine Species Richness <br> (number of species)" : benthic,
                  "Coldwater Habitat Suitability" : coldwater,
                  "Key Bird and Biodiversity Areas" : kba,
                  "Ecologically and Biologically Significant Areas" : ebsaregions_20150521,
                  "Special and/or Unique Marine Areas(SUMA) Offshore" : si_suma_v7offshore,
                  "Special and/or Unique Marine Areas(SUMA) Inshore" : si_suma_v7inshore,
                  "Deepwater Bioregions" : sideepbio,
                  "Reef Associated Bioregions" : sireefbioregions
                  
                                  }
                              },   
                  {
                groupName : "Planning",
                expanded : false,
                layers    : {               
                  "Tuna Catch (2001 - 2010) <br> (metric tonnes)" : solomonisland_decade_of_tuna,
                  "Deep Water Fisheries Catch <br> (2001 - 2010) (metric tonnes)" : solomonisland_decade_of_deep,
                  "Aquaculture Sites, Seaweed Farms" : seaweed,
                  "Population Density" : density,
                  "Hotels with marine activities" : si_tourism_final,
                  "Dive Sites" : dive_sites_2,
                  "Passenger Vessel (over 200ft long) " : passengervessel,
                  "Airports" : airport,
                  "Points of Interest" : jeties_marinas_wharfs_port_of_call_and_common_yacht_anchorages,
                  "Live-Aboard Areas" : liveaboard_taka,
                  "Deep Sea Mineral Exploration" : si_tenements,
                  "Submarine Cables" : cables_360,
                  "Ports" : ports,
                  "Vessels traffic" : solomonvessels,
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
                  "IMO MARPOL 73/78" : imo
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









/* Load the content before map load */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  legendDicnary();
  sizeLayerControl();
  /* Fit map to vanlong bounds */
  map.fitBounds(extent_layer.getBounds());
 // map.zoomIn(0.4);

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
