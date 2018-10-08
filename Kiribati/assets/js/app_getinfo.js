var layer_GetAttList = {
  "basins": {
    Type: "Type",
    Depth: "Depth",
    area_km2: "Area"
  },
  "canyons": {
    type: "Type",
    area_km2: "Area",
    Mean_Depth: "Mean Depth",
    Length: "Length",
    Width: "Width"
  },
  "abyssal": {
    Class: "Class",
    area_km2: "Area"
  },
  "escarpments": {
    area_km2: "Area"
  },
  "guyots": {
    area_km2: "Area",
    Height: "Height",
    Peak_Depth: "Peak_Depth"
  },

  "seamounts": {
    area_km2: "Area",
    Height: "Height",
    Peak_Depth: "Peak_Depth"
  },
  "ridges": {
    area_km2: "Area"
  },
  "rift_valleys": {
    area_km2: "Area"
  },
  "troughs": {
    area_km2: "Area"
  },
  "spreading_ridges": {
    area_km2: "Area"
  },
  "terraces": {
    area_km2: "Area"
  },
  "plateaus": {
    area_km2: "Area"
  },
  "trenches": {
    area_km2: "Area"
  },
  "shelf": {
    area_km2: "Area"
  },
  "slope": {
    area_km2: "Area"
  },
  "seamount": {
    area_km2: "Area",
    Height: "Height",
    Peak_Depth: "Peak_Depth"
  },
  "volcanoes": {
    Volcano_Na: "Volcano Name",
    Primary_Vo: "Type",
    Last_Erupt: "Last Eruption",
    Elevation: "Elevation",
    Tectonic_S: "Tectonic_S"
  },
  "hydrothermal": {
    Name_ID: "Name",
    Activity: "Activity"
  },
  "earthquakes": {
    time: "Time",
    depth: "Depth",
    mag: "Magnitude"
  },
  "reefs_1": {
    REEF_NAME: "Description",
    AREA_KM2: "Area"
  },
  
  "pelagic": {
    HighSpCoun: "Number of species"
  },

  "benthic": {
    DeepSpCoun: "Number of species"
  },

  "kba_1": {
    Name: "Name",
  },
  
  "ebsaregions_20150521": {
    NAMEFINAL: "Name"
  },

  "reefbio_1": {
    Name: "Name",
  },
  "deepwater_2": {
    Draft_name: "Name",
    depthRange: "Depth Range",
  },
  "tunacatch": {
    TunaIntens: "Tuna Catch(metric tonnes)"
  },
  "kiribati_deep_fisheries_360": {
    Catch: "Deep Water Fisheries Catch(2001-2010)(metric tonnes)"
  },

 "anchorages_1": {
    Name: "Name",
  },

  "airport": {
    NAME: "Name",
    CATEGORY: "Category"
  },
  "wharves": {
    Name: "Name",
  },
  "cruiseships": {
    Name: "Name",
  },

  "ph": {
    GRAY_INDEX: "Value",
  },
  "calcite": {
    GRAY_INDEX: "Value",
  },
  "salinity": {
    GRAY_INDEX: "Value",
  },
  "cables_360": {
    Name: "Name",
    Capacity_G: "Capacity",
    Distance_K: "Distance",
    InService: "In Service"
  },
  "phosphate": {
    GRAY_INDEX: "Value",
  },
  "nitrate": {
    GRAY_INDEX: "Value",
  },

  "sst": {
    GRAY_INDEX: "Value",
  },


  "cyclones": {
    Season: "Season",
    Name: "Name",
    wmo_wind: "Wind Speed (knots)",
    year: "Year"
  },
  "oceandepth": {
    GRAY_INDEX: "Value",
  },
   "density": {
    GRAY_INDEX: "Value",
  },
    "parf": {
    GRAY_INDEX: "Value",
  },
  "chl": {
    GRAY_INDEX: "Value",
  },
  "coldwater": {
    GRAY_INDEX: "Value",
  },

   "ports": {
    PORT_NAME: "Name",
  },
 // "populated_places": {
 //   NAME: "Name",
  //  SOV0NAME: "Country",
 //   POP_MAX: "Population"
 // }
 
}


