module.exports = function lower(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.toLowerCase();
};
