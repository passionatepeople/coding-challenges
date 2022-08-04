const whatsMyName = (url) => {
    const hostname = url.split('://')[1];
    if (hostname.indexOf('www.') === 0) {
        return hostname.split('.')[1];
    } else {
        return hostname.split('.')[0];
    }
};

module.exports = whatsMyName;