'use strict';

class CommonValueService {
    constructor(SubValueService) {
        this.commonValue = 0;
        this.hoge = 'initialized';
        this.SubValueService = SubValueService;
    }

    increment() {
        this.commonValue++;
    }

    decrement() {
        if (this.commonValue > 0) {
            this.commonValue--;
        } else {
            throw new Error('This value can\'t be negative.');
        }
    }

    elementByFuga() {
        return ['a', 'b', 'c', 'd', 'e'][this.SubValueService.n];
    }
};

CommonValueService.$inject = ['SubValueService'];

export default CommonValueService;
