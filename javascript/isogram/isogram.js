'use strict';

const Isogram = function(word) {
    this.isIsogram = () => {
        const subject = word.toLowerCase().replace(/[^\w'\u00C0-\u017F\u0430-\u044f]+/g, '');
        const letters = [];
        
        for (const ch of subject) {
            if (letters.indexOf(ch) > -1) {
                return false;
            }
            letters.push(ch);
        }
        
        return true;
    }
};

module.exports = Isogram;
