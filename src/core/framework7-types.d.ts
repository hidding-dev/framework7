import Dom7 from 'dom7';
// IMPORT_BASE

import request, {
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
} from './shared/request';
import { getSupport, Support } from './shared/get-support';
import { getDevice, Device } from './shared/get-device';
import { Utils } from './shared/utils';
import { Framework7Parameters, Framework7Plugin } from './components/app/app-class';

// IMPORT_MODULES
import { ComponentFunction as Component } from './modules/component/component';
import { StoreObject as Store, StoreParameters, createStore } from './modules/store/store';

// IMPORT_COMPONENTS

declare module './components/app/app-class' {
  // INSTALL
}

export {
  request,
  RequestError,
  RequestResponse,
  RequestParameters,
  RequestXHR,
  getSupport,
  Support,
  getDevice,
  Device,
  Utils,
  Dom7,
  Component,
  Framework7Parameters,
  Framework7Plugin,
  RouterModule as Router,
  Store,
  StoreParameters,
  createStore,
};
// EXPORT_COMPONENTS
export default Framework7;
