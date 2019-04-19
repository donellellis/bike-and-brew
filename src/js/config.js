export const INITIAL_STATE = {
  locateModalVisible: false,
  shareModalVisible: false,
  viewReady: false,
  itemInfo: {}
};

export const TEXT = {
  title: 'Esri Example',
  subtitle: 'Example with React, Esri, Sass, and more.'
};

export const MAP_OPTIONS = {
  basemap: 'dark-gray-vector'
};

export const VIEW_OPTIONS = {
  ui: { components: ['logo', 'attribution'] },
  center: [-77.10, 38.88],
  zoom: 11.7
};

export const URLS = {
  itemInfo: appid => `//www.arcgis.com/sharing/rest/content/items/${appid}/data`
};
