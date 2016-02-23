'use strict';

import angular from 'angular';
import MyAppComponent from './components/my-app-component.js';
import GreetingComponent from './components/greeting-component.js';

console.dir(MyAppComponent);

const APP = angular.
          module("app", []).
          component('myApp', MyAppComponent).
          component('greeting', GreetingComponent);

window.addEventListener(
    'load',
    () => angular.bootstrap(document.body, [APP.name])
);

