var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1824ANS_1 = new ol.format.GeoJSON();
var features_1824ANS_1 = format_1824ANS_1.readFeatures(json_1824ANS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1824ANS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1824ANS_1.addFeatures(features_1824ANS_1);
var lyr_1824ANS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1824ANS_1, 
                style: style_1824ANS_1,
                popuplayertitle: "18-24 ANS ( % )",
                interactive: true,
    title: '18-24 ANS ( % )<br />\
    <img src="styles/legend/1824ANS_1_0.png" /> 5 - 6<br />\
    <img src="styles/legend/1824ANS_1_1.png" /> 6 - 6<br />\
    <img src="styles/legend/1824ANS_1_2.png" /> 6 - 7<br />\
    <img src="styles/legend/1824ANS_1_3.png" /> 7 - 9<br />\
    <img src="styles/legend/1824ANS_1_4.png" /> 9 - 11<br />'
        });
var format_MOINSDE18ANS_2 = new ol.format.GeoJSON();
var features_MOINSDE18ANS_2 = format_MOINSDE18ANS_2.readFeatures(json_MOINSDE18ANS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOINSDE18ANS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOINSDE18ANS_2.addFeatures(features_MOINSDE18ANS_2);
var lyr_MOINSDE18ANS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MOINSDE18ANS_2, 
                style: style_MOINSDE18ANS_2,
                popuplayertitle: "MOINS DE 18 ANS (%)",
                interactive: true,
    title: 'MOINS DE 18 ANS (%)<br />\
    <img src="styles/legend/MOINSDE18ANS_2_0.png" /> 16 - 19<br />\
    <img src="styles/legend/MOINSDE18ANS_2_1.png" /> 19 - 20<br />\
    <img src="styles/legend/MOINSDE18ANS_2_2.png" /> 20 - 21<br />\
    <img src="styles/legend/MOINSDE18ANS_2_3.png" /> 21 - 23<br />\
    <img src="styles/legend/MOINSDE18ANS_2_4.png" /> 23 - 27<br />'
        });
var format_NBMagazinsELECLERCDpartement_3 = new ol.format.GeoJSON();
var features_NBMagazinsELECLERCDpartement_3 = format_NBMagazinsELECLERCDpartement_3.readFeatures(json_NBMagazinsELECLERCDpartement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NBMagazinsELECLERCDpartement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NBMagazinsELECLERCDpartement_3.addFeatures(features_NBMagazinsELECLERCDpartement_3);
var lyr_NBMagazinsELECLERCDpartement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NBMagazinsELECLERCDpartement_3, 
                style: style_NBMagazinsELECLERCDpartement_3,
                popuplayertitle: "NB Magazins E.LECLERC-Département",
                interactive: true,
    title: 'NB Magazins E.LECLERC-Département<br />\
    <img src="styles/legend/NBMagazinsELECLERCDpartement_3_0.png" /> 0 - 5<br />\
    <img src="styles/legend/NBMagazinsELECLERCDpartement_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NBMagazinsELECLERCDpartement_3_2.png" /> 10 - 20<br />\
    <img src="styles/legend/NBMagazinsELECLERCDpartement_3_3.png" /> 20 - 50<br />\
    <img src="styles/legend/NBMagazinsELECLERCDpartement_3_4.png" /> 50 - 80<br />'
        });
var format_NBMagazinsLIDLDpartement_4 = new ol.format.GeoJSON();
var features_NBMagazinsLIDLDpartement_4 = format_NBMagazinsLIDLDpartement_4.readFeatures(json_NBMagazinsLIDLDpartement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NBMagazinsLIDLDpartement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NBMagazinsLIDLDpartement_4.addFeatures(features_NBMagazinsLIDLDpartement_4);
var lyr_NBMagazinsLIDLDpartement_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NBMagazinsLIDLDpartement_4, 
                style: style_NBMagazinsLIDLDpartement_4,
                popuplayertitle: "NB Magazins LIDL-Département",
                interactive: true,
    title: 'NB Magazins LIDL-Département<br />\
    <img src="styles/legend/NBMagazinsLIDLDpartement_4_0.png" /> 0 - 5<br />\
    <img src="styles/legend/NBMagazinsLIDLDpartement_4_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NBMagazinsLIDLDpartement_4_2.png" /> 10 - 20<br />\
    <img src="styles/legend/NBMagazinsLIDLDpartement_4_3.png" /> 20 - 50<br />\
    <img src="styles/legend/NBMagazinsLIDLDpartement_4_4.png" /> 50 - 84<br />'
        });