//rater list to avoide mouse click enable
var rasterList = "chl,parf,oceandepth,sst,nitrate,phosphate,salinity,calcite,ph,density,coldwater";


rasterList = rasterList.split(",");
var LayerName_keys = Object.keys(layer_GetAttList);

//Function to load layer list in a combobox
//Function to create a key value pair for legend  dictionary
var legDic=null;

public: function legendDicnary() {
  
  legDic = [];
  $('#lgList')[0].options.length = 0;
  var keyVal;
  overlays.forEach(objLay => {

    for (keyObj in objLay.layers) {
      keyVal = objLay.layers[keyObj];

      if ((LayerName_keys.indexOf(keyVal.options.layers.split(":")[1]) > -1) && (map.hasLayer(keyVal))) {
        //add options
        var x = document.getElementById("lgList");
        var option = document.createElement("option");
        option.text = keyObj;
        x.add(option);

        legDic.push({
          key: keyObj,
          value: keyVal
        });

      }

    }

  });
  //add adefult selected layer tag
  var x1 = document.getElementById("lgList");
  var option1 = document.createElement("option");
  option1.text = "--Select a Layer--";
  x1.add(option1);
  //$('#lgList').val('--Select a Layer--');


}


//add the event to add layer on drodown slection 
var valCon = null;
var selected = "";


map.on('overlayadd', function (e) {
  
  legendDicnary();
  infoLayer.clearLayers();
  $('#lgList').val(e.name);
  layerJsonFromGeoserver();
  val = '#slider_' + e.layer.options.layers.split(":")[1];
  $(val).css("visibility", "visible");
($('#lgList').prop('selectedIndex') > -1? true :$('#lgList').val("--Select a Layer--"))
});
map.on('overlayremove ', function (e) {
  
  legendDicnary();
  infoLayer.clearLayers();
  val = '#slider_' + e.layer.options.layers.split(":")[1];
  $(val).css("visibility", "hidden");
 
});




$("#lgList").on('change', function () {
  layerJsonFromGeoserver()
});
 
 function layerJsonFromGeoserver()
 {
  highlight.clearLayers();
  selected = $('#lgList option:selected').val();

  //set the handcursor property on on selection chnage
  if ((selected != "--Select a Layer--") & (legDic.length > 0) & ((typeof(selected)).toString() != "undefined" )) {
    valCon = legDic.filter(val => val.key == selected)[0].value
  
   
     infoLayer.clearLayers();
 



  //create a empty geojson file and add alayer to it
  
  if (rasterList.indexOf(selected) < 0   && selected != "--Select a Layer--") { {


  var map_obj = $.getJSON("http://82.116.78.168/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + valCon.options.layers + "&outputFormat=application%2Fjson", function (data) {


    // alert(data.features[0].geometry.type );

    $("#loading").show();
    // infoLayer.on("click",function(e){

    //   getFeatureInfo(e);

    // });

    infoLayer.addEventListener("click",infoLayerClick);

    
 L.geoJson(data, {
      onEachFeature: function (feature, layer) {

        switch (layer.feature.geometry.type) {
          
          case "Point":
          var pt = L.point(layer.feature.geometry.coordinates);
          var pt = crack_antimaredian(pt, "Point");
          infoLayer.addLayer(L.circleMarker([pt[0][0], pt[0][1]], {fillOpacity:0,opacity:0}));
          break;
        
          case "MultiPolygon":
          var polyArray = crack_antimaredian(layer.feature.geometry.coordinates[0], "MultiPolygon");
          var polygon_poly = L.polygon(polyArray);
          infoLayer.addLayer(L.polygon(polygon_poly.getLatLngs(), {fillOpacity:0,opacity:0}));
          break;

          case "MultiLineString":
          var polyArray = crack_antimaredian(layer.feature.geometry.coordinates[0], "MultiLineString");
          var polygon_line = L.polyline(polyArray);
          infoLayer.addLayer(L.polyline(polygon_line.getLatLngs(), {fillOpacity:0,opacity:0}));
          break;


          default:
            break;
        }
        

       }
    });

    $("#loading").hide();


   

  });
  }  
}

else
{

  infoLayer.clearLayers();
  highlight.clearLayers();
  infoLayer.removeEventListener("click",infoLayerClick);
}
};



