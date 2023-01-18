function checkInput(N){
    if (typeof(N) !== 'number')
        return 1;
    if (N < 0 || N > Math.pow(2, 32))
        return 1;
    return 0;
}

function zerosAndOnes(N){
    if (checkInput(N))
        return (-1);
    for (var i = 0, shifting = N, binary = ""; i < 32;
    i++, binary += String(shifting >>> 31), shifting <<= 1);
    if (N === Math.pow(2, 32))
        binary = '1' + binary;
    while (binary.charAt(0) === '0')
        binary = binary.substring(1);
    let res = 0;
    let tmp;
    while (binary.length > 0)
    {
        tmp = 0;
        while (binary.charAt(0) === '1')
            binary = binary.substring(1);
        while (binary.charAt(0) === '0')
        {
            ++tmp;
            binary = binary.substring(1);
        }
        if (tmp > res)
            res = tmp;
    }
    return res;
}

module.exports = zerosAndOnes;