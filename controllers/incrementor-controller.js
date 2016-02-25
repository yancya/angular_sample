'use strict';

class IncrementorCtrl {
    constructor(CommonValueService, SubValueService) {
        this.CommonValueService = CommonValueService;
        this.SubValueService = SubValueService;
    }
    
    increment() {
        this.CommonValueService.increment();
    }

    get fuga() {
        return this.data2[this.SubValueService.n];
    }

    get indexes() {
        return Array(5).fill(0).map((_, i) => i.toString());
    }
};

IncrementorCtrl.$inject = ['CommonValueService', 'SubValueService'];

export default IncrementorCtrl;
