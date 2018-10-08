//required layer list
var layList = "fiji_provisional_exclusive_economic_zone_boundary,density,fijivessels,coldwater,archipelagicbaseline,fishmarkets,fishaggr,basins,salinity,divisional_lines,seamount,canyons,abyssal,escarpments,guyots,seamounts,rift_valleys,troughs,ridges,spreading_ridges,trenches,plateaus,shelf,slope,volcanoes,earthquakes,hydrothermal,salinity_clip,fiji_reefs,fiji_mangrove,pelagic,benthic,ebsaregions_20150521,ibamap_12feb2016_selected,fiji_suma_inshore,fiji_suma_offshore,fijibioregionsprojected,reefbioregions,fiji_decade_of_tuna,marine_aquaculture_sites,freshwater_aquaculture_sites,hotels_with_marine_activities,dive_sites,passengervessel,airport,jetties_ports_marinas_anchorages_portofcall,live_aboard_areas,_2016_cruiseship_schedule_1,cables_360,deep_sea_mineral_exploration_wgs84,oil_exploration_licenses_and_applications_wgs84,ports,pollutionreef,pollutionwater,imomarpol,cyclones,fiji_decade_of_deepfish,sst,chl,parf,oceandepth,phosphate,nitrate,calcite,ph";

$(window).resize(function () {
  sizeLayerControl();
  setLayerTransparency();
});


$("#about-btn").click(function () {
  $("#aboutModal").modal("show");
  $('.nav-tabs li:eq(0) a').tab('show');
  return false;
});

$("#download-btn").click(function () {
  $("#aboutModal").modal("show");
  $('.nav-tabs li:eq(1) a').tab('show')
  //$(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#metadata-btn").click(function () {
  $("#aboutModal").modal("show");
  // $(".navbar-collapse.in").collapse("hide");
  $('.nav-tabs li:eq(2) a').tab('show')
  return false;
});

$("#full-extent-btn").click(function () {
  map.fitBounds(extent_layer.getBounds());
  map.zoomIn(0.4);
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

/* $("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
}); */



$("#login-btn").click(function () {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function () {

  return false;
});

$("#nav-btn").click(function () {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function () {

  return false;
});

$("#sidebar-hide-btn").click(function () {
  return false;
});


//controlling the legend size /popup
function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);

  if (($("#navcol").is(":visible"))) {

    map.removeControl(control);
    control.options.collapsed = false;
    map.addControl(control);
  }
  else {
    map.removeControl(control);
    control.options.collapsed = true;
    map.addControl(control);

  }
}


/* Basemap Layers */

var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  maxZoom: 16,
  layers: '',
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',


});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
  layers: '',
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',


});





