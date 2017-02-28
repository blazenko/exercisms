'use strict';

const Pangram = function(src) {
    this.isPangram = () => {
        const stash = 'abcdefghijklmnopqrstuvwxyz';
        const sentence = src.toLowerCase().replace(/[^a-z]/g, '');
        
        for (let char of stash) {
            if (sentence.indexOf(char) == -1) return false;
        }
        
        return true;
    }
};

module.exports = Pangram;
