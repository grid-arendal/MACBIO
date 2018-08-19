

$(window).resize(function() {
  sizeLayerControl();
});


$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
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


//its a base url for geoserver
var baseURL = "http://82.116.78.168/geoserver/geonode/ows";

//add wms layer
//grid_1km 
var grid_1km =  L.tileLayer.wms(baseURL, {
  layers: 'geonode:grid_1km',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'0.7'
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
var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.4,
  radius: 10
};



//add the map control and center it

map = L.map('map', {
  zoom: 2,
  center: [-17.252421,178.620572],
  layers: [OpenStreetMap_BlackAndWhite,highlight],
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
  div.innerHTML = "<span class='hidden-xs'><a href='http://www.grida.no/' target='blank'>GRID-Arendal</a>   | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
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
								
                  "OpenStreetMap"	: OpenStreetMap_BlackAndWhite,
                  "WorldImagery ESRI":Esri_WorldImagery
							
									
								}
					        }							
			];


	var overlays = [
						{                                                    	
								groupName : "Water Bodies",
								expanded : false,
								layers    : { 
								
									"1 Square Kilometers"     : grid_1km,
									
								}	
                             },
							 
							 {                                                    	
								groupName : "Roads",
								expanded : false,
								layers    : { 
								
									"Road"     : extent_layer,
									
								}	
                             }
                                                                                 
			];




/* Add legend */
	var options = {
				container_width 	: "250px",
				group_maxHeight     : "200px",
				container_maxHeight : "300px", 
				exclusive       	: false,
				collapsed	:false
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




//Functions will return the  feture from the wms layer and also its geometries to hilight

function mapPolygon(poly) {
  return poly.map(function(line) {
    return mapLineString(line);
  });
}

function mapLineString(line) {
  return line.map(function(d) {
    return [d[1], d[0]];
  });
}

function getFeatureInfoUrl(map, layer, latlng, params) {



  var point = map.latLngToContainerPoint(latlng, map.getZoom()),
    size = map.getSize();


  var defaultParams = {
    request: 'GetFeatureInfo',
    service: 'WMS',
    srs: 'EPSG:4326',
    styles: '',
    transparent: layer.options.transparent,
    version: layer.options.version,
    format: layer.options.format,
    bbox: map.getBounds().toBBoxString(),
    height: size.y,
    width: size.x,
    layers: layer.options.layers,
    query_layers: layer.options.layers,
    info_format: 'text/html',
  };

  params = L.Util.extend(defaultParams, params || {});

  params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
  params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;

  return layer._url + L.Util.getParamString(defaultParams, layer._url, true);

}

//********************Wms getfeture function end



/* Load the content before map load */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
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
