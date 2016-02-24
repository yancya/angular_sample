'use strict';

class MonitorCtrl {
    constructor(CommonValueService) {
        this.CommonValueService = CommonValueService;
    }
    
    get commonValue() {
        return this.CommonValueService.commonValue;
    }
};

MonitorCtrl.$inject = ['CommonValueService'];

export default MonitorCtrl;