//add json layer
var extent_layer = new L.geoJson(null, {
  style: function (feature) {
    return {
      color: '#00FF40',
      fill: true,
      opacity: 1,
      clickable: true,
      weight: 3,
      dashArray: 4,
      fillOpacity: 0,


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

var fiji_provisional_exclusive_economic_zone_boundary = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_provisional_exclusive_economic_zone_boundary',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var archipelagicbaseline = L.tileLayer.wms(baseURL, {
  layers: 'geonode:archipelagicbaseline',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var basins = L.tileLayer.wms(baseURL, {
  layers: 'geonode:basins',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',


});

var divisional_lines = L.tileLayer.wms(baseURL, {
  layers: 'geonode:divisional_lines',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var populated_places = L.tileLayer.wms(baseURL, {
  layers: 'geonode:populated_places',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var canyons = L.tileLayer.wms(baseURL, {
  layers: 'geonode:canyons',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',


});

var abyssal = L.tileLayer.wms(baseURL, {
  layers: 'geonode:abyssal',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var escarpments = L.tileLayer.wms(baseURL, {
  layers: 'geonode:escarpments',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var guyots = L.tileLayer.wms(baseURL, {
  layers: 'geonode:guyots',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var seamounts = L.tileLayer.wms(baseURL, {
  layers: 'geonode:seamounts',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var rift_valleys = L.tileLayer.wms(baseURL, {
  layers: 'geonode:rift_valleys',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var troughs = L.tileLayer.wms(baseURL, {
  layers: 'geonode:troughs',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var ridges = L.tileLayer.wms(baseURL, {
  layers: 'geonode:ridges',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var spreading_ridges = L.tileLayer.wms(baseURL, {
  layers: 'geonode:spreading_ridges',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var trenches = L.tileLayer.wms(baseURL, {
  layers: 'geonode:trenches',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var plateaus = L.tileLayer.wms(baseURL, {
  layers: 'geonode:plateaus',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var shelf = L.tileLayer.wms(baseURL, {
  layers: 'geonode:shelf',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var slope = L.tileLayer.wms(baseURL, {
  layers: 'geonode:slope',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var volcanoes = L.tileLayer.wms(baseURL, {
  layers: 'geonode:volcanoes',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var earthquakes = L.tileLayer.wms(baseURL, {
  layers: 'geonode:earthquakes',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var hydrothermal = L.tileLayer.wms(baseURL, {
  layers: 'geonode:hydrothermal',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var currents = L.tileLayer.wms(baseURL, {
  layers: 'geonode:currents',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fiji_reefs = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_reefs',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fiji_mangrove = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_mangrove',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var pelagic = L.tileLayer.wms(baseURL, {
  layers: 'geonode:pelagic',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var benthic = L.tileLayer.wms(baseURL, {
  layers: 'geonode:benthic',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var ebsaregions_20150521 = L.tileLayer.wms(baseURL, {
  layers: 'geonode:ebsaregions_20150521',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var ibamap_12feb2016_selected = L.tileLayer.wms(baseURL, {
  layers: 'geonode:ibamap_12feb2016_selected',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fiji_suma_inshore = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_suma_inshore',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fiji_suma_offshore = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_suma_offshore',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var deepwater = L.tileLayer.wms(baseURL, {
  layers: 'geonode:deepwater',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var reefbioregions = L.tileLayer.wms(baseURL, {
  layers: 'geonode:reefbioregions',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fiji_decade_of_tuna = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_decade_of_tuna',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var marine_aquaculture_sites = L.tileLayer.wms(baseURL, {
  layers: 'geonode:marine_aquaculture_sites',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var freshwater_aquaculture_sites = L.tileLayer.wms(baseURL, {
  layers: 'geonode:freshwater_aquaculture_sites',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var hotels_with_marine_activities = L.tileLayer.wms(baseURL, {
  layers: 'geonode:hotels_with_marine_activities',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var dive_sites = L.tileLayer.wms(baseURL, {
  layers: 'geonode:dive_sites',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var passengervessel = L.tileLayer.wms(baseURL, {
  layers: 'geonode:passengervessel',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var airport = L.tileLayer.wms(baseURL, {
  layers: 'geonode:airport',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var jetties_ports_marinas_anchorages_portofcall = L.tileLayer.wms(baseURL, {
  layers: 'geonode:jetties_ports_marinas_anchorages_portofcall',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var live_aboard_areas = L.tileLayer.wms(baseURL, {
  layers: 'geonode:live_aboard_areas',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var _2016_cruiseship_schedule_1 = L.tileLayer.wms(baseURL, {
  layers: 'geonode:_2016_cruiseship_schedule_1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var cables_360 = L.tileLayer.wms(baseURL, {
  layers: 'geonode:cables_360',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var deep_sea_mineral_exploration_wgs84 = L.tileLayer.wms(baseURL, {
  layers: 'geonode:deep_sea_mineral_exploration_wgs84',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var oil_exploration_licenses_and_applications_wgs84 = L.tileLayer.wms(baseURL, {
  layers: 'geonode:oil_exploration_licenses_and_applications_wgs84',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var ports = L.tileLayer.wms(baseURL, {
  layers: 'geonode:ports',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var pollutionreef = L.tileLayer.wms(baseURL, {
  layers: 'geonode:pollutionreef',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var pollutionwater = L.tileLayer.wms(baseURL, {
  layers: 'geonode:pollutionwater',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var imomarpol = L.tileLayer.wms(baseURL, {
  layers: 'geonode:imomarpol',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var cyclones = L.tileLayer.wms(baseURL, {
  layers: 'geonode:cyclones',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});


var fiji_decade_of_deepfish = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fiji_decade_of_deepfish',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});


var sst = L.tileLayer.wms(baseURL, {
  layers: 'geonode:sst',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});


var chl = L.tileLayer.wms(baseURL, {
  layers: 'geonode:chl',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var parf = L.tileLayer.wms(baseURL, {
  layers: 'geonode:parf',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var oceandepth = L.tileLayer.wms(baseURL, {
  layers: 'geonode:oceandepth',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '0.5',

});

var hill = L.tileLayer.wms(baseURL, {
  layers: 'geonode:hill',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var phosphate = L.tileLayer.wms(baseURL, {
  layers: 'geonode:phosphate',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var nitrate = L.tileLayer.wms(baseURL, {
  layers: 'geonode:nitrate',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var ph = L.tileLayer.wms(baseURL, {
  layers: 'geonode:ph',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var salinity = L.tileLayer.wms(baseURL, {
  layers: 'geonode:salinity',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',


});

var calcite = L.tileLayer.wms(baseURL, {
  layers: 'geonode:calcite',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var seamount = L.tileLayer.wms(baseURL, {
  layers: 'geonode:seamount',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});


var fishmarkets = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fishmarkets',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fishaggr = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fishaggr',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var coldwater = L.tileLayer.wms(baseURL, {
  layers: 'geonode:coldwater',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fijivessels = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fijivessels',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var density = L.tileLayer.wms(baseURL, {
  layers: 'geonode:density',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

});

var fijibioregionsprojected = L.tileLayer.wms(baseURL, {
  layers: 'geonode:fijibioregionsprojected',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity: '1',

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
  zoom: 2,
  center: [-17.252421, 178.620572],
  layers: [Esri_WorldImagery, highlight, infoLayer],
  zoomControl: false,
  attributionControl: false
});



/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function (index, layer) {
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
//       		sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
//       		filename: 'myMap',
//       		exportOnly: true,
//       		hideControlContainer: true,
// 			position:'bottomright',
// 		}).addTo(map);



L.control.scale({ maxWidth: 200, position: 'bottomleft' }).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}


var baseMaps = [{
  groupName: "Base Maps",
  expanded: false,
  layers: {

    "OpenStreetMap": OpenStreetMap_BlackAndWhite,
    "WorldImagery ESRI": Esri_WorldImagery


  }
}
];


var overlays = [
  {
    groupName: "Base Layers",
    expanded: false,
    layers: {
      "Exclusive Economic Zone": fiji_provisional_exclusive_economic_zone_boundary,
      "Archipelagic Baseline": archipelagicbaseline,
      "Divisional Lines": divisional_lines,
      //"Populated Places" : populated_places,
      //"Hillshade" : hill
    }
  },
  {
    groupName: "Valuing",
    expanded: false,
    layers: {
      "Ocean Depth (m)": oceandepth,
      "Basins": basins,
      "Canyons": canyons,
      "Escarpments": escarpments,
      "Guyots": guyots,
      "Seamounts": seamounts,
      "Rift Valleys": rift_valleys,
      "Troughs": troughs,
      "Ridges": ridges,
      "Spreading Ridges": spreading_ridges,
      "Trenches": trenches,
      "Plateaus": plateaus,
      "Shelf": shelf,
      "Slope": slope,
      "Abyssal": abyssal,
      "Seamount": seamount,
      "Inactive Volcanoes": volcanoes,
      "Earthquakes Centers 2000-2016<br>(magnitude)": earthquakes,
      "Hydrothermal": hydrothermal,
      //"Currents" : currents,
      "Salinity": salinity,
      "Chlorophyll-a Concentration": chl,
      "Photosynthetically Available Radiation": parf,
      "Reefs": fiji_reefs,
      "Mangroves": fiji_mangrove,
      "Pelagic Marine Species Richness <br> (number of species)": pelagic,
      "Benthic Marine Species Richness <br> (number of species)": benthic,
      "Coldwater Habitat Suitability": coldwater,
      "Key Bird and Biodiversity Areas": ibamap_12feb2016_selected,
      "Ecologically and Biologically Significant Areas": ebsaregions_20150521,
      "Special and/or Unique Marine Areas(SUMA) Offshore": fiji_suma_offshore,
      "Special and/or Unique Marine Areas(SUMA) Inshore": fiji_suma_inshore,
      "Deepwater Bioregions": fijibioregionsprojected,
      "Reef Associated Bioregions": reefbioregions

    }
  },
  {
    groupName: "Planning",
    expanded: false,
    layers: {
      "Tuna Catch (2001 - 2010) <br> (metric tonnes)": fiji_decade_of_tuna,
      "Deep Water Fisheries Catch <br> (2001 - 2010) (metric tonnes)": fiji_decade_of_deepfish,
      "Fish markets": fishmarkets,
      "Population Density": density,
      "Fish Aggregating Devices": fishaggr,
      "Marine Aquaculture Sites": marine_aquaculture_sites,
      "Freshwater Aquaculture Sites": freshwater_aquaculture_sites,
      "Hotels with Marine Activities": hotels_with_marine_activities,
      "Dive Sites": dive_sites,
      "Passenger Vessel (over 200ft long) ": passengervessel,
      "Airports": airport,
      "Points of Interest": jetties_ports_marinas_anchorages_portofcall,
      "Live-Aboard Areas": live_aboard_areas,
      "Number of cruise ship landings": _2016_cruiseship_schedule_1,
      "Deep Sea Mineral Exploration": deep_sea_mineral_exploration_wgs84,
      "Oil Exploration License and Applications": oil_exploration_licenses_and_applications_wgs84,
      "Submarine Cables": cables_360,
      "Ports": ports,
      "Vessels traffic": fijivessels,
      "Phosphate concentration": phosphate,
      "Nitrate concentration": nitrate,
      "Pollution on reef units(%)": pollutionreef,
      "Watershed-based Pollution(%)": pollutionwater,
      "Mean Sea Temperature": sst,
      "pH": ph,
      "Calcite Concentration": calcite,
      "Cyclones (1980 - 2016) <br> (knots)": cyclones
    }
  },
  {
    groupName: "Management",
    expanded: false,
    layers: {
      "IMO MARPOL 73/78": imomarpol
    }
  }

];




/* Add legend */
var options = {
  container_width: "250px",
  group_maxHeight: "300",
  container_maxHeight: "450px",
  exclusive: false,
  collapsed: false
};

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);



//retrive on click info
/* Clear feature highlight when map is clicked */
map.on("click", function (e) {
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

      success: function (data) {

        if (data.features.length > 0) {

          var content = "<table class='table table-striped table-bordered table-condensed'>";
          content = content + "<tr><td><b>Major Grid ID:</b></td>"
          content = content + "<td>" + data.features[0].properties.grid_1kmsq + "</td></tr>"
          content = content + "<table>";

          L.popup({ maxWidth: 800 }).setLatLng(e.latlng).setContent(content).openOn(map);
          var polygon = L.multiPolygon(data.features[0].geometry.coordinates.map(function (d) { return mapPolygon(d); }));
          highlight.clearLayers().addLayer(L.multiPolygon(polygon.getLatLngs(), polyhighlightStyle));
          $("#loading").hide();

        }
        else {
          $("#loading").hide();
        }
      }, error: function (xhr, status, error) {
        console.log(error);
        $("#loading").hide();
      }
    });
  }


});


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

  //set transverency function
 

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
  fiji_provisional_exclusive_economic_zone_boundary.setZIndex(52);
  archipelagicbaseline.setZIndex(51);
  divisional_lines.setZIndex(50);
  oceandepth.setZIndex(13);
  basins.setZIndex(24);
  canyons.setZIndex(25);
  escarpments.setZIndex(26);
  guyots.setZIndex(27);
  seamounts.setZIndex(28);
  rift_valleys.setZIndex(29);
  troughs.setZIndex(30);
  ridges.setZIndex(31);
  spreading_ridges.setZIndex(32);
  trenches.setZIndex(33);
  plateaus.setZIndex(34);
  shelf.setZIndex(35);
  slope.setZIndex(36);
  abyssal.setZIndex(14);
  seamount.setZIndex(15);
  volcanoes.setZIndex(37);
  earthquakes.setZIndex(67);
  hydrothermal.setZIndex(66);
  currents.setZIndex(65);
  salinity.setZIndex(4);
  chl.setZIndex(5);
  parf.setZIndex(6);
  fiji_reefs.setZIndex(38);
  fiji_mangrove.setZIndex(39);
  pelagic.setZIndex(16);
  benthic.setZIndex(17);
  coldwater.setZIndex(18);
  ibamap_12feb2016_selected.setZIndex(40);
  ebsaregions_20150521.setZIndex(41);
  fiji_suma_offshore.setZIndex(42);
  fiji_suma_inshore.setZIndex(43);
  fijibioregionsprojected.setZIndex(44);
  reefbioregions.setZIndex(19);
  fiji_decade_of_tuna.setZIndex(20);
  fiji_decade_of_deepfish.setZIndex(21);
  fishmarkets.setZIndex(64);
  density.setZIndex(7);
  fishaggr.setZIndex(63);
  marine_aquaculture_sites.setZIndex(62);
  freshwater_aquaculture_sites.setZIndex(61);
  hotels_with_marine_activities.setZIndex(60);
  dive_sites.setZIndex(59);
  passengervessel.setZIndex(58);
  airport.setZIndex(57);
  jetties_ports_marinas_anchorages_portofcall.setZIndex();
  live_aboard_areas.setZIndex(56);
  _2016_cruiseship_schedule_1.setZIndex(55);
  deep_sea_mineral_exploration_wgs84.setZIndex(45);
  oil_exploration_licenses_and_applications_wgs84.setZIndex(46);
  cables_360.setZIndex(49);
  ports.setZIndex(54);
  fijivessels.setZIndex(48);
  phosphate.setZIndex(8);
  nitrate.setZIndex(9);
  pollutionreef.setZIndex(22);
  pollutionwater.setZIndex(23);
  sst.setZIndex(10);
  ph.setZIndex(11);
  calcite.setZIndex(12);
  cyclones.setZIndex(47);
  imomarpol.setZIndex(53);

  //set the default layer
  map.addLayer(fiji_provisional_exclusive_economic_zone_boundary);
  map.addLayer(archipelagicbaseline);
}

