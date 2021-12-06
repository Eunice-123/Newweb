
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleRoad_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Housing_Zones_1": {
            "type": "geojson",
            "data": json_Housing_Zones_1
        }
                    ,
        "lp_ancient_monuments_and_sites_of_archaeological_interest_2": {
            "type": "geojson",
            "data": json_lp_ancient_monuments_and_sites_of_archaeological_interest_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleRoad_0_0",
            "type": "raster",
            "source": "GoogleRoad_0"
        },
        {
            "id": "lyr_Housing_Zones_1_0",
            "type": "fill",
            "source": "Housing_Zones_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#8d5a99'}
        }
,
        {
            "id": "lyr_lp_ancient_monuments_and_sites_of_archaeological_interest_2_0",
            "type": "fill",
            "source": "lp_ancient_monuments_and_sites_of_archaeological_interest_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e15989'}
        }
],
}