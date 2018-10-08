
var layList = "proclamation_1887_boundary,density,coldwater,basins,salinity,seamount,canyons,abyssal,escarpments,guyots,seamounts,rift_valleys,troughs,ridges,spreading_ridges,trenches,plateaus,shelf,slope,volcanoes,earthquakes,hydrothermal,reefs,mangroves,pelagic,benthic,ebsaregions_20150521,kbas_new,sumain_1,sumaoff_1,deepwater_1,reefbio,tonga_decade_of_tuna,hotels,fad_tonga,divesites_tonga,passengervessel,airport,anchorages,marinas_and_wharfs,live_aboard_and_whale_watching,cables_360,deepseaminingtenements2015,ports,imo_1,cyclones,deepwatercatch,sst,chl,parf,oceandepth,phosphate,nitrate,calcite,ph,tongavessel";
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
maxZoom: 16,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
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


var grid_1km = L.tileLayer.wms(baseURL, {
  layers: 'geonode:grid_1km',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '0.7',

});

var proclamation_1887_boundary =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:proclamation_1887_boundary',
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

var reefs =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:reefs',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var mangroves =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:mangroves',
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

var kbas_new =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:kbas_new',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sumain_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sumain_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var sumaoff_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:sumaoff_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var reefbio =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:reefbio',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var deepwater_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:deepwater_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var tonga_decade_of_tuna =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:tonga_decade_of_tuna',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var deepwatercatch =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:deepwatercatch',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var fad_tonga =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:fad_tonga',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


var hotels =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:hotels',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var ports_of_call =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:ports_of_call',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var divesites_tonga =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:divesites_tonga',
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

var marinas_and_wharfs =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:marinas_and_wharfs',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var anchorages =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:anchorages',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

var live_aboard_and_whale_watching =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:live_aboard_and_whale_watching',
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

var deepseaminingtenements2015 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:deepseaminingtenements2015',
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


var imo_1 =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:imo_1',
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

var tongavessel =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:tongavessel',
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
  center: [-19,185],
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
                  "1887 Proclamation boundary" : proclamation_1887_boundary,
                 // "Populated Places" : populated_places,
                 // "Hillshade" : hill
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
                 // "Currents" : currents,
                  "Salinity" : salinity,
                  "Chlorophyll-a Concentration" : chl,
                  "Photosynthetically Available Radiation" : parf,
                  "Reefs" : reefs,
                  "Mangroves" : mangroves,
                  "Pelagic Marine Species Richness <br> (number of species)" : pelagic,
                  "Benthic Marine Species Richness <br> (number of species)" : benthic,
                  "Coldwater Habitat Suitability" : coldwater,
                  "Key Bird and Biodiversity Areas" : kbas_new,
                  "Ecologically and Biologically Significant Areas" : ebsaregions_20150521,
                  "Special and/or Unique Marine Areas(SUMA) Offshore" : sumaoff_1,
                  "Special and/or Unique Marine Areas(SUMA) Inshore" : sumain_1,
                  "Deepwater Bioregions" : deepwater_1,
                  "Reef Associated Bioregions" : reefbio
                  
                                  }
                              },   
                  {
                groupName : "Planning",
                expanded : false,
                layers    : {               
                  "Tuna Catch (2001 - 2010) <br> (metric tonnes)" : tonga_decade_of_tuna,
                  "Deep Water Fisheries Catch <br> (2001 - 2010) (metric tonnes)" : deepwatercatch,
                  "Fish Aggregating Devices" : fad_tonga,
                  "Population Density" : density,
                  "Hotels with marine activities" : hotels,
                  "Dive Sites" : divesites_tonga,
                  "Passenger Vessel (over 200ft long) " : passengervessel,
                  "Airports" : airport,
                  "Anchorages" : anchorages,
                  "Marinas_and_Wharfs" : marinas_and_wharfs,
                  "Live-Aboard Areas" : live_aboard_and_whale_watching,
                  "Deep Sea Mineral Exploration" : deepseaminingtenements2015,
                  "Submarine Cables" : cables_360,
                  "Ports" : ports,
                  "Vessels traffic" : tongavessel,
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
                  "IMO MARPOL 73/78" : imo_1
                                  } 
                             }       

      ];

      function load_about() {
        $("#aboutModal").modal("show");
        $('.nav-tabs li:eq(0) a').tab('show');
        return false;
      }


