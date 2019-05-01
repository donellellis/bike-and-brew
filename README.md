# W&OD Trail Bike and Brew
An interactive map displaying breweries along the Washington and Old Dominion Trail and access via Arlington bike routes. The map contains pop-ups displaying information about the breweries and names of the bike trails. The bike route legend allows a user to filter Arlington bike routes by type: off-street trail, bike lane or sharrow, or recommended route. The map was created using the Esri ArcGIS JavsScript API. The majority of the code is boilerplate ane provided by an outside source. My code additions are listed below.

## Code Additions
* Created feature layers for breweries, bike trails, and Arlington bike routes
* Created pop-ups displaying relevant information for each the above feature layers
* Customized the user interface by creating a sidebar with legend
* Created filters for the Arlington bike route legend
* Styled the user interface with SCSS

## Author
**Donell Ellis** https://github.com/donellellis

## Getting Started
![W&OD Trail Bike and Brew](https://i.imgur.com/BB8QcF8.jpg)

## Installing
1. `npm install` to install dependencies
2. `npm start` to run the server and launch the application locally

## Built With
* ArcGIS JavsScript API
* React
* SCSS

#### Resources
* [ArcGIS JavaScript API](https://js.arcgis.com)
* [Virginia Breweries](http://hub.arcgis.com/datasets/71afb69cb33645c5b975b425777e2087_1?geometry=-77.388%2C38.873%2C-76.894%2C38.967)
* [Virginia Bicycle Facility Inventory](http://hub.arcgis.com/datasets/abcfbd0bdc234494be9544c84f8a283e_0)
* [Arlington Bike Route Lines](http://hub.arcgis.com/datasets/3e76860e343a4462b2d724e4458c5b1d_0?geometry=-77.225%2C38.864%2C-76.978%2C38.911)


