var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BGR_adm1polygon_1 = new ol.format.GeoJSON();
var features_BGR_adm1polygon_1 = format_BGR_adm1polygon_1.readFeatures(json_BGR_adm1polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGR_adm1polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGR_adm1polygon_1.addFeatures(features_BGR_adm1polygon_1);
var lyr_BGR_adm1polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BGR_adm1polygon_1, 
                style: style_BGR_adm1polygon_1,
                popuplayertitle: 'BGR_adm1-polygon',
                interactive: true,
                title: '<img src="styles/legend/BGR_adm1polygon_1.png" /> BGR_adm1-polygon'
            });
var format_Copyofadisoutbreaks20250704_102200copycopycopy_2 = new ol.format.GeoJSON();
var features_Copyofadisoutbreaks20250704_102200copycopycopy_2 = format_Copyofadisoutbreaks20250704_102200copycopycopy_2.readFeatures(json_Copyofadisoutbreaks20250704_102200copycopycopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copyofadisoutbreaks20250704_102200copycopycopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copyofadisoutbreaks20250704_102200copycopycopy_2.addFeatures(features_Copyofadisoutbreaks20250704_102200copycopycopy_2);
var lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Copyofadisoutbreaks20250704_102200copycopycopy_2, 
                style: style_Copyofadisoutbreaks20250704_102200copycopycopy_2,
                popuplayertitle: 'Copy of adis-outbreaks-20250704_102200 copy copy copy',
                interactive: true,
                title: '<img src="styles/legend/Copyofadisoutbreaks20250704_102200copycopycopy_2.png" /> Copy of adis-outbreaks-20250704_102200 copy copy copy'
            });
var format_Copyofadisoutbreaks20250704_102200copycopy_3 = new ol.format.GeoJSON();
var features_Copyofadisoutbreaks20250704_102200copycopy_3 = format_Copyofadisoutbreaks20250704_102200copycopy_3.readFeatures(json_Copyofadisoutbreaks20250704_102200copycopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copyofadisoutbreaks20250704_102200copycopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copyofadisoutbreaks20250704_102200copycopy_3.addFeatures(features_Copyofadisoutbreaks20250704_102200copycopy_3);
var lyr_Copyofadisoutbreaks20250704_102200copycopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Copyofadisoutbreaks20250704_102200copycopy_3, 
                style: style_Copyofadisoutbreaks20250704_102200copycopy_3,
                popuplayertitle: 'Copy of adis-outbreaks-20250704_102200 copy copy',
                interactive: true,
                title: '<img src="styles/legend/Copyofadisoutbreaks20250704_102200copycopy_3.png" /> Copy of adis-outbreaks-20250704_102200 copy copy'
            });
var format_Copyofadisoutbreaks20250704_102200copy_4 = new ol.format.GeoJSON();
var features_Copyofadisoutbreaks20250704_102200copy_4 = format_Copyofadisoutbreaks20250704_102200copy_4.readFeatures(json_Copyofadisoutbreaks20250704_102200copy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copyofadisoutbreaks20250704_102200copy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copyofadisoutbreaks20250704_102200copy_4.addFeatures(features_Copyofadisoutbreaks20250704_102200copy_4);
var lyr_Copyofadisoutbreaks20250704_102200copy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Copyofadisoutbreaks20250704_102200copy_4, 
                style: style_Copyofadisoutbreaks20250704_102200copy_4,
                popuplayertitle: 'Copy of adis-outbreaks-20250704_102200 copy',
                interactive: true,
                title: '<img src="styles/legend/Copyofadisoutbreaks20250704_102200copy_4.png" /> Copy of adis-outbreaks-20250704_102200 copy'
            });
