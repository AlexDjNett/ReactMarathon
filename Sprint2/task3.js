const howMuchSec = (...param) => {
    const intervals = [
        [1,"second"],
        [60, "minute"],
        [3600, "hour"],
        [86400, "day"],
        [2592000, "month"],
        [31536000, "year"  ], 
    ];

    let res = 0;
    for (let i = 0; i < param.length; i++) {
        res += intervals[i][0] * param[i];
    }
    return res;
};

console.log(howMuchSec(12, 3));

console.log(howMuchSec(1, 33, 22));

console.log(howMuchSec());

console.log(howMuchSec(12, 3, 3, 3));

console.log(howMuchSec(33, 33, 11));