var format_DEPARTEMENT_5 = new ol.format.GeoJSON();
var features_DEPARTEMENT_5 = format_DEPARTEMENT_5.readFeatures(json_DEPARTEMENT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTEMENT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_5.addFeatures(features_DEPARTEMENT_5);
var lyr_DEPARTEMENT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTEMENT_5, 
                style: style_DEPARTEMENT_5,
                popuplayertitle: "DEPARTEMENT",
                interactive: true,
                title: '<img src="styles/legend/DEPARTEMENT_5.png" /> DEPARTEMENT'
            });
var group_LIMITESADMINISTRATIVES = new ol.layer.Group({
                                layers: [lyr_DEPARTEMENT_5,],
                                fold: "open",
                                title: "LIMITES ADMINISTRATIVES"});
var group_SOP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SOP"});
var group_NBMAGAZINSDEPARTEMENT = new ol.layer.Group({
                                layers: [lyr_NBMagazinsELECLERCDpartement_3,lyr_NBMagazinsLIDLDpartement_4,],
                                fold: "open",
                                title: "NB MAGAZINS (DEPARTEMENT)"});
var group_THEMATIQUE = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "THEMATIQUE"});
var group_PARTPOPULATION = new ol.layer.Group({
                                layers: [lyr_1824ANS_1,lyr_MOINSDE18ANS_2,],
                                fold: "open",
                                title: "PART POPULATION"});
var group_CSP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CSP"});

