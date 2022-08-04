const { split } = String.prototype;

const whatsMyName = (url) => {
    const hostname = split.call(url, '://')[1];
    if (hostname.indexOf('www.') === 0) {
        return split.call(hostname, '.')[1];
    } else {
        return split.call(hostname, '.')[0];
    }
};

module.exports = whatsMyName;