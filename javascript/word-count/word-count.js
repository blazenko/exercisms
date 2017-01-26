
const WordCount = function() {
    this.count = (text) => {
        const result = {};
        const textLC = text.toLowerCase().replace(/'/g, '`');
        console.log('text:', text);
        console.log('textLC:', textLC);
        const words = textLC.split(/[\W]+/g);
        
        words.forEach(item => {
            if (item === '') return;
            result[item] = !result[item] ? 1 : result[item] + 1;
        });
        
        console.log(result);
        return result;
    }
};

module.exports = WordCount;
