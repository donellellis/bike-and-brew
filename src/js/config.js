export const INITIAL_STATE = {
  locateModalVisible: false,
  shareModalVisible: false,
  viewReady: false,
  itemInfo: {}
};

export const TEXT = {
  title: 'Washington and Old Dominion Trail',
  subtitle: 'Bike and Brew',
  location: 'Arlington'
};

export const MAP_OPTIONS = {
  basemap: 'dark-gray-vector'
};

export const VIEW_OPTIONS = {
  ui: { components: ['logo', 'attribution'] },
  center: [-77.13, 38.88],
  zoom: 11.7
};

export const URLS = {
  itemInfo: appid => `//www.arcgis.com/sharing/rest/content/items/${appid}/data`
};
