'use strict';

class PhoneNumber {
    
    constructor(input) {
        this.input = input;
        this.fail = '0000000000';
    }
    
    number() {
        const rx = /([^0-9])/g;
        const clean = this.input.replace(rx, '');
    
        if (clean.length !== 10) {
            if (clean.length === 11 && clean[0] === '1') {
                return clean.substr(1);
            }
            return this.fail;
        }
        
        return clean;
    }
    
    areaCode() {
        if (this._validInput()) {
            return this.number().substr(0, 3);
        }
        
        return this.fail;
    }
    
    toString() {
        if (this._validInput()) {
            const num = this.number();
            const part1 = num.substr(0, 3);
            const part2 = num.substr(3, 3);
            const part3 = num.substr(6);
            
            return `(${part1}) ${part2}-${part3}`;
        }
        
        return this.fail;
    }
    
    _validInput() {
        return this.number() !== this.fail;
    }
};

module.exports = PhoneNumber;
