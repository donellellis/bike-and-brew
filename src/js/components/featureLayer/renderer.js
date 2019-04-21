//styles primary bike trails
export const bikeTrailVirginiaRenderer = {
"type": "unique-value",
"field": "Facility_Name",
"uniqueValueInfos": [
    {
    "value": "Washington & Old Dominion Trail",
    "symbol": {
        "color": "#FCF6B1", //light yellow
        "width": 4,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Washington & Old Dominion Trail"
    },
    {
    "value": "Mount Vernon Trail",
    "symbol": {
        "color": "#F7B32B",//dark yellow
        "width": 3,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Mount Vernon Trail"
    },
    {
    "value": "Custis Trail",
    "symbol": {
        "color": "#F7B32B",//dark yellow
        "width": 3,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Custis Trail"
    },
    {
        "value": "Four Mile Run Trail",
        "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 2.5,
            "type": "simple-line",
            "style": "solid"
        },
        "label": "Four Mile Run Trail"
        },
        {
        "value": "Shirlington Connector",
        "symbol": {
            "color": "#F7B32B",//dark yellow
            "width": 2.5,
            "type": "simple-line",
            "style": "solid"
        },
        "label": "Shirlington Connector"
        }
]
}

//styles Arlington bike trails
export const bikeTrailArlingtonRenderer = {
"type": "unique-value",
"field": "Route_Type",
"uniqueValueInfos": [
    {
    "value": "Recommended Route",
    "symbol": {
        "color": "#C5283D", //medium pink
        "width": .5,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Recommended Route"
    },
    {
    "value": "Off Street Trail",
    "symbol": {
        "color": "#F7B32B",//dark yellow
        "width": 1,
        "type": "simple-line",
        "style": "dot"
    },
    "label": "Off Street Trail"
    },
    {
    "value": "Bicycle Lane",
    "symbol": {
        "color": "#FAA275", //light pink
        "width": 1.5,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Bicycle Lane"
    },
    {
    "value": "Sharrow",
    "symbol": {
        "color": "#FAA275", //light pink
        "width": 1.5,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Sharrow"
    },
    {
    "value": "Buffered Bike Lane",
    "symbol": {
        "color": "#FAA275", //light pink
        "width": 1.5,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Buffered Bike Lane"
    },
    {
    "value": "Protected Bike Lane",
    "symbol": {
        "color": "#FAA275", //light pink
        "width": 1.5,
        "type": "simple-line",
        "style": "solid"
    },
    "label": "Protected Bike Lane"
    }
]
}

//adds symbol for breweries
export const breweriesVirginiaRenderer = {
"type": "simple",
"symbol": {
    "type": "picture-marker",
    "url": "https://i.imgur.com/7HQd1S8.png",
    "width": 25,
    "height": 25
}
}