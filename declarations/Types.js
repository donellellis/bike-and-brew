/*eslint-disable */

// My App Types
declare type AppState = {
  locateModalVisible: bool,
  shareModalVisible: bool,
  viewReady: bool
};

declare type ModalProps = { active: bool };

// Redux Types
declare type ReduxAction = {
  type: string,
  data?: any
};

// Esri Types
declare type EsriView = Object | {
  goTo: Function,
  zoom: number
};