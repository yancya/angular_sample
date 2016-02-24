'use strict';

import angular from 'angular';
import MyAppComponent from './components/my-app-component.js';
import GreetingComponent from './components/greeting-component.js';
import MonitorComponent from './components/monitor-component.js';
import IncrementorComponent from './components/incrementor-component.js';
import DecrementorComponent from './components/decrementor-component.js';
import CommonValueService from './services/common-value-service.js';

const APP = angular.module("app", []);

APP.service('CommonValueService', CommonValueService);

APP.component('myApp', MyAppComponent).
    component('greeting', GreetingComponent).
    component('monitor', MonitorComponent).
    component('incrementor', IncrementorComponent).
    component('decrementor', DecrementorComponent);

window.addEventListener(
    'load',
    () => angular.bootstrap(document.body, [APP.name])
);
