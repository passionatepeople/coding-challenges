const pingMeMaybe = (ip) => {
    let i = 0, tmp = 0, len = ip.length;
    for (; i<=len; i++) {
        if (ip[i] === '.' || i === len) {
            if (tmp > 255) {
                return false;
            } else {
                tmp = 0;
            }
        } else {
            tmp = tmp*10 + +ip[i];
        }
    }
    return true;
}

module.exports=pingMeMaybe;