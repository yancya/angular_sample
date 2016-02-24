'use strict';

import GreetingCtrl from '../controllers/greeting-controller.js';

let GreetingComponent = {
    bindings: {
        name: "="
    },
    templateUrl: './templates/greeting-template.html',
    controller: GreetingCtrl
};

export default GreetingComponent;