//click event for vector
function infoLayerClick(e)
{
  getFeatureInfo(e);

}


//click event for raster
map.on("click", function (e) {
  if (selected != "--Select a Layer--")
  {
  getFeatureInfo(e);
  }
});


//Layer info  text array
//var LayerName_keys = Object.keys(layer_GetAttList);
//map.on("click", function (e) {
function getFeatureInfo(e) {
  highlight.clearLayers();
  if (map.hasLayer(valCon) && (LayerName_keys.indexOf(valCon.options.layers.split(":")[1]) > -1)) {

    // alert(valCon.options.layers);

    $("#loading").show();
    var url = getFeatureInfoUrl(map, valCon, e.latlng, {
      'info_format': 'application/json',

    });


    // Write ajex query to retrive data from wms layer
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',

      success: function (data) {

        var content = "<table class='table table-bordered table-condensed'>";
        if (data.features.length > 0) {

          var layID = layer_GetAttList[valCon.options.layers.split(":")[1]]


          $.each(layID, function (key, value) {
            //console.log(key, value);

            content = content + "<tr><td><b>" + value + "</b></td><td>" + data.features[0].properties[key] + "</td></tr>"


          });
          $("#loading").hide();
          content = content + "<table>";



          switch (((data.features[0].geometry != null) ? data.features[0].geometry.type.toString() : 'raster')) {
            case "Point":
              var pt = L.point(data.features[0].geometry.coordinates);
              pt = crack_antimaredian(pt, "Point");
              L.popup({ maxWidth: 800 }).setLatLng([pt[0][0], pt[0][1]]).setContent(content).openOn(map);
              highlight.clearLayers().addLayer(L.circleMarker([pt[0][0], pt[0][1]], highlightStyle));
              break;

            case "MultiPolygon":
              var polyArray = crack_antimaredian(data.features[0].geometry.coordinates[0], "MultiPolygon");
              L.popup({ maxWidth: 800 }).setLatLng(e.latlng).setContent(content).openOn(map);
              var polygon_poly = L.polygon(polyArray);
              highlight.clearLayers().addLayer(L.polygon(polygon_poly.getLatLngs(), polyhighlightStyle));
              break;

            case "MultiLineString":
              var polyArray = crack_antimaredian(data.features[0].geometry.coordinates[0], "MultiLineString");
              L.popup({ maxWidth: 800 }).setLatLng(e.latlng).setContent(content).openOn(map);
              var polygon_line = L.polyline(polyArray);
              highlight.clearLayers().addLayer(L.polyline(polygon_line.getLatLngs(), polyhighlightStyle));
              break;

            case "raster":
              L.popup({ maxWidth: 800 }).setLatLng(e.latlng).setContent(content).openOn(map);
              highlight.clearLayers().addLayer(L.circleMarker(e.latlng, highlightStyle));
              break;

            default:
              break;
            //  console.load(layer.feature.geometry.type)
          }
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
  else {
    $("#loading").hide();

  }

}


//Functions will return the  feture from the wms layer and also its geometries to hilight

function mapPolygon(poly) {
  return poly.map(function (line) {
    return mapLineString(line);
  });
}

function mapLineString(line) {
  return line.map(function (d) {
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
    //increase the tolrance for click
    buffer: 10,
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




public: function crack_antimaredian(arrayObj, geoType) {
  var geoArray = [];

  switch (geoType) {
    case "Point":
      if (arrayObj.x < 0) {
        arrayObj.x += 360;
      }
      geoArray.push([arrayObj.y, arrayObj.x]);
      break;

    case "MultiPolygon":
      arrayObj.forEach(function (locArray) {
        locArray.forEach(function (loc) {
          if (loc[0] < 0) {
            loc[0] += 360;
          }
          geoArray.push([loc[1], loc[0]]);
        });
      });
      break;

    case "MultiLineString":
      arrayObj.forEach(function (loc) {
        if (loc[0] < 0) {
          loc[0] += 360;
        }
        geoArray.push([loc[1], loc[0]]);
      });
      break;

    default:
      break;

  }

  return geoArray;

} 

}