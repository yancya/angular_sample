'use strict';

class DecrementorCtrl {
    constructor(CommonValueService) {
        this.CommonValueService = CommonValueService;
    }
    
    decrement() {
        try {
            this.CommonValueService.decrement();
        } catch(e) {
            console.log(e.message);
        }
    }
};

DecrementorCtrl.$inject = ['CommonValueService'];

export default DecrementorCtrl;
