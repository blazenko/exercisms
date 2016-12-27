'use strict';

const Bob = function() {
    const hasText = txt => {
        const digits = txt.match(/\d/g);
        const chars = txt.match(/\w/g);
        
        if (chars === null) return false;
        if (digits !== null) return chars.length > digits.length;
        return true;
    };
    
    const isShout = txt => {
        return txt === txt.toUpperCase() && hasText(txt);
    };
    
    const isQuestion = txt => {
        return txt.endsWith('?') && !isShout(txt);
    };
    
    const justWhitespace = txt => {
        return txt.trim() === '';
    };
    
    this.hey = (txt) => {
        if (justWhitespace(txt)) {
            return 'Fine. Be that way!';
        }
    
        if (isQuestion(txt)) {
            return 'Sure.';
        }
    
        if (isShout(txt)) {
            return 'Whoa, chill out!';
        }

        return 'Whatever.';
    }
};

module.exports = Bob;