var format_Copyofadisoutbreaks20250704_102200_5 = new ol.format.GeoJSON();
var features_Copyofadisoutbreaks20250704_102200_5 = format_Copyofadisoutbreaks20250704_102200_5.readFeatures(json_Copyofadisoutbreaks20250704_102200_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copyofadisoutbreaks20250704_102200_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copyofadisoutbreaks20250704_102200_5.addFeatures(features_Copyofadisoutbreaks20250704_102200_5);
var lyr_Copyofadisoutbreaks20250704_102200_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Copyofadisoutbreaks20250704_102200_5, 
                style: style_Copyofadisoutbreaks20250704_102200_5,
                popuplayertitle: 'Copy of adis-outbreaks-20250704_102200',
                interactive: true,
                title: '<img src="styles/legend/Copyofadisoutbreaks20250704_102200_5.png" /> Copy of adis-outbreaks-20250704_102200'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BGR_adm1polygon_1.setVisible(true);lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2.setVisible(true);lyr_Copyofadisoutbreaks20250704_102200copycopy_3.setVisible(true);lyr_Copyofadisoutbreaks20250704_102200copy_4.setVisible(true);lyr_Copyofadisoutbreaks20250704_102200_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BGR_adm1polygon_1,lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2,lyr_Copyofadisoutbreaks20250704_102200copycopy_3,lyr_Copyofadisoutbreaks20250704_102200copy_4,lyr_Copyofadisoutbreaks20250704_102200_5];