lyr_OSMStandard_0.setVisible(true);lyr_1824ANS_1.setVisible(true);lyr_MOINSDE18ANS_2.setVisible(true);lyr_NBMagazinsELECLERCDpartement_3.setVisible(true);lyr_NBMagazinsLIDLDpartement_4.setVisible(true);lyr_DEPARTEMENT_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_PARTPOPULATION,group_NBMAGAZINSDEPARTEMENT,group_LIMITESADMINISTRATIVES];
lyr_1824ANS_1.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'DENSITE': 'DENSITE', 'POPULATION': 'POPULATION', 'NB MENAGE': 'NB MENAGE', 'NB EMPLOIE': 'NB EMPLOIE', 'LOGEMENT': 'LOGEMENT', 'AGRICULT': 'AGRICULT', '-18 ans': '-18 ans', '18-24 ans.': '18-24 ans.', '25-39 ans.': '25-39 ans.', '40-54 ans.': '40-54 ans.', '55-64 ans.': '55-64 ans.', '65-79 ans.': '65-79 ans.', '+ 80 ans': '+ 80 ans', 'Agriculteu': 'Agriculteu', 'Artisans.': 'Artisans.', 'Cadres.': 'Cadres.', 'prof.inter': 'prof.inter', 'Employés.': 'Employés.', 'Ouvriers.': 'Ouvriers.', 'Retraités': 'Retraités', 'Inactifs.': 'Inactifs.', 'densité_K': 'densité_K', 'dens_men': 'dens_men', 'NB_loc_hlm': 'NB_loc_hlm', });
lyr_MOINSDE18ANS_2.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'DENSITE': 'DENSITE', 'POPULATION': 'POPULATION', 'NB MENAGE': 'NB MENAGE', 'NB EMPLOIE': 'NB EMPLOIE', 'LOGEMENT': 'LOGEMENT', 'AGRICULT': 'AGRICULT', '-18 ans': '-18 ans', '18-24 ans.': '18-24 ans.', '25-39 ans.': '25-39 ans.', '40-54 ans.': '40-54 ans.', '55-64 ans.': '55-64 ans.', '65-79 ans.': '65-79 ans.', '+ 80 ans': '+ 80 ans', 'Agriculteu': 'Agriculteu', 'Artisans.': 'Artisans.', 'Cadres.': 'Cadres.', 'prof.inter': 'prof.inter', 'Employés.': 'Employés.', 'Ouvriers.': 'Ouvriers.', 'Retraités': 'Retraités', 'Inactifs.': 'Inactifs.', 'densité_K': 'densité_K', 'dens_men': 'dens_men', 'NB_loc_hlm': 'NB_loc_hlm', });
lyr_NBMagazinsELECLERCDpartement_3.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'Nb_magasins_ALDI ': 'Nb_magasins_ALDI ', 'Nb LIDL': 'Nb LIDL', 'nb_leclerc': 'nb_leclerc', 'DISTANCE KM': 'DISTANCE KM', });
lyr_NBMagazinsLIDLDpartement_4.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'Nb_magasins_ALDI ': 'Nb_magasins_ALDI ', 'Nb LIDL': 'Nb LIDL', 'nb_leclerc': 'nb_leclerc', 'DISTANCE KM': 'DISTANCE KM', });
lyr_DEPARTEMENT_5.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'DENSITE': 'DENSITE', 'POPULATION': 'POPULATION', 'NB MENAGE': 'NB MENAGE', 'NB EMPLOIE': 'NB EMPLOIE', 'LOGEMENT': 'LOGEMENT', 'AGRICULT': 'AGRICULT', '-18 ans': '-18 ans', '18-24 ans.': '18-24 ans.', '25-39 ans.': '25-39 ans.', '40-54 ans.': '40-54 ans.', '55-64 ans.': '55-64 ans.', '65-79 ans.': '65-79 ans.', '+ 80 ans': '+ 80 ans', 'Agriculteu': 'Agriculteu', 'Artisans.': 'Artisans.', 'Cadres.': 'Cadres.', 'prof.inter': 'prof.inter', 'Employés.': 'Employés.', 'Ouvriers.': 'Ouvriers.', 'Retraités': 'Retraités', 'Inactifs.': 'Inactifs.', 'densité_K': 'densité_K', 'dens_men': 'dens_men', 'NB_loc_hlm': 'NB_loc_hlm', });
lyr_1824ANS_1.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', 'DENSITE': 'TextEdit', 'POPULATION': 'TextEdit', 'NB MENAGE': 'TextEdit', 'NB EMPLOIE': 'TextEdit', 'LOGEMENT': 'TextEdit', 'AGRICULT': 'TextEdit', '-18 ans': 'TextEdit', '18-24 ans.': 'TextEdit', '25-39 ans.': '', '40-54 ans.': '', '55-64 ans.': '', '65-79 ans.': '', '+ 80 ans': '', 'Agriculteu': '', 'Artisans.': '', 'Cadres.': '', 'prof.inter': '', 'Employés.': '', 'Ouvriers.': '', 'Retraités': '', 'Inactifs.': '', 'densité_K': '', 'dens_men': '', 'NB_loc_hlm': '', });
lyr_MOINSDE18ANS_2.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', 'DENSITE': 'TextEdit', 'POPULATION': 'TextEdit', 'NB MENAGE': 'TextEdit', 'NB EMPLOIE': 'TextEdit', 'LOGEMENT': 'TextEdit', 'AGRICULT': 'TextEdit', '-18 ans': 'TextEdit', '18-24 ans.': '', '25-39 ans.': '', '40-54 ans.': '', '55-64 ans.': '', '65-79 ans.': '', '+ 80 ans': '', 'Agriculteu': '', 'Artisans.': '', 'Cadres.': '', 'prof.inter': '', 'Employés.': '', 'Ouvriers.': '', 'Retraités': '', 'Inactifs.': '', 'densité_K': '', 'dens_men': '', 'NB_loc_hlm': '', });
lyr_NBMagazinsELECLERCDpartement_3.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', 'Nb_magasins_ALDI ': 'TextEdit', 'Nb LIDL': 'TextEdit', 'nb_leclerc': 'Range', 'DISTANCE KM': '', });
lyr_NBMagazinsLIDLDpartement_4.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', 'Nb_magasins_ALDI ': 'TextEdit', 'Nb LIDL': 'TextEdit', 'nb_leclerc': '', 'DISTANCE KM': '', });
lyr_DEPARTEMENT_5.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', 'DENSITE': '', 'POPULATION': '', 'NB MENAGE': '', 'NB EMPLOIE': '', 'LOGEMENT': '', 'AGRICULT': '', '-18 ans': '', '18-24 ans.': '', '25-39 ans.': '', '40-54 ans.': '', '55-64 ans.': '', '65-79 ans.': '', '+ 80 ans': '', 'Agriculteu': '', 'Artisans.': '', 'Cadres.': '', 'prof.inter': '', 'Employés.': '', 'Ouvriers.': '', 'Retraités': '', 'Inactifs.': '', 'densité_K': '', 'dens_men': '', 'NB_loc_hlm': '', });
lyr_1824ANS_1.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'DENSITE': 'no label', 'POPULATION': 'no label', 'NB MENAGE': 'no label', 'NB EMPLOIE': 'no label', 'LOGEMENT': 'no label', 'AGRICULT': 'no label', '-18 ans': 'no label', '18-24 ans.': 'no label', '25-39 ans.': 'no label', '40-54 ans.': 'no label', '55-64 ans.': 'no label', '65-79 ans.': 'no label', '+ 80 ans': 'no label', 'Agriculteu': 'no label', 'Artisans.': 'no label', 'Cadres.': 'no label', 'prof.inter': 'no label', 'Employés.': 'no label', 'Ouvriers.': 'no label', 'Retraités': 'no label', 'Inactifs.': 'no label', 'densité_K': 'no label', 'dens_men': 'no label', 'NB_loc_hlm': 'no label', });
lyr_MOINSDE18ANS_2.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'DENSITE': 'no label', 'POPULATION': 'no label', 'NB MENAGE': 'no label', 'NB EMPLOIE': 'no label', 'LOGEMENT': 'no label', 'AGRICULT': 'no label', '-18 ans': 'no label', '18-24 ans.': 'no label', '25-39 ans.': 'no label', '40-54 ans.': 'no label', '55-64 ans.': 'no label', '65-79 ans.': 'no label', '+ 80 ans': 'no label', 'Agriculteu': 'no label', 'Artisans.': 'no label', 'Cadres.': 'no label', 'prof.inter': 'no label', 'Employés.': 'no label', 'Ouvriers.': 'no label', 'Retraités': 'no label', 'Inactifs.': 'no label', 'densité_K': 'no label', 'dens_men': 'no label', 'NB_loc_hlm': 'no label', });
lyr_NBMagazinsELECLERCDpartement_3.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'Nb_magasins_ALDI ': 'no label', 'Nb LIDL': 'no label', 'nb_leclerc': 'no label', 'DISTANCE KM': 'no label', });
lyr_NBMagazinsLIDLDpartement_4.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'Nb_magasins_ALDI ': 'no label', 'Nb LIDL': 'no label', 'nb_leclerc': 'no label', 'DISTANCE KM': 'no label', });
lyr_DEPARTEMENT_5.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'DENSITE': 'no label', 'POPULATION': 'no label', 'NB MENAGE': 'no label', 'NB EMPLOIE': 'no label', 'LOGEMENT': 'no label', 'AGRICULT': 'no label', '-18 ans': 'no label', '18-24 ans.': 'no label', '25-39 ans.': 'no label', '40-54 ans.': 'no label', '55-64 ans.': 'no label', '65-79 ans.': 'no label', '+ 80 ans': 'no label', 'Agriculteu': 'no label', 'Artisans.': 'no label', 'Cadres.': 'no label', 'prof.inter': 'no label', 'Employés.': 'no label', 'Ouvriers.': 'no label', 'Retraités': 'no label', 'Inactifs.': 'no label', 'densité_K': 'no label', 'dens_men': 'no label', 'NB_loc_hlm': 'no label', });
lyr_DEPARTEMENT_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});