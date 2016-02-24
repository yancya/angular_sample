'use strict';

export default class CommonValueService {
    constructor() {
        this.commonValue = 0;
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
};
