'use strict';

import IncrementorCtrl from '../controllers/incrementor-controller.js';

let IncrementorComponent = {
    templateUrl: './templates/incrementor-template.html',
    bindings: {
        data2: '='
    },
    controller: IncrementorCtrl
};

export default IncrementorComponent;
