
const Year = function(input) {
    this.year = input;
    
    this.isLeap = () => {
        return isLeapCandidate() && (!isCenturyTurn() || isCenturyException());
    };
    
    const isLeapCandidate = () => {
        return this.year % 4 === 0;
    };
    
    const isCenturyTurn = () => {
        return this.year % 100 === 0;
    };
    
    const isCenturyException = () => {
        return this.year % 400 === 0;
    };
};

module.exports = Year;
