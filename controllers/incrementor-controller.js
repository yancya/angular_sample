'use strict';

class IncrementorCtrl {
    constructor(CommonValueService) {
        this.CommonValueService = CommonValueService;
    }
    
    increment() {
        this.CommonValueService.commonValue++;
    }
};

IncrementorCtrl.$inject = ['CommonValueService'];

export default IncrementorCtrl;
