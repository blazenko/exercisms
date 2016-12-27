'use strict';

const Gigasecond = function(birthDate) {
    this.bd = birthDate;
    
    this.date = () => {
        const bdTime = this.bd.getTime();
        const gvTime = bdTime + Math.pow(10, 12);
        
        const gigaVersary = new Date();
        gigaVersary.setTime(gvTime);
        
        return gigaVersary;
    }
};

module.exports = Gigasecond;