lyr_BGR_adm1polygon_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'visibility': 'visibility', });
lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2.set('fieldAliases', {'color': 'color', 'Reference': 'Reference', 'Type': 'Type', 'Submitted on': 'Submitted on', 'Administrative division level 1': 'Administrative division level 1', 'Administrative division level 2': 'Administrative division level 2', 'Administrative division level 3': 'Administrative division level 3', 'Outbreak occurring inside an already restricted zone': 'Outbreak occurring inside an already restricted zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Confirmation date': 'Confirmation date', 'Result date 5': 'Result date 5', 'Result type 5': 'Result type 5', 'Category 6': 'Category 6', 'Subcategory 6': 'Subcategory 6', 'Test name 6': 'Test name 6', 'Test type 6': 'Test type 6', 'Laboratory name 6': 'Laboratory name 6', 'Laboratory type 6': 'Laboratory type 6', 'Species 6': 'Species 6', 'Result date 6': 'Result date 6', 'Result type 6': 'Result type 6', 'Pertinence': 'Pertinence', });
lyr_Copyofadisoutbreaks20250704_102200copycopy_3.set('fieldAliases', {'color': 'color', 'Reference': 'Reference', 'Type': 'Type', 'Submitted on': 'Submitted on', 'Administrative division level 1': 'Administrative division level 1', 'Administrative division level 2': 'Administrative division level 2', 'Administrative division level 3': 'Administrative division level 3', 'Outbreak occurring inside an already restricted zone': 'Outbreak occurring inside an already restricted zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Confirmation date': 'Confirmation date', 'Result date 5': 'Result date 5', 'Result type 5': 'Result type 5', 'Category 6': 'Category 6', 'Subcategory 6': 'Subcategory 6', 'Test name 6': 'Test name 6', 'Test type 6': 'Test type 6', 'Laboratory name 6': 'Laboratory name 6', 'Laboratory type 6': 'Laboratory type 6', 'Species 6': 'Species 6', 'Result date 6': 'Result date 6', 'Result type 6': 'Result type 6', 'Pertinence': 'Pertinence', });
lyr_Copyofadisoutbreaks20250704_102200copy_4.set('fieldAliases', {'color': 'color', 'Reference': 'Reference', 'Type': 'Type', 'Submitted on': 'Submitted on', 'Administrative division level 1': 'Administrative division level 1', 'Administrative division level 2': 'Administrative division level 2', 'Administrative division level 3': 'Administrative division level 3', 'Outbreak occurring inside an already restricted zone': 'Outbreak occurring inside an already restricted zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Confirmation date': 'Confirmation date', 'Result date 5': 'Result date 5', 'Result type 5': 'Result type 5', 'Category 6': 'Category 6', 'Subcategory 6': 'Subcategory 6', 'Test name 6': 'Test name 6', 'Test type 6': 'Test type 6', 'Laboratory name 6': 'Laboratory name 6', 'Laboratory type 6': 'Laboratory type 6', 'Species 6': 'Species 6', 'Result date 6': 'Result date 6', 'Result type 6': 'Result type 6', 'Pertinence': 'Pertinence', });
lyr_Copyofadisoutbreaks20250704_102200_5.set('fieldAliases', {'color': 'color', 'Reference': 'Reference', 'Type': 'Type', 'Submitted on': 'Submitted on', 'Administrative division level 1': 'Administrative division level 1', 'Administrative division level 2': 'Administrative division level 2', 'Administrative division level 3': 'Administrative division level 3', 'Outbreak occurring inside an already restricted zone': 'Outbreak occurring inside an already restricted zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Confirmation date': 'Confirmation date', 'Result date 5': 'Result date 5', 'Result type 5': 'Result type 5', 'Category 6': 'Category 6', 'Subcategory 6': 'Subcategory 6', 'Test name 6': 'Test name 6', 'Test type 6': 'Test type 6', 'Laboratory name 6': 'Laboratory name 6', 'Laboratory type 6': 'Laboratory type 6', 'Species 6': 'Species 6', 'Result date 6': 'Result date 6', 'Result type 6': 'Result type 6', 'Pertinence': 'Pertinence', });
lyr_BGR_adm1polygon_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'visibility': 'Range', });
lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2.set('fieldImages', {'color': 'TextEdit', 'Reference': 'TextEdit', 'Type': 'TextEdit', 'Submitted on': 'DateTime', 'Administrative division level 1': 'TextEdit', 'Administrative division level 2': 'TextEdit', 'Administrative division level 3': 'TextEdit', 'Outbreak occurring inside an already restricted zone': 'CheckBox', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Confirmation date': 'DateTime', 'Result date 5': 'TextEdit', 'Result type 5': 'TextEdit', 'Category 6': 'TextEdit', 'Subcategory 6': 'TextEdit', 'Test name 6': 'TextEdit', 'Test type 6': 'TextEdit', 'Laboratory name 6': 'TextEdit', 'Laboratory type 6': 'TextEdit', 'Species 6': 'TextEdit', 'Result date 6': 'TextEdit', 'Result type 6': 'TextEdit', 'Pertinence': 'TextEdit', });
lyr_Copyofadisoutbreaks20250704_102200copycopy_3.set('fieldImages', {'color': 'TextEdit', 'Reference': 'TextEdit', 'Type': 'TextEdit', 'Submitted on': 'DateTime', 'Administrative division level 1': 'TextEdit', 'Administrative division level 2': 'TextEdit', 'Administrative division level 3': 'TextEdit', 'Outbreak occurring inside an already restricted zone': 'CheckBox', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Confirmation date': 'DateTime', 'Result date 5': 'TextEdit', 'Result type 5': 'TextEdit', 'Category 6': 'TextEdit', 'Subcategory 6': 'TextEdit', 'Test name 6': 'TextEdit', 'Test type 6': 'TextEdit', 'Laboratory name 6': 'TextEdit', 'Laboratory type 6': 'TextEdit', 'Species 6': 'TextEdit', 'Result date 6': 'TextEdit', 'Result type 6': 'TextEdit', 'Pertinence': 'TextEdit', });
lyr_Copyofadisoutbreaks20250704_102200copy_4.set('fieldImages', {'color': 'TextEdit', 'Reference': 'TextEdit', 'Type': 'TextEdit', 'Submitted on': 'DateTime', 'Administrative division level 1': 'TextEdit', 'Administrative division level 2': 'TextEdit', 'Administrative division level 3': 'TextEdit', 'Outbreak occurring inside an already restricted zone': 'CheckBox', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Confirmation date': 'DateTime', 'Result date 5': 'TextEdit', 'Result type 5': 'TextEdit', 'Category 6': 'TextEdit', 'Subcategory 6': 'TextEdit', 'Test name 6': 'TextEdit', 'Test type 6': 'TextEdit', 'Laboratory name 6': 'TextEdit', 'Laboratory type 6': 'TextEdit', 'Species 6': 'TextEdit', 'Result date 6': 'TextEdit', 'Result type 6': 'TextEdit', 'Pertinence': 'TextEdit', });
lyr_Copyofadisoutbreaks20250704_102200_5.set('fieldImages', {'color': 'TextEdit', 'Reference': 'TextEdit', 'Type': 'TextEdit', 'Submitted on': 'DateTime', 'Administrative division level 1': 'TextEdit', 'Administrative division level 2': 'TextEdit', 'Administrative division level 3': 'TextEdit', 'Outbreak occurring inside an already restricted zone': 'CheckBox', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Confirmation date': 'DateTime', 'Result date 5': 'TextEdit', 'Result type 5': 'TextEdit', 'Category 6': 'TextEdit', 'Subcategory 6': 'TextEdit', 'Test name 6': 'TextEdit', 'Test type 6': 'TextEdit', 'Laboratory name 6': 'TextEdit', 'Laboratory type 6': 'TextEdit', 'Species 6': 'TextEdit', 'Result date 6': 'TextEdit', 'Result type 6': 'TextEdit', 'Pertinence': 'TextEdit', });
lyr_BGR_adm1polygon_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'visibility': 'no label', });
lyr_Copyofadisoutbreaks20250704_102200copycopycopy_2.set('fieldLabels', {'color': 'no label', 'Reference': 'no label', 'Type': 'no label', 'Submitted on': 'no label', 'Administrative division level 1': 'no label', 'Administrative division level 2': 'no label', 'Administrative division level 3': 'no label', 'Outbreak occurring inside an already restricted zone': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Confirmation date': 'no label', 'Result date 5': 'no label', 'Result type 5': 'no label', 'Category 6': 'no label', 'Subcategory 6': 'no label', 'Test name 6': 'no label', 'Test type 6': 'no label', 'Laboratory name 6': 'no label', 'Laboratory type 6': 'no label', 'Species 6': 'no label', 'Result date 6': 'no label', 'Result type 6': 'no label', 'Pertinence': 'no label', });
lyr_Copyofadisoutbreaks20250704_102200copycopy_3.set('fieldLabels', {'color': 'no label', 'Reference': 'no label', 'Type': 'no label', 'Submitted on': 'no label', 'Administrative division level 1': 'no label', 'Administrative division level 2': 'no label', 'Administrative division level 3': 'no label', 'Outbreak occurring inside an already restricted zone': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Confirmation date': 'no label', 'Result date 5': 'no label', 'Result type 5': 'no label', 'Category 6': 'no label', 'Subcategory 6': 'no label', 'Test name 6': 'no label', 'Test type 6': 'no label', 'Laboratory name 6': 'no label', 'Laboratory type 6': 'no label', 'Species 6': 'no label', 'Result date 6': 'no label', 'Result type 6': 'no label', 'Pertinence': 'no label', });
lyr_Copyofadisoutbreaks20250704_102200copy_4.set('fieldLabels', {'color': 'no label', 'Reference': 'no label', 'Type': 'no label', 'Submitted on': 'no label', 'Administrative division level 1': 'no label', 'Administrative division level 2': 'no label', 'Administrative division level 3': 'no label', 'Outbreak occurring inside an already restricted zone': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Confirmation date': 'no label', 'Result date 5': 'no label', 'Result type 5': 'no label', 'Category 6': 'no label', 'Subcategory 6': 'no label', 'Test name 6': 'no label', 'Test type 6': 'no label', 'Laboratory name 6': 'no label', 'Laboratory type 6': 'no label', 'Species 6': 'no label', 'Result date 6': 'no label', 'Result type 6': 'no label', 'Pertinence': 'no label', });
lyr_Copyofadisoutbreaks20250704_102200_5.set('fieldLabels', {'color': 'no label', 'Reference': 'no label', 'Type': 'no label', 'Submitted on': 'no label', 'Administrative division level 1': 'no label', 'Administrative division level 2': 'no label', 'Administrative division level 3': 'no label', 'Outbreak occurring inside an already restricted zone': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Confirmation date': 'no label', 'Result date 5': 'no label', 'Result type 5': 'no label', 'Category 6': 'no label', 'Subcategory 6': 'no label', 'Test name 6': 'no label', 'Test type 6': 'no label', 'Laboratory name 6': 'no label', 'Laboratory type 6': 'no label', 'Species 6': 'no label', 'Result date 6': 'no label', 'Result type 6': 'no label', 'Pertinence': 'no label', });
lyr_Copyofadisoutbreaks20250704_102200_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});