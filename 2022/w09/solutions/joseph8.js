const goAround = (str) => {
    return [
        str.slice(1) + str.slice(0, 1),
        str.slice(2) + str.slice(0, 2),
        str.slice(3) + str.slice(0, 3),
        str.slice(4) + str.slice(0, 4),
        str.slice(5) + str.slice(0, 5),
        str.slice(6) + str.slice(0, 6),
        str.slice(7) + str.slice(0, 7),
        str.slice(8) + str.slice(0, 8),
        str.slice(9) + str.slice(0, 9),
        str.slice(10) + str.slice(0, 10),
        str.slice(11) + str.slice(0, 11),
        str.slice(12) + str.slice(0, 12),
        str.slice(13) + str.slice(0, 13),
        str.slice(14) + str.slice(0, 14),
        str.slice(15) + str.slice(0, 15),
        str.slice(16) + str.slice(0, 16),
        str.slice(17) + str.slice(0, 17),
        str.slice(18) + str.slice(0, 18),
        str.slice(19) + str.slice(0, 19),
        str.slice(20) + str.slice(0, 20),
        str.slice(21) + str.slice(0, 21),
        str.slice(22) + str.slice(0, 22),
        str.slice(23) + str.slice(0, 23),
    ].slice(0, str.length);
};

module.exports = goAround;
