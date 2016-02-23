'use strict';

import GreetingCtrl from '../controllers/greeting-controller.js';

let GreetingComponent = {
    bindings: {
        name: "="
    },
    template: `<h1>Hello {{$ctrl.upperName}}!</h1>`,
    controller: GreetingCtrl
};

export default GreetingComponent;
