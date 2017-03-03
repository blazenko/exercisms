'use strict';

const BeerSong = function() {
    this.verse = (n) => {
        const bottWord1 = n === 1 ? 'bottle' : 'bottles';
        const num = n === 0 ? 'No more' : n.toString();
        const oneWord = n === 1 ? 'it' : 'one';
        const nextNum = n === 1 ? 'no more' : n - 1;
        const bottWord2 = nextNum === 1 ? 'bottle' : 'bottles';
        
        const verse1 = `${num} ${bottWord1} of beer on the wall, ${num.toLowerCase()} ${bottWord1} of beer.\n`;
        const verse2 = n > 0
            ? `Take ${oneWord} down and pass it around, ${nextNum} ${bottWord2} of beer on the wall.`
            : 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        
        return verse1 + verse2 + '\n';
    };
    
    this.sing = (start, end) => {
        if (end === undefined) end = 0;
        let song = '';
        
        for (let i = start; i >= end; i--) {
            song += this.verse(i);
            if (i > end) song += '\n';
        }
        
        return song;
    };
};

module.exports = BeerSong;
