ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([155394.754974, 100369.247829, 158072.338310, 101790.060330]);
var wms_layers = [];

var format_khalletmannazone5_0 = new ol.format.GeoJSON();
var features_khalletmannazone5_0 = format_khalletmannazone5_0.readFeatures(json_khalletmannazone5_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_khalletmannazone5_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_khalletmannazone5_0.addFeatures(features_khalletmannazone5_0);
var lyr_khalletmannazone5_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_khalletmannazone5_0, 
                style: style_khalletmannazone5_0,
                interactive: true,
                title: '<img src="styles/legend/khalletmannazone5_0.png" /> khallet manna zone 5'
            });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_2, 
                style: style_road_2,
                interactive: true,
    title: 'road<br />\
    <img src="styles/legend/road_2_0.png" /> primary<br />\
    <img src="styles/legend/road_2_1.png" /> secondary<br />'
        });

lyr_khalletmannazone5_0.setVisible(true);lyr_building_1.setVisible(true);lyr_road_2.setVisible(true);
var layersList = [lyr_khalletmannazone5_0,lyr_building_1,lyr_road_2];
lyr_khalletmannazone5_0.set('fieldAliases', {'ParcelNumb': 'ParcelNumb', 'BlockNumbe': 'BlockNumbe', 'QuarterNam': 'QuarterNam', 'slope': 'slope', 'slope type': 'slope type', 'OSLO': 'OSLO', 'landuse': 'landuse', 'road condi': 'road condi', 'road width': 'road width', 'road type': 'road type', 'NEAR_DIST': 'NEAR_DIST', 'pariemeter': 'pariemeter', 'si': 'si', 'shape inde': 'shape inde', 'floors': 'floors', 'store': 'store', 'parking': 'parking', 'area': 'area', 'net adjust': 'net adjust', 'standard v': 'standard v', 'market val': 'market val', 'market val_1': 'market val_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_building_1.set('fieldAliases', {'Id': 'Id', 'floors': 'floors', 'store': 'store', 'Field1': 'Field1', 'area': 'area', 'dtht': 'dtht', });
lyr_road_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'type': 'type', 'wedth': 'wedth', 'type1': 'type1', 'wedthtext': 'wedthtext', });
lyr_khalletmannazone5_0.set('fieldImages', {'ParcelNumb': 'TextEdit', 'BlockNumbe': 'TextEdit', 'QuarterNam': 'TextEdit', 'slope': 'TextEdit', 'slope type': 'TextEdit', 'OSLO': 'TextEdit', 'landuse': 'TextEdit', 'road condi': 'TextEdit', 'road width': 'TextEdit', 'road type': 'TextEdit', 'NEAR_DIST': 'TextEdit', 'pariemeter': 'TextEdit', 'si': 'TextEdit', 'shape inde': 'TextEdit', 'floors': 'TextEdit', 'store': 'TextEdit', 'parking': 'TextEdit', 'area': 'TextEdit', 'net adjust': 'TextEdit', 'standard v': 'TextEdit', 'market val': 'TextEdit', 'market val_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_building_1.set('fieldImages', {'Id': 'Range', 'floors': 'TextEdit', 'store': 'TextEdit', 'Field1': 'TextEdit', 'area': 'TextEdit', 'dtht': 'TextEdit', });
lyr_road_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'type': 'TextEdit', 'wedth': 'TextEdit', 'type1': 'TextEdit', 'wedthtext': 'TextEdit', });
lyr_khalletmannazone5_0.set('fieldLabels', {'ParcelNumb': 'inline label', 'BlockNumbe': 'inline label', 'QuarterNam': 'inline label', 'slope': 'inline label', 'slope type': 'inline label', 'OSLO': 'inline label', 'landuse': 'inline label', 'road condi': 'inline label', 'road width': 'inline label', 'road type': 'inline label', 'NEAR_DIST': 'inline label', 'pariemeter': 'inline label', 'si': 'inline label', 'shape inde': 'inline label', 'floors': 'inline label', 'store': 'inline label', 'parking': 'inline label', 'area': 'inline label', 'net adjust': 'inline label', 'standard v': 'inline label', 'market val': 'inline label', 'market val_1': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_building_1.set('fieldLabels', {'Id': 'no label', 'floors': 'no label', 'store': 'no label', 'Field1': 'no label', 'area': 'no label', 'dtht': 'no label', });
lyr_road_2.set('fieldLabels', {'Shape_Leng': 'no label', 'type': 'no label', 'wedth': 'no label', 'type1': 'no label', 'wedthtext': 'no label', });
lyr_road_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});