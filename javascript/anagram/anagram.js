'use strict';

class Anagram {
    
    constructor(input) {
        this.input = input;
    }
    
    
    matches() {
        const candidates = (arguments[0] instanceof Array) ? arguments[0] : [].slice.call(arguments);
        const result = [];
        
        candidates.forEach(candidate => {
            if (this._checkCandidate(candidate)) {
                result.push(candidate);
            }
        });
        
        return result;
    }
    
    
    _checkCandidate(candidate) {
        if (candidate.toLowerCase() === this.input.toLowerCase()) {
            return false;
        }
        
        return this._normalize(candidate) === this._normalize(this.input);
    }
    
    
    _normalize(input) {
        return input.toLowerCase().split('').sort().join('');
    }
}

module.exports = Anagram;
