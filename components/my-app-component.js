'use strict';

import MyAppCtrl from '../controllers/my-app-controller.js';

let MyAppComponent = { 
    name: 'MyAppComponent',
    template: `<greeting name="'World'"></greeting>`,
    controller: MyAppCtrl
};

export default MyAppComponent;
