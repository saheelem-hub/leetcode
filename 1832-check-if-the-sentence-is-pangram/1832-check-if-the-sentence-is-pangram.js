/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

let letters = new Set(sentence);

    return letters.size === 26;
};