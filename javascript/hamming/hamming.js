'use strict';

const Hamming = function() {
    this.compute = (str1, str2) => {
        if (str1.length !== str2.length) throw new Error('DNA strands must be of equal length.');
        
        let diffCount = 0;
        
        for (let i=0; i<str1.length; i++) {
            if (str1[i] !== str2[i]) diffCount++;
        }
        
        return diffCount;
    }
};

module.exports = Hamming;
