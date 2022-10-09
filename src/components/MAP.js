import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MAP.css";
import geoJson from "./karunya.json";
import axios from "axios";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; 
mapboxgl.accessToken =
  "pk.eyJ1IjoibGVnaW9uLTIzMTQiLCJhIjoiY2wzd3pqeTE4MDA4ejNicGpqYmczd3htOSJ9.6XlFQZGcvDcwBqfj3SiHqQ";

const MAP = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(76.7426);
  const [lat, setLat] = useState(10.9378);
  const [zoom, setZoom] = useState(15.5);
  const [data, setData] = useState(null);
  const getData = async () => {
    const value = await axios.get(`http://192.168.2.176:4321`);
    console.log(value);
    setData(value.data[0]);
  };
  useEffect(() => {
    getData();
  }, []); // <- add empty brackets here

  // Initialize map when component mounts
  useEffect(() => {
    if(data){
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('Admin', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              "properties": {
                "title": "Agriculture / EEE / Bio Medical / Forensic Department",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.741893, 10.935975],
              [76.741935, 10.936515],
              [76.742014, 10.936518],
              [76.742004, 10.936587],
              [76.741915, 10.936677],
              [76.741855, 10.936686],
              [76.741848, 10.936610],
              [76.741552, 10.936644],
              [76.741562, 10.936756],
              [76.741362, 10.936778],
              [76.741349, 10.936665],
              [76.741080, 10.936691],
              [76.741084, 10.936758],
              [76.741025, 10.936770],
              [76.740907, 10.936695],
              [76.740900, 10.936631],
              [76.740965, 10.936610],
              [76.740955, 10.936530],
              [76.740848, 10.936539],
              [76.740812, 10.936289],
              [76.740935, 10.936275],
              [76.740915, 10.93611],
              [76.741893, 10.935975]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "ECE / Robotics / Bio Tech / Media and Communication Department",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.742697, 10.935740],
              [76.742717, 10.935888],
              [76.743062, 10.935855],
              [76.743065, 10.935978],
              [76.743475, 10.935933],
              [76.743510, 10.936294],
              [76.743594, 10.936273],
              [76.743604, 10.936363],
              [76.743524, 10.936465],
              [76.743444, 10.936479],
              [76.743434, 10.936409],
              [76.743130, 10.936439],
              [76.743215, 10.936505],
              [76.743164, 10.936574],
              [76.743050, 10.936589],
              [76.742970, 10.936549],
              [76.743021, 10.936457],
              [76.742734, 10.936485],
              [76.742735, 10.936577],
              [76.742655, 10.936577],
              [76.742555, 10.936510],
              [76.742541, 10.936425],
              [76.742613, 10.936415],
              [76.74253, 10.935765],
              [76.742697, 10.935740]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Administration Block",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.7438868, 10.93588],
              [76.7439078, 10.936205],
              [76.7441378, 10.936185],
              [76.7441379, 10.936225],
              [76.7442871, 10.936215],
              [76.7442840, 10.936170],
              [76.7444880, 10.936154],
              [76.7444560, 10.935820],
              [76.7442462, 10.935842],
              [76.7442462, 10.935822],
              [76.7443082, 10.935817],
              [76.7443082, 10.935729],
              [76.7440379, 10.935749],
              [76.7440379, 10.935790],
              [76.7439898, 10.935792],
              [76.7439911, 10.935864],
              [76.7438868, 10.93588]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Civil Department",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.7437219, 10.935523],
              [76.7440234, 10.9354965],
              [76.7440235, 10.9355590],
              [76.7442190, 10.9355480],
              [76.7442140, 10.9354810],
              [76.7445120, 10.9354575],
              [76.7444880, 10.9351205],
              [76.7441780, 10.9351455],
              [76.7441780, 10.9351005],
              [76.7442693, 10.9350925],
              [76.7442723, 10.9349989],
              [76.7439633, 10.9350180],
              [76.7439653, 10.9351150],
              [76.7440453, 10.9351090],
              [76.7440465, 10.9351550],
              [76.7436955, 10.9351800],
              [76.7437219, 10.935523]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Old Dove Building",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.742725, 10.935417],
              [76.742722, 10.935352],
              [76.742872, 10.935342],
              [76.742870, 10.935222],
              [76.742711, 10.935232],
              [76.742711, 10.935182],
              [76.742627, 10.935186],
              [76.742628, 10.935236],
              [76.742559, 10.935239],
              [76.742562, 10.935356],
              [76.742648, 10.935353],
              [76.742651, 10.935420],
              [76.742725, 10.935417]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "CTC / LIBRARY",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.743195, 10.93539],
              [76.743183, 10.935098],
              [76.743269, 10.935091],
              [76.743266, 10.935032],
              [76.743343, 10.935030],
              [76.743345, 10.935085],
              [76.743577, 10.935070],
              [76.743605, 10.935358],
              [76.743549, 10.935363],
              [76.743549, 10.935380],
              [76.743542, 10.935393],
              [76.743525, 10.935406],
              [76.743328, 10.935416],
              [76.743325, 10.93538],
              [76.743195, 10.93539]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Karunya Media Center",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.743124, 10.934920],
              [76.743014, 10.934925],
              [76.742996, 10.934485],
              [76.743237, 10.934459],
              [76.743277, 10.934489],
              [76.743299, 10.934489],
              [76.743289, 10.934296],
              [76.743459, 10.934287],
              [76.743476, 10.934575],
              [76.743390, 10.934577],
              [76.743390, 10.934557],
              [76.743300, 10.934562],
              [76.743302, 10.934601],
              [76.743208, 10.934606],
              [76.743208, 10.934696],
              [76.743260, 10.934689],
              [76.743282, 10.934767],
              [76.743282, 10.934785],
              [76.743272, 10.934845],
              [76.743122, 10.934843],
              [76.743124, 10.934920]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Mechanical Department",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.743650, 10.934685],
              [76.743630, 10.934245],
              [76.744417, 10.934205],
              [76.744419, 10.934655],
              [76.744191, 10.934665],
              [76.744191, 10.934756],
              [76.743922, 10.934766],
              [76.743916, 10.934677],
              [76.743650, 10.934685]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "Aerospace Department",
                "description": "Old Dove Building",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.745080, 10.934200],
              [76.745091, 10.934500],
              [76.744988, 10.934506],
              [76.744991, 10.934545],
              [76.744903, 10.934551],
              [76.744900, 10.934516],
              [76.744789, 10.934521],
              [76.744774, 10.934216],
              [76.745080, 10.934200]
              ]
              ]
              }
            },
            {
              'type': 'Feature',
              "properties": {
                "title": "CSE Department",
                "icon": "theatre-15"
              },
              'geometry': {
              'type': 'Polygon',
              // These coordinates outline Maine.
              'coordinates': [
              [
              [76.743351, 10.933752],
              [76.743311, 10.933345],
              [76.742968, 10.933379],
              [76.743002, 10.933782],
              [76.743351, 10.933752]
              ]
              ]
              }
            }
          ]
        }
        });
         
        // Add a new layer to visualize the polygon.
        map.addLayer({
        'id': 'Admin',
        'type': 'fill',
        'source': 'Admin', // reference the data source
        'layout': {},
        'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.7
        }
        });
        // Add a black outline around the polygon.
        map.addLayer({
        'id': 'outlineAdmin',
        'type': 'line',
        'source': 'Admin',
        'layout': {},
        'paint': {
        'line-color': '#000',
        'line-width': 1
        }
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
          });

          map.on('mousemove', 'Admin', function(e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';
    
            // Single out the first found feature.
            var feature = e.features[0];
    
            // Display a popup with the name of the county
            popup.setLngLat(e.lngLat)
                .setText(feature.properties.title)
                .addTo(map);
        });
    
        map.on('mouseleave', 'Admin', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
          
        map.addSource('ELOHIM', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
            {
                'type': 'Feature',
                "properties": {
                  "title": "Elohim Auditorium",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.744804, 10.935093],
                [76.744830, 10.935162],
                [76.744817, 10.935223],
                [76.745240, 10.935190],
                [76.745224, 10.935120],
                [76.745232, 10.935061],
                [76.744804, 10.935093]
                ]
                ]
                }
              },
              {
                'type': 'Feature',
                "properties": {
                  "title": "Emmanuel Auditorium",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.745402, 10.933892],
                [76.745370, 10.934012],
                [76.745372, 10.934146],
                [76.744620, 10.934059],
                [76.744652, 10.933941],
                [76.744643, 10.933799],
                [76.745402, 10.933892]
                ]
                ]
                }
                },
                {
                  'type': 'Feature',
                  "properties": {
                    "title": "D.G.S Auditorium",
                    "icon": "theatre-15"
                  },
                  'geometry': {
                  'type': 'Polygon',
                  // These coordinates outline Maine.
                  'coordinates': [
                  [
                  [76.747639, 10.940950],
                  [76.747400, 10.942100],
                  [76.746585, 10.941960],
                  [76.746842, 10.940830],
                  [76.747639, 10.940950]
                  ]
                  ]
                  }
                },
                {
                  'type': 'Feature',
                  "properties": {
                    "title": "Elshadai Auditorium",
                    "icon": "theatre-15"
                  },
                  'geometry': {
                  'type': 'Polygon',
                  // These coordinates outline Maine.
                  'coordinates': [
                  [
                  [76.741340, 10.937140],
                  [76.741550, 10.937120],
                  [76.741650, 10.937660],
                  [76.741450, 10.937693],
                  [76.741340, 10.937140]
                  ]
                  ]
                  }
                },
            ]
          }
        });
                           
          // Add a new layer to visualize the polygon.
          map.addLayer({
            'id': 'ELOHIM',
            'type': 'fill',
              'source': 'ELOHIM', // reference the data source
              'layout': {},
              'paint': {
              'fill-color': '#F7EC09', // blue color fill
              'fill-opacity': 0.7
              }
          });
            // Add a black outline around the polygon.
          map.addLayer({
          'id': 'outlineELOHIM',
          'type': 'line',
          'source': 'ELOHIM',
          'layout': {},
          'paint': {
          'line-color': '#000',
          'line-width': 1
          }
          });

          map.on('mousemove', 'ELOHIM', function(e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';
    
            // Single out the first found feature.
            var feature = e.features[0];
    
            // Display a popup with the name of the county
            popup.setLngLat(e.lngLat)
                .setText(feature.properties.title)
                .addTo(map);
        });
    
        map.on('mouseleave', 'ELOHIM', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

                                map.addSource('GUEST', {
                                  'type': 'geojson',
                                  'data': {
                                      'type': 'Feature',
                                      "properties": {
                                        "title": "Guest House",
                                        "icon": "theatre-15"
                                      },
                                      'geometry': {
                                      'type': 'Polygon',
                                      // These coordinates outline Maine.
                                      'coordinates': [
                                      [
                                      [76.746130, 10.940270],
                                      [76.745970, 10.940050],
                                      [76.745880, 10.940100],
                                      [76.746030, 10.940330],
                                      [76.746030, 10.940430],
                                      [76.745800, 10.940600],
                                      [76.745850, 10.940690],
                                      [76.746050, 10.940570],
                                      [76.746240, 10.940610],
                                      [76.746360, 10.940800],
                                      [76.746460, 10.940750],
                                      [76.746340, 10.940560],
                                      [76.746340, 10.940400],
                                      [76.746540, 10.940240],
                                      [76.746470, 10.940150],
                                      [76.746250, 10.940300],
                                      [76.746130, 10.940270]
                                      ]
                                      ]
                                      }
                                  }
                                  });
                                   
                                  // Add a new layer to visualize the polygon.
                                  map.addLayer({
                                  'id': 'GUEST',
                                  'type': 'fill',
                                  'source': 'GUEST', // reference the data source
                                  'layout': {},
                                  'paint': {
                                  'fill-color': '#789395', // blue color fill
                                  'fill-opacity': 0.7
                                  }
                                  });
                                  // Add a black outline around the polygon.
                                  map.addLayer({
                                  'id': 'outlineGUEST',
                                  'type': 'line',
                                  'source': 'GUEST',
                                  'layout': {},
                                  'paint': {
                                  'line-color': '#000',
                                  'line-width': 1
                                  }
                                  });

                                  map.on('mousemove', 'GUEST', function(e) {
                                    // Change the cursor style as a UI indicator.
                                    map.getCanvas().style.cursor = 'pointer';
                            
                                    // Single out the first found feature.
                                    var feature = e.features[0];
                            
                                    // Display a popup with the name of the county
                                    popup.setLngLat(e.lngLat)
                                        .setText(feature.properties.title)
                                        .addTo(map);
                                });
                            
                                map.on('mouseleave', 'GUEST', function() {
                                    map.getCanvas().style.cursor = '';
                                    popup.remove();
                                });

                                  map.addSource('BOB', {
                                    'type': 'geojson',
                                    'data': {
                                      'type': 'FeatureCollection',
                                      'features': [
                                      {
                                          'type': 'Feature',
                                          "properties": {
                                            "title": "Bobraj Residency",
                                            "icon": "theatre-15"
                                          },
                                          'geometry': {
                                          'type': 'Polygon',
                                          // These coordinates outline Maine.
                                          'coordinates': [
                                          [
                                          [76.745500, 10.940180],
                                          [76.745480, 10.940280],
                                          [76.745200, 10.940230],
                                          [76.744900, 10.940250],
                                          [76.744610, 10.940340],
                                          [76.744590, 10.940240],
                                          [76.744880, 10.940150],
                                          [76.744880, 10.940105],
                                          [76.744560, 10.940035],
                                          [76.744570, 10.939960],
                                          [76.744880, 10.940020],
                                          [76.745180, 10.940010],
                                          [76.745500, 10.939910],
                                          [76.745520, 10.939970],
                                          [76.745190, 10.940080],
                                          [76.745190, 10.940130],
                                          [76.745500, 10.940180]
                                          ]
                                          ]
                                          }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "JMR",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.745560, 10.940940],
                                        [76.745220, 10.940890],
                                        [76.744920, 10.940910],
                                        [76.744630, 10.941000],
                                        [76.744590, 10.940910],
                                        [76.744910, 10.940800],
                                        [76.744910, 10.940760],
                                        [76.744610, 10.940700],
                                        [76.744625, 10.940615],
                                        [76.744925, 10.940675],
                                        [76.745175, 10.940655],
                                        [76.745485, 10.940575],
                                        [76.745515, 10.940665],
                                        [76.745255, 10.940735],
                                        [76.745255, 10.940805],
                                        [76.745565, 10.940865],
                                        [76.745560, 10.940940]
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "JVR",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.745220, 10.941230],
                                        [76.745590, 10.941120],
                                        [76.745610, 10.941200],
                                        [76.745285, 10.941300],
                                        [76.745295, 10.941350],
                                        [76.745585, 10.941410],
                                        [76.745575, 10.941515],
                                        [76.745245, 10.941455],
                                        [76.744975, 10.941465],
                                        [76.744685, 10.941575],
                                        [76.744665, 10.941475],
                                        [76.744965, 10.941375],
                                        [76.744965, 10.941325],
                                        [76.744645, 10.941265],
                                        [76.744645, 10.941185],
                                        [76.744975, 10.941245],
                                        [76.745220, 10.941230]
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "Bethany Residency",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.746110, 10.943025],
                                        [76.745710, 10.943130],
                                        [76.745470, 10.943150],
                                        [76.745190, 10.943100],
                                        [76.745170, 10.943190],
                                        [76.745450, 10.943230],
                                        [76.745470, 10.943290],
                                        [76.745150, 10.943400],
                                        [76.745180, 10.943465],
                                        [76.745480, 10.943375],
                                        [76.745730, 10.943353],
                                        [76.746100, 10.943423],
                                        [76.746120, 10.943342],
                                        [76.745770, 10.943271],
                                        [76.745770, 10.943218],
                                        [76.746130, 10.943128],
                                        [76.746110, 10.943025],
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "Edward George Residency",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.741140, 10.939510],
                                        [76.741139, 10.939560],
                                        [76.740850, 10.939560],
                                        [76.740850, 10.939830],
                                        [76.740760, 10.939830],
                                        [76.740760, 10.939900],
                                        [76.740850, 10.939900],
                                        [76.740850, 10.939980],
                                        [76.741470, 10.939990],
                                        [76.741470, 10.939850],
                                        [76.741560, 10.939850],
                                        [76.741560, 10.939790],
                                        [76.741490, 10.939790],
                                        [76.741490, 10.939510],
                                        [76.741140, 10.939510]
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "FDR",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.740559, 10.940220],
                                        [76.740559, 10.940070],
                                        [76.741832, 10.940090],
                                        [76.741830, 10.940230],
                                        [76.741710, 10.940240],
                                        [76.741710, 10.940160],
                                        [76.741600, 10.940160],
                                        [76.741600, 10.940210],
                                        [76.741510, 10.940210],
                                        [76.741510, 10.940160],
                                        [76.741270, 10.940160],
                                        [76.741270, 10.940185],
                                        [76.741050, 10.940185],
                                        [76.741050, 10.940150],
                                        [76.740800, 10.940150],
                                        [76.740800, 10.940210],
                                        [76.740730, 10.940210],
                                        [76.740730, 10.940150],
                                        [76.740650, 10.940150],
                                        [76.740650, 10.940220],
                                        [76.740559, 10.940220]
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "FDR",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.740579, 10.940270],
                                        [76.740579, 10.940430],
                                        [76.741799, 10.940430],
                                        [76.741799, 10.940270],
                                        [76.741689, 10.940270],
                                        [76.741689, 10.940360],
                                        [76.741579, 10.940360],
                                        [76.741579, 10.940320],
                                        [76.741509, 10.940320],
                                        [76.741509, 10.940360],
                                        [76.741239, 10.940360],
                                        [76.741239, 10.940330],
                                        [76.741047, 10.940330],
                                        [76.741047, 10.940360],
                                        [76.740807, 10.940360],
                                        [76.740807, 10.940310],
                                        [76.740727, 10.940310],
                                        [76.740727, 10.940360],
                                        [76.740647, 10.940360],
                                        [76.740647, 10.940270],
                                        [76.740579, 10.940270]
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "Hebzibah Residency",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.742850, 10.939010],
                                        [76.743755, 10.939030],
                                        [76.743750, 10.939370],
                                        [76.742850, 10.939360],
                                        [76.742850, 10.939280],
                                        [76.742900, 10.939280],
                                        [76.742900, 10.939240],
                                        [76.742850, 10.939240],
                                        [76.742850, 10.939115],
                                        [76.742900, 10.939115],
                                        [76.742900, 10.939080],
                                        [76.742850, 10.939080],
                                        [76.742850, 10.939010],
                                        ]
                                        ]
                                        }
                                      },
                                      {
                                        'type': 'Feature',
                                        "properties": {
                                          "title": "Angelina Residency",
                                          "icon": "theatre-15"
                                        },
                                        'geometry': {
                                        'type': 'Polygon',
                                        // These coordinates outline Maine.
                                        'coordinates': [
                                        [
                                        [76.743740, 10.939390],
                                        [76.743430, 10.939390],
                                        [76.743430, 10.939480],
                                        [76.743015, 10.939480],
                                        [76.743015, 10.939550],
                                        [76.743080, 10.939550],
                                        [76.743080, 10.939580],
                                        [76.743000, 10.939580],
                                        [76.743000, 10.939690],
                                        [76.743080, 10.939690],
                                        [76.743080, 10.939770],
                                        [76.743000, 10.939770],
                                        [76.743000, 10.939850],
                                        [76.743330, 10.939850],
                                        [76.743330, 10.939880],
                                        [76.743530, 10.939880],
                                        [76.743530, 10.939730],
                                        [76.743580, 10.939730],
                                        [76.743580, 10.939830],
                                        [76.743740, 10.939830],
                                        [76.743740, 10.939390]
                                        ]
                                        ]
                                        }
                                      }
                                      ]
                                    }
                                    });
                                     
                                    // Add a new layer to visualize the polygon.
                                    map.addLayer({
                                    'id': 'BOB',
                                    'type': 'fill',
                                    'source': 'BOB', // reference the data source
                                    'layout': {},
                                    'paint': {
                                    'fill-color': '#051367', // blue color fill
                                    'fill-opacity': 0.7
                                    }
                                    });
                                    // Add a black outline around the polygon.
                                    map.addLayer({
                                    'id': 'outlineBOB',
                                    'type': 'line',
                                    'source': 'BOB',
                                    'layout': {},
                                    'paint': {
                                    'line-color': '#000',
                                    'line-width': 1
                                    }
                                    });

                                    map.on('mousemove', 'BOB', function(e) {
                                      // Change the cursor style as a UI indicator.
                                      map.getCanvas().style.cursor = 'pointer';
                              
                                      // Single out the first found feature.
                                      var feature = e.features[0];
                              
                                      // Display a popup with the name of the county
                                      popup.setLngLat(e.lngLat)
                                          .setText(feature.properties.title)
                                          .addTo(map);
                                  });
                              
                                  map.on('mouseleave', 'BOB', function() {
                                      map.getCanvas().style.cursor = '';
                                      popup.remove();
                                  });

        map.addSource('GIRLS2', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
            {
                'type': 'Feature',
                "properties": {
                  "title": "DMR",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.739910, 10.938123],
                [76.740450, 10.938035],
                [76.740390, 10.937665],
                [76.740100, 10.937705],
                [76.740090, 10.937625],
                [76.739990, 10.937639],
                [76.739990, 10.937719],
                [76.739840, 10.937739],
                [76.739850, 10.937809],
                [76.739800, 10.937819],
                [76.739840, 10.938069],
                [76.739900, 10.938059],
                [76.739910, 10.938123]
                ]
                ]
                }
              },
              {
                'type': 'Feature',
                "properties": {
                  "title": "PGR",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.739380, 10.938190],
                [76.739350, 10.937890],
                [76.739400, 10.937880],
                [76.739400, 10.937840],
                [76.739170, 10.937880],
                [76.739180, 10.937780],
                [76.739200, 10.937780],
                [76.739160, 10.937620],
                [76.739230, 10.937615],
                [76.739230, 10.937600],
                [76.739180, 10.937600],
                [76.739180, 10.937550],
                [76.739280, 10.937550],
                [76.739290, 10.937600],
                [76.739350, 10.937600],
                [76.739360, 10.937690],
                [76.739420, 10.937690],
                [76.739440, 10.937820],
                [76.739690, 10.937780],
                [76.739710, 10.937910],
                [76.739750, 10.937910],
                [76.739750, 10.938130],
                [76.739380, 10.938190]
                ]
                ]
                }
              },
              {
                'type': 'Feature',
                "properties": {
                  "title": "SPR",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.739630, 10.937513],
                [76.739740, 10.937586],
                [76.739900, 10.937556],
                [76.739970, 10.937456],
                [76.740201, 10.937416],
                [76.740181, 10.937286],
                [76.739959, 10.937316],
                [76.739859, 10.937256],
                [76.739759, 10.937256],
                [76.739739, 10.937106],
                [76.739339, 10.937176],
                [76.739369, 10.937306],
                [76.739679, 10.937256],
                [76.739679, 10.937286],
                [76.739589, 10.937386],
                [76.739369, 10.937416],
                [76.739389, 10.937546],
                [76.739630, 10.937513]
                ]
                ]
                }
              },
              {
                'type': 'Feature',
                "properties": {
                  "title": "SRR",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.73950, 10.93710],
                [76.74015, 10.93700],
                [76.74013, 10.93683],
                [76.73980, 10.93687],
                [76.73980, 10.93675],
                [76.74001, 10.93677],
                [76.74007, 10.93670],
                [76.73970, 10.93640],
                [76.73965, 10.93623],
                [76.73955, 10.93623],
                [76.73955, 10.93640],
                [76.73950, 10.93640],
                [76.73915, 10.93610],
                [76.73912, 10.93615],
                [76.73920, 10.93622],
                [76.73910, 10.93622],
                [76.73905, 10.93635],
                [76.73910, 10.93635],
                [76.73910, 10.93640],
                [76.73894, 10.93638],
                [76.73895, 10.93648],
                [76.73950, 10.93658],
                [76.73930, 10.93683],
                [76.73939, 10.93686],
                [76.73955, 10.93667],
                [76.73950, 10.93692],
                [76.73929, 10.93694],
                [76.73930, 10.93712],
                [76.73950, 10.93710],
                ]
                ]
                }
              },
              {
                'type': 'Feature',
                "properties": {
                  "title": "EVR / OPERA",
                  "icon": "theatre-15"
                },
                'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                [
                [76.73882, 10.93565],
                [76.73876, 10.93490],
                [76.73926, 10.93488],
                [76.73924, 10.93445],
                [76.73828, 10.93452],
                [76.73828, 10.93467],
                [76.73860, 10.93467],
                [76.73860, 10.93480],
                [76.73840, 10.93480],
                [76.73842, 10.93520],
                [76.73863, 10.93520],
                [76.73866, 10.93565],
                [76.73844, 10.93565],
                [76.73844, 10.93577],
                [76.73882, 10.93577],
                [76.73882, 10.93565],
              
                
                ]
                ]
                }
              }
            ]
          }
          });
           
          // Add a new layer to visualize the polygon.
          map.addLayer({
          'id': 'GIRLS2',
          'type': 'fill',
          'source': 'GIRLS2', // reference the data source
          'layout': {},
          'paint': {
          'fill-color': '#FF6FB5', // blue color fill
          'fill-opacity': 0.7
          }
          });
          // Add a black outline around the polygon.
          map.addLayer({
          'id': 'outlineGIRLS2',
          'type': 'line',
          'source': 'GIRLS2',
          'layout': {},
          'paint': {
          'line-color': '#000',
          'line-width': 1
          }
        });

        map.on('mousemove', 'GIRLS2', function(e) {
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer';
  
          // Single out the first found feature.
          var feature = e.features[0];
  
          // Display a popup with the name of the county
          popup.setLngLat(e.lngLat)
              .setText(feature.properties.title)
              .addTo(map);
      });
  
      map.on('mouseleave', 'GIRLS2', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
      });
      });
    
      geoJson.features.map((feature) =>
      new mapboxgl.Marker({ 
        scale: 0.7 })
        .setLngLat([
          feature.geometry.coordinates[0],
          feature.geometry.coordinates[1],
        ])
        .addTo(map)
        // .setPopup(
        //   new mapboxgl.Popup({ offset: 30 }).setHTML(
        //     "<h4>" +
        //       feature.properties.title +
        //       "</h4>"
        //   )
        // )
    );

    const ATM1 = new mapboxgl.Marker({
        color: "#B93160",
        draggable: false,
        scale: 0.7
        }).setLngLat([76.7442, 10.9366])
        .addTo(map)
        .setPopup(
            new mapboxgl.Popup({ offset: 30 }).setHTML(
              "<h4>TMB ATM</h4>"
            )
          );

    const ATM2 = new mapboxgl.Marker({
            color: "#B93160",
            draggable: false,
            scale: 0.7
            }).setLngLat([76.7405, 10.9369])
            .addTo(map)
            .setPopup(
                new mapboxgl.Popup({ offset: 30 }).setHTML(
                  "<h4>ATM</h4>"
                )
              );
    
    const ATM3 = new mapboxgl.Marker({
                color: "#B93160",
                draggable: false,
                scale: 0.7
                }).setLngLat([76.7410, 10.9384])
                .addTo(map)
                .setPopup(
                    new mapboxgl.Popup({ offset: 30 }).setHTML(
                      "<h4>ATM</h4>"
                    )
                  );
    
    const ATM4 = new mapboxgl.Marker({
                    color: "#B93160",
                    draggable: false,
                    scale: 0.7
                    }).setLngLat([76.7450, 10.9378])
                    .addTo(map)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 30 }).setHTML(
                          "<h4>ATM</h4>"
                        )
                      );

    const ATM5 = new mapboxgl.Marker({
                        color: "#B93160",
                        draggable: false,
                        scale: 0.7
                        }).setLngLat([76.7459, 10.9394])
                        .addTo(map)
                        .setPopup(
                            new mapboxgl.Popup({ offset: 30 }).setHTML(
                              "<h4>CANARA ATM</h4>"
                            )
                          );

    const ATM6 = new mapboxgl.Marker({
                            color: "#B93160",
                            draggable: false,
                            scale: 0.7
                            }).setLngLat([76.7436, 10.9363])
                            .addTo(map)
                            .setPopup(
                                new mapboxgl.Popup({ offset: 30 }).setHTML(
                                  "<h4>SBI ATM</h4>"
                                )
                              );
    
    const CANTEEN1 = new mapboxgl.Marker({
            color: "#5BB318",
            draggable: false,
            scale: 0.7
            }).setLngLat([76.7436, 10.9354])
            .addTo(map)
            .setPopup(
                new mapboxgl.Popup({ offset: 30 }).setHTML(
                  "<h4>Cake World</h4>"
                )
              );

    const CANTEEN2 = new mapboxgl.Marker({
                color: "#5BB318",
                draggable: false,
                scale: 0.7
                }).setLngLat([76.7440, 10.9366])
                .addTo(map)
                .setPopup(
                    new mapboxgl.Popup({ offset: 30 }).setHTML(
                      "<h4>Cafe Coffee Day</h4>"
                    )
                  );

    const GUEST = new mapboxgl.Marker({
                    color: "#789395",
                    draggable: false,
                    scale: 0.7
                    }).setLngLat([76.7462, 10.9404])
                    .addTo(map);
                    // .setPopup(
                    //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                    //       "<h4>Karunya Guest House</h4>"
                    //     )
                    //   );

    const LADIES = new mapboxgl.Marker({
                        color: "#FF6FB5",
                        draggable: false,
                        scale: 0.7
                        }).setLngLat([76.7395, 10.9370])
                        .addTo(map);
                        // .setPopup(
                        //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                        //       "<h4>Ladies Hostel</h4>"
                        //     )
                        //   );

    const MEN1 = new mapboxgl.Marker({
                            color: "#051367",
                            draggable: false,
                            scale: 0.7
                            }).setLngLat([76.7433, 10.93915])
                            .addTo(map);
                            // .setPopup(
                            //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                            //       "<h4>Hebzibah / Angelina Residency</h4>"
                            //     )
                            //   );

                            const MEN10 = new mapboxgl.Marker({
                              color: "#051367",
                              draggable: false,
                              scale: 0.7
                              }).setLngLat([76.7433, 10.93965])
                              .addTo(map);
                              // .setPopup(
                              //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                              //       "<h4>Hebzibah / Angelina Residency</h4>"
                              //     )
                              //   );

    const MEN2 = new mapboxgl.Marker({
                                color: "#051367",
                                draggable: false,
                                scale: 0.7
                                }).setLngLat([76.7412, 10.9397])
                                .addTo(map);
                                // .setPopup(
                                //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                //       "<h4>FDR / Edward George Residency</h4>"
                                //     )
                                //   );

                                const MEN12 = new mapboxgl.Marker({
                                  color: "#051367",
                                  draggable: false,
                                  scale: 0.7
                                  }).setLngLat([76.7412, 10.9402])
                                  .addTo(map);
                                  // .setPopup(
                                  //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                  //       "<h4>FDR / Edward George Residency</h4>"
                                  //     )
                                  //   );