/* Add legend */
  var options = {
        container_width   : "250px",
        group_maxHeight     : "300px",
        container_maxHeight : "450", 
        exclusive         : false,
        collapsed :false
      };

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);



//retrive on click info
/* Clear feature highlight when map is clicked */
map.on("click", function(e) {
  highlight.clearLayers();
  
   
   //add grid_1km layer 
   if (map.hasLayer(grid_1km)) {
    $("#loading").show();
    var url = getFeatureInfoUrl(map, grid_1km, e.latlng, {
      'info_format': 'application/json',
      
    });
  // Write ajex query to retrive data from wms layer
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',

      success: function(data) {
      
        if(data.features.length > 0)
      {

        var content = "<table class='table table-striped table-bordered table-condensed'>";
        content = content + "<tr><td><b>Major Grid ID:</b></td>"
    content = content + "<td>"+data.features[0].properties.grid_1kmsq+"</td></tr>"
    content = content + "<table>";
    
        L.popup({ maxWidth: 800}).setLatLng(e.latlng).setContent(content).openOn(map);
        var polygon = L.multiPolygon(data.features[0].geometry.coordinates.map(function(d) {  return mapPolygon(d); }));
        highlight.clearLayers().addLayer(L.multiPolygon(polygon.getLatLngs(), polyhighlightStyle));
        $("#loading").hide();
     
}
else
{
$("#loading").hide();
}
 }, error: function(xhr, status, error) {
        console.log(error);
        $("#loading").hide();
      }
    });
  }
  
  
});





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
proclamation_1887_boundary.setZIndex(41);
oceandepth.setZIndex(12);
basins.setZIndex(22);
canyons.setZIndex(23);
escarpments.setZIndex(24);
guyots.setZIndex(25);
seamounts.setZIndex(26);
rift_valleys.setZIndex(27);
troughs.setZIndex(28);
ridges.setZIndex(29);
spreading_ridges.setZIndex(30);
trenches.setZIndex(31);
plateaus.setZIndex(32);
shelf.setZIndex(33);
slope.setZIndex(34);
abyssal.setZIndex(13);
seamount.setZIndex(14);
volcanoes.setZIndex(35);
earthquakes.setZIndex(42);
hydrothermal.setZIndex(43);
currents.setZIndex(44);
salinity.setZIndex(3);
chl.setZIndex(4);
parf.setZIndex(5);
reefs.setZIndex(45);
mangroves.setZIndex(46);
pelagic.setZIndex(15);
benthic.setZIndex(16);
coldwater.setZIndex(17);
kbas_new.setZIndex();
ebsaregions_20150521.setZIndex();
sumaoff_1.setZIndex();
sumain_1.setZIndex();
deepwater_1.setZIndex();
reefbio.setZIndex(18);
tonga_decade_of_tuna.setZIndex(19);
deepwatercatch.setZIndex(20);
fad_tonga.setZIndex(47);
density.setZIndex(6);
hotels.setZIndex(48);
divesites_tonga.setZIndex(49);
passengervessel.setZIndex(40);
airport.setZIndex(50);
anchorages.setZIndex(51);
marinas_and_wharfs.setZIndex(52);
live_aboard_and_whale_watching.setZIndex(37);
deepseaminingtenements2015.setZIndex(36);
cables_360.setZIndex(39);
ports.setZIndex(53);
tongavessel.setZIndex(38);
phosphate.setZIndex(7);
nitrate.setZIndex(8);
sst.setZIndex(9);
ph.setZIndex(10);
calcite.setZIndex(11);
cyclones.setZIndex(37);
imo_1.setZIndex(21);

  //Set the defult layer
  map.addLayer(proclamation_1887_boundary);


}