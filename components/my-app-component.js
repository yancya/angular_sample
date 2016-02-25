'use strict';

import MyAppCtrl from '../controllers/my-app-controller.js';

let MyAppComponent = { 
    templateUrl: './templates/my-app-template.html',
    bindings: {
        data: '='
    },
    controller: MyAppCtrl
};

export default MyAppComponent;
