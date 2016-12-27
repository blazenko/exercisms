'use strict';

const DnaTranscriber = function() {
    const nucMap = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    
    this.toRna = dnaStrand => {
        let rnaStrand = '';

        for (let ch of dnaStrand) {
            rnaStrand += nucMap[ch];
        }

        return rnaStrand;
    }
};

module.exports = DnaTranscriber;
