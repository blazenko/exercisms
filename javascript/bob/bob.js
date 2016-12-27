'use strict';

const Bob = function() {
    const replaceDigits = txt => {
        let replaced = txt;
        replaced = replaced.replace(/1/g, 'one');
        replaced = replaced.replace(/2/g, 'two');
        replaced = replaced.replace(/3/g, 'three');
        replaced = replaced.replace(/4/g, 'four');
        replaced = replaced.replace(/5/g, 'five');
        replaced = replaced.replace(/6/g, 'six');
        replaced = replaced.replace(/7/g, 'seven');
        replaced = replaced.replace(/8/g, 'eight');
        replaced = replaced.replace(/9/g, 'nine');
        replaced = replaced.replace(/0/g, 'zero');
        return replaced;
    };
    
    const isShout = txt => {
        return txt === txt.toUpperCase();
    };
    
    const isQuestion = txt => {
        return txt.endsWith('?');
    };
    
    const noText = txt => {
        return txt.trim() === '';
    };
    
    this.hey = (txt) => {
        const text = replaceDigits(txt);
        
        if (noText(text)) {
            return 'Fine. Be that way!';
        }
    
        if (isShout(text)) {
            return 'Whoa, chill out!';
        }

        if (isQuestion(text)) {
            return 'Sure.';
        }
        
        return 'Whatever.';
    }
};

module.exports = Bob;
