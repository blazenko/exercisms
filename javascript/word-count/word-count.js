
const WordCount = function() {
    this.count = (text) => {
        const result = {};
        const textLC = text.toLowerCase();
        const words = textLC.split(/[^\w'\u00C0-\u017F\u0430-\u044f]+/g);
        
        words.forEach(item => {
            if (item === '') return;
            item = item.replace(/^'/, '').replace(/'$/, '');
            if (typeof result[item] == 'function') {
                result[item] = 1;
            }
            else {
                result[item] = !result[item] ? 1 : result[item] + 1;
            }
            
        });
        
        return result;
    }
};

module.exports = WordCount;