const MEN3 = new mapboxgl.Marker({
                                    color: "#051367",
                                    draggable: false,
                                    scale: 0.7
                                    }).setLngLat([76.7451, 10.9408])
                                    .addTo(map);
                                    // .setPopup(
                                    //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                    //       "<h4>JMR Hostel</h4>"
                                    //     )
                                    //   );

const MEN4 = new mapboxgl.Marker({
                                        color: "#051367",
                                        draggable: false,
                                        scale: 0.7
                                        }).setLngLat([76.7451, 10.9413])
                                        .addTo(map);
                                        // .setPopup(
                                        //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                        //       "<h4>JVR Hostel</h4>"
                                        //     )
                                        //   );

const MEN5 = new mapboxgl.Marker({
                                            color: "#051367",
                                            draggable: false,
                                            scale: 0.7
                                            }).setLngLat([76.7450, 10.9401])
                                            .addTo(map);
                                            // .setPopup(
                                            //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                            //       "<h4>Bobraj Residency</h4>"
                                            //     )
                                            //   );

const MEN6 = new mapboxgl.Marker({
                                                color: "#051367",
                                                draggable: false,
                                                scale: 0.7
                                                }).setLngLat([76.7456, 10.9432])
                                                .addTo(map);
                                                // .setPopup(
                                                //   new mapboxgl.Popup({ offset: 30 }).setHTML(
                                                //     "<h4>Bethany Residency</h4>"
                                                //   )
                                                // );

    const CANTEEN3 = new mapboxgl.Marker({
                color: "#5BB318",
                draggable: false,
                scale: 0.7
                }).setLngLat([76.7421, 10.9366])
                .addTo(map)
                .setPopup(
                    new mapboxgl.Popup({ offset: 30 }).setHTML(
                      "<h4>Cake World</h4>"
                    )
                  );

    const CANTEEN4 = new mapboxgl.Marker({
                    color: "#5BB318",
                    draggable: false,
                    scale: 0.7
                    }).setLngLat([76.7440, 10.9335])
                    .addTo(map)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 30 }).setHTML(
                          "<h4>Canteen</h4>"
                        )
                      );

    const AUDIT1 = new mapboxgl.Marker({
                        color: "#F7EC09",
                        draggable: false,
                        scale: 0.7
                        }).setLngLat([76.7450, 10.9339])
                        .addTo(map);
                        // .setPopup(
                        //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                        //       "<h4>Emmanuel Auditorium</h4>"
                        //     )
                        //   );
    
    const AUDIT2 = new mapboxgl.Marker({
                            color: "#F7EC09",
                            draggable: false,
                            scale: 0.7
                            }).setLngLat([76.7450, 10.9351])
                            .addTo(map);
                            // .setPopup(
                            //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                            //       "<h4>Elohim Auditorium</h4>"
                            //     )
                            //   );

    const AUDIT3 = new mapboxgl.Marker({
                                color: "#F7EC09",
                                draggable: false,
                                scale: 0.7
                                }).setLngLat([76.7415, 10.9374])
                                .addTo(map);
                                // .setPopup(
                                //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                //       "<h4>Elshadai Auditorium</h4>"
                                //     )
                                //   );

    const AUDIT4 = new mapboxgl.Marker({
                                    color: "#F7EC09",
                                    draggable: false,
                                    scale: 0.7
                                    }).setLngLat([76.7471, 10.9414])
                                    .addTo(map);
                                    // .setPopup(
                                    //     new mapboxgl.Popup({ offset: 30 }).setHTML(
                                    //       "<h4>D.G.S Auditorium</h4>"
                                    //     )
                                    //   );
    

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    function forwardGeocoder(query) {
      const matchingFeatures = [];
      for (const feature of geoJson.features) {
      
      if (
      feature.properties.title
      .toLowerCase()
      .includes(query.toLowerCase())
      ) {
      
      feature['place_name'] = ` ${feature.properties.title}`;
      feature['center'] = feature.geometry.coordinates;
      feature['place_type'] = ['park'];
      matchingFeatures.push(feature);
      }
      }
      return matchingFeatures;
      }  
      map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        
        localGeocoder: forwardGeocoder,
        zoom: 19.50,
        marker:false,
        placeholder: ' Search ',
        mapboxgl: mapboxgl
        }),'top-left'
        );
    // Clean up on unmount
    return () => map.remove();
  }
   
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="Colorcode">
        <div className="Line">
          <div class='box lightblue'></div> 
          <div>Academic Buildings</div>
        </div>
        <div className="Line">
          <div class='box yellow'></div> 
          <div>Auditorium</div>
        </div>
        <div className="Line">
          <div class='box darkblue'></div> 
          <div>Men's Hostel</div>
        </div>
        <div className="Line">
          <div class='box pink'></div> 
          <div>Ladies' Hostel</div>
        </div>
        <div className="Line">
          <div class='box red'></div> 
          <div>ATMs</div>
        </div>
        <div className="Line">
          <div class='box green'></div> 
          <div>Canteen</div>
        </div>
        <div className="Line">
          <div class='box grey'></div> 
          <div>Guest House</div>
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default MAP;
