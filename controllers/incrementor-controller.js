'use strict';

class IncrementorCtrl {
    constructor(CommonValueService) {
        this.CommonValueService = CommonValueService;
    }
    
    increment() {
        this.CommonValueService.increment();
    }
};

IncrementorCtrl.$inject = ['CommonValueService'];

export default IncrementorCtrl;
