'use strict';

class DecrementorCtrl {
    constructor(CommonValueService, SubValueService) {
        this.CommonValueService = CommonValueService;
        this.SubValueService = SubValueService;
    }
    
    decrement() {
        try {
            this.CommonValueService.decrement();
        } catch(e) {
            console.log(e.message);
        }
    }

    get fuga() {
        return this.CommonValueService.elementByFuga();
    }
};

DecrementorCtrl.$inject = ['CommonValueService', 'SubValueService'];

export default DecrementorCtrl;
